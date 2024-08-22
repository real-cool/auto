export default {
    ExecScript(params: string) {
        return new Promise((rv)=> {
            console.log('[ExecScript]', params);
            console.log(`./scripts/${params}.js`);
            engines.execScriptFile(`./scripts/${params}.js`);
            rv('ok')
        });
    },
    LaunchApp: (params: string) => {
        return new Promise((rv) => {
            rv(String(app.launchApp(params)))
        })
    },
    ClickPoint(params: string) {
        const [x, y] = params.split(":");
        return new Promise((rv) => {
            threads.start(() => press(Number(x), Number(y), 100))
            rv('')
        })
    },
    Back() {
        return new Promise((rv) => {
            rv(String(back()))
        })
    },
    MLKitOcr() {
        return new Promise((rv) => {
            threads.start(() => {
                if (!images.requestScreenCapture()) {
                    toastLog('请求截图权限失败')
                }
                const img = images.captureScreen()
                //@ts-ignore
                const result = gmlkit.ocr(img, 'zh').toArray(3)
                log(result)
                img.recycle()
                rv(JSON.stringify(result))
            })
        })
    }
}