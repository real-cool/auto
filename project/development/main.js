"ui";
const logs = []

ui.layout(`
    <vertical>
        <webview id="web" h="*"/>
    </vertical>`)

// 加载页面
ui.web.loadUrl("http://10.0.2.2:5173")
ui.web.jsBridge.registerHandler("openLogger", () => {
    const logger = require('./logger.js')
    ui.web.jsBridge.registerHandler("SuccessLog", (data) => logger.success(data));
    ui.web.jsBridge.registerHandler("WarningLog", (data) => logger.warning(data));
    ui.web.jsBridge.registerHandler("DangerLog", (data) => logger.danger(data));
    ui.web.jsBridge.registerHandler("PrimaryLog", (data) => logger.primary(data));
    ui.web.jsBridge.registerHandler("InfoLog", (data) => logger.info(data));
    ui.web.jsBridge.registerHandler("DefaultLog", (data) => logger.default(data));
    ui.web.jsBridge.registerHandler("LoggerHide", (data) => logger.hide());
    ui.web.jsBridge.registerHandler("LoggerShow", (data) => logger.show());
    ui.web.jsBridge.registerHandler("LoggerClear", (data) => logger.clear());
})

// 加载函数
const LIST = require("./modules/bridge.js")
LIST.forEach((handler) => ui.web.jsBridge.registerHandler(handler.name, handler.callback))