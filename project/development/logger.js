let onLoaded, floatui, hide, show, clear;
ui.post(() => {
    let x, y, windowY, windowX, logWidth = 200, logHeight = 270, tabHeight = 25;
    floatui = floaty.rawWindow(`
                <vertical>
                    <horizontal id="topbar" w="${logWidth}" h="${tabHeight}" bg="#88888888">
                        <vertical id="drag" w="${tabHeight}" h="${tabHeight}" gravity="center">
                            <img src="data:image/png;base64,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"/>
                        </vertical>
                        <vertical gravity="center" w="${logWidth - 2 * tabHeight}" h="${tabHeight}">
                            <text id="title" text="日志" w="*" h="*" gravity="center" textColor="#ffffff"/>
                        </vertical>
                        <vertical id="hideImg" h="${tabHeight}" w="${tabHeight}" gravity="center">
                            <img src="data:image/png;base64,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"/>
                        </vertical>
                    </horizontal>
                    <webview id="web" 
                        w="${logWidth}"
                        h="${logHeight}" 
                        alpha="0.6"
                        />
                </vertical>`);
    hide = function () {
        floatui.topbar.setAlpha(0)
        floatui.web.setAlpha(0)
        floatui.setTouchable(false)
    }
    show = function () {
        floatui.topbar.setAlpha(1)
        floatui.web.setAlpha(0.6)
        floatui.setTouchable(true)
    }
    floatui.setPosition(device.width / 2 - logWidth / 2, 100)
    // 加载页面
    floatui.hideImg.click(() => {
        hide()
    })

    floatui.web.loadUrl("http://172.24.126.252:5173");
    floatui.drag.setOnTouchListener(function (view, event) {
        switch (event.getAction()) {
            case event.ACTION_DOWN:
                // 记录按键被按下时的触摸坐标
                x = event.getRawX();
                y = event.getRawY();
                windowX = floatui.getX();
                windowY = floatui.getY();
                return true;
            case event.ACTION_MOVE:
                // 移动手指时调整悬浮窗位置
                floatui.setPosition(
                    windowX + (event.getRawX() - x),
                    windowY + (event.getRawY() - y)
                );
                return true;
        }
        return true;
    });
    floatui.web.jsBridge.registerHandler("onLoaded", (d, call) => {
        log(d)
        onLoaded && onLoaded()
        log("onLoaded")
        floatui.web.jsBridge.callHandler("home", "", (p) => {
            log("homeEnter")
            log(p)
        })
        call()
    })
    floatui.web.jsBridge.registerHandler("float_page_change", (d, call) => {
        floatui.title.setText(d)
    })
    floatui.web.jsBridge.registerHandler("clear_log", (d, call) => {
        clear && clear()
    })
    const LIST = require("./modules/yxs_bridge.js")
    LIST.forEach((handler) => {
        floatui.web.jsBridge.registerHandler(handler.name, handler.callback)
    })
})


const logger = function (message, type) {
    floatui.web.jsBridge.callHandler("log", `${message}|${type}`, (p) => {
        log('回调');
        log(p)
    })
}

module.exports = {
    onLoaded(e) {
        onLoaded = e
    },
    success(msg) {
        logger(msg, "success")
    },
    info(msg) {
        logger(msg, "info")
    },
    warning(msg) {
        logger(msg, "warning")
    },
    default(msg) {
        logger(msg, "default")
    },
    danger(msg) {
        logger(msg, "danger")
    },
    primary(msg) {
        logger(msg, "primary")
    },
    hide() {
        hide && hide()
    },
    show() {
        show && show()
    },
    clear() {
        floatui.web.jsBridge.callHandler("clear_log", "", (p) => {})
    }
};