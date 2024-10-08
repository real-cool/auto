let logWindow,
  windowTitle = "日志",
  onloaded,
  onerror,
  density = context.getResources().getDisplayMetrics().density,
  windowTouchable =
    (floaty.checkPermission() ||
      (alert(
        "本脚本需要悬浮窗权限来显示悬浮窗，请在随后的界面中允许并重新运行本脚本。"
      ),
      floaty.requestPermission(),
      stop()),
    ui.post(() => {
      try {
        (logWindow = floaty.rawWindow(`
    <vertical id="floatyView" alpha="0.9">
      <webview id="web" />
    </vertical>`)).web
          .getSettings()
          .setAllowFileAccessFromFileURLs(!0),
          logWindow.web.getSettings().setAllowUniversalAccessFromFileURLs(!0),
          logWindow.web.loadUrl(
            "file://" + files.path("./logger/ui/index.html")
          ),
          logWindow.setTouchable(!1),
          logWindow.setPosition(50, 100),
          logWindow.web.jsBridge.registerHandler("copyText", (e) => {
            setClip(e), toast("已复制到剪切板");
          }),
          logWindow.web.jsBridge.registerHandler("resize", (e) => {
            var [e, o] = e.split(",");
            logWindow.setSize(parseInt(e) * density, parseInt(o) * density);
          }),
          logWindow.web.jsBridge.registerHandler("visibility", (e) => {
            "8" === e && hide(), "0" === e && show();
          }),
          logWindow.web.jsBridge.registerHandler("move", (e) => {
            var [e, o] = e.split(",");
            logWindow.setPosition(parseInt(e) * density, parseInt(o) * density);
          }),
          logWindow.web.jsBridge.registerHandler("register", () => {
            register();
          }),
          logWindow.web.jsBridge.registerHandler("onloaded", () => {
            register(),
              logWindow.web.jsBridge.callHandler(
                "setWindowTitle",
                windowTitle,
                () => {}
              ),
              onloaded && onloaded();
          });
      } catch (e) {
        console.log(e), (onerror || alert)(e), exit();
      }
    }),
    !1),
  isAccessibilityEnabled = () => {
    var o = context
      .getSystemService(android.content.Context.ACCESSIBILITY_SERVICE)
      .getEnabledAccessibilityServiceList(
        android.accessibilityservice.AccessibilityServiceInfo.FEEDBACK_GENERIC
      );
    for (let e = 0; e < o.size(); e++)
      if (o.get(e).getId().startsWith(context.getPackageName())) return !0;
  };
try {
  isAccessibilityEnabled()
    ? (events.setKeyInterceptionEnabled("volume_down", !0),
      events.observeKey(),
      events.onKeyDown("volume_down", function (e) {
        logWindow &&
          ((windowTouchable = !windowTouchable),
          logWindow.setTouchable(windowTouchable),
          logWindow.web.jsBridge.callHandler(
            "touchable",
            windowTouchable ? "1" : "0",
            () => {}
          ));
      }))
    : dialogs
        .build({
          title: "axp-logger",
          content: "无障碍权限未开启，无法切换运行模式，请选择窗口运行模式",
          positive: "穿透模式",
          negative: "操作模式",
          neutral: "退出",
        })
        .on("negative", () => {
          (windowTouchable = !0),
            logWindow.setTouchable(windowTouchable),
            logWindow.web.jsBridge.callHandler(
              "touchable",
              windowTouchable ? "1" : "0",
              () => {}
            );
        })
        .on("positive", () => {
          (windowTouchable = !1),
            logWindow.setTouchable(windowTouchable),
            logWindow.web.jsBridge.callHandler(
              "touchable",
              windowTouchable ? "1" : "0",
              () => {}
            );
        })
        .on("neutral", () => {
          exit();
        })
        .show();
} catch (error) {
  alert(error);
}
let register = () => {
  var e = android.provider.Settings.Secure,
    e = e.getString(context.getContentResolver(), e.ANDROID_ID);
  logWindow.web.jsBridge.callHandler(
    "setLicenseKey",
    context.getPackageName() + `/${e}/` + LicenseKey,
    () => {}
  );
};
const logger = function (e, o) {
    logWindow
      ? logWindow.web.jsBridge.callHandler("log", e + "," + o, () => {})
      : console.log("日志窗口未加载");
  },
  info = function (e) {
    logger("info", e), console.info(e);
  },
  log = function (e) {
    logger("info", e), console.log(e);
  },
  error = function (e) {
    "object" == typeof e && logger("error", e.message + "\n" + e.stack),
      logger("error", e),
      console.error(e);
  },
  warn = function (e) {
    logger("warn", e), console.warn(e);
  },
  debug = function (e) {
    logger("debug", e), console.log(e);
  },
  success = function (e) {
    logger("success", e), console.log(e);
  };
let sizeBeforeHide = { width: 0, height: 0 };
const hide = function () {
    logWindow &&
      ((sizeBeforeHide.width = logWindow.getWidth()),
      (sizeBeforeHide.height = logWindow.getHeight()),
      logWindow.setSize(1, 1));
  },
  show = function () {
    logWindow && logWindow.setSize(sizeBeforeHide.width, sizeBeforeHide.height);
  },
  clear = function () {
    logWindow && logWindow.web.jsBridge.callHandler("clear", "", () => {});
  };
var LicenseKey = "";
const setLicenseKey = function (e) {
  LicenseKey = e;
};
module.exports = {
  setLicenseKey: setLicenseKey,
  log: log,
  info: info,
  error: error,
  warn: warn,
  debug: debug,
  success: success,
  hide: hide,
  show: show,
  clear: clear,
  setTouchable: function (e) {
    (windowTouchable = e),
      logWindow &&
        (logWindow.setTouchable(windowTouchable),
        logWindow.web.jsBridge.callHandler(
          "touchable",
          windowTouchable ? "1" : "0",
          () => {}
        ));
  },
  setTitle(e) {
    windowTitle = e;
  },
  setPosition(e, o) {
    logWindow && logWindow.setPosition(e, o);
  },
  setSize(e, o) {
    logWindow && logWindow.setSize(e, o);
  },
  onloaded(e) {
    onloaded = e;
  },
  onerror(e) {
    onerror = e;
  },
};
