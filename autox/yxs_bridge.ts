import YXSApi from './service/yxs';

const modules = [
    // 导入模块放到这里
    YXSApi
] as { [key: string]: (_: string) => Promise<string> }[]

const apis = [];
for (const module of modules) {
    apis.push(...Object.keys(module).map((key) => {
        return {
            name: key,
            callback: (params: string, cb: (data: string) => void) => {
                module[key](params).then(res=> {
                    cb(res);
                })
            }
        }
    }))
}

module.exports = apis