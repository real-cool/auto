"use strict";
var currentEngine = engines.myEngine();
var runningEngines = engines.all();
var currentSource = currentEngine.getSource() + '';
if (runningEngines.length > 1) {
    runningEngines.forEach(function (compareEngine) {
        var compareSource = compareEngine.getSource() + '';
        if (currentEngine.id !== compareEngine.id && compareSource === currentSource) {
            // 强制关闭同名的脚本
            compareEngine.forceStop();
        }
    });
}
if (!requestScreenCapture()) {
    toastLog('请求截图权限失败');
    exit();
}
sleep(1000);
// 识别结果和截图信息
var result = [];
var img = null;
var running = true;
var capturing = true;
/**
 * 截图并识别OCR文本信息
 */
function captureAndOcr() {
    capturing = true;
    img && img.recycle();
    img = captureScreen();
    if (!img) {
        toastLog('截图失败');
    }
    var start = new Date();
    //结果转数组：层级：3
    result = gmlkit.ocr(img, "zh").toArray(3);
    log(result);
    toastLog('耗时' + (new Date() - start) + 'ms');
    capturing = false;
}
captureAndOcr();
// 获取状态栏高度
var offset = -getStatusBarHeightCompat();
//let offset = 0;
// 绘制识别结果
var window = floaty.rawWindow(<canvas id="canvas" layout_weight="1"/>);
// 设置悬浮窗位置
ui.post(function () {
    window.setPosition(0, offset);
    window.setSize(device.width, device.height);
    window.setTouchable(false);
});
// 操作按钮
var clickButtonWindow = floaty.rawWindow(<vertical>
        <button id="captureAndOcr" text="截图识别"/>
        <button id="closeBtn" text="退出"/>
    </vertical>);
ui.run(function () {
    clickButtonWindow.setPosition(device.width / 2 - ~~(clickButtonWindow.getWidth() / 2), device.height * 0.65);
});
// 点击识别
clickButtonWindow.captureAndOcr.click(function () {
    result = [];
    ui.run(function () {
        clickButtonWindow.setPosition(device.width, device.height);
    });
    setTimeout(function () {
        threads.start(function () {
            captureAndOcr();
            ui.run(function () {
                clickButtonWindow.setPosition(device.width / 2 - ~~(clickButtonWindow.getWidth() / 2), device.height * 0.65);
            });
        });
    }, 500);
});
// 点击关闭
clickButtonWindow.closeBtn.click(function () {
    exit();
});
var Typeface = android.graphics.Typeface;
var paint = new Paint();
paint.setStrokeWidth(1);
paint.setTypeface(Typeface.DEFAULT_BOLD);
paint.setTextAlign(Paint.Align.LEFT);
paint.setAntiAlias(true);
paint.setStrokeJoin(Paint.Join.ROUND);
paint.setDither(true);
window.canvas.on('draw', function (canvas) {
    if (!running || capturing) {
        return;
    }
    // 清空内容
    canvas.drawColor(0xFFFFFF, android.graphics.PorterDuff.Mode.CLEAR);
    if (result && result.length > 0) {
        for (var i = 0; i < result.length; i++) {
            var ocrResult = result[i];
            drawRectAndText(ocrResult.text + ' #信心:' + ocrResult.confidence.toFixed(2), ocrResult.bounds, '#00ff00', canvas, paint);
        }
    }
});
setInterval(function () { }, 3000);
events.on('exit', function () {
    // 标记停止 避免canvas导致闪退
    running = false;
    // 回收图片
    img && img.recycle();
    // 撤销监听
    window.canvas.removeAllListeners();
});
/**
 * 绘制文本和方框
 *
 * @param {*} desc
 * @param {*} rect
 * @param {*} colorStr
 * @param {*} canvas
 * @param {*} paint
 */
function drawRectAndText(desc, rect, colorStr, canvas, paint) {
    var color = colors.parseColor(colorStr);
    paint.setStrokeWidth(1);
    paint.setStyle(Paint.Style.STROKE);
    // 反色
    paint.setARGB(255, 255 - (color >> 16 & 0xff), 255 - (color >> 8 & 0xff), 255 - (color & 0xff));
    canvas.drawRect(rect, paint);
    paint.setARGB(255, color >> 16 & 0xff, color >> 8 & 0xff, color & 0xff);
    paint.setStrokeWidth(1);
    paint.setTextSize(20);
    paint.setStyle(Paint.Style.FILL);
    canvas.drawText(desc, rect.left, rect.top, paint);
    paint.setTextSize(10);
    paint.setStrokeWidth(1);
    paint.setARGB(255, 0, 0, 0);
}
/**
 * 获取状态栏高度
 *
 * @returns
 */
function getStatusBarHeightCompat() {
    var result = 0;
    var resId = context.getResources().getIdentifier("status_bar_height", "dimen", "android");
    if (resId > 0) {
        result = context.getResources().getDimensionPixelOffset(resId);
    }
    if (result <= 0) {
        result = context.getResources().getDimensionPixelOffset(R.dimen.dimen_25dp);
    }
    return result;
}
