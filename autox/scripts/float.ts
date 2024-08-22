// axp-logger文档 http://docs.axp.auair.cn
const logger = require('./logger.js')

logger.onLoaded(()=> {
    log('加载日志悬浮框开始运行')
    log(Object.keys(threads).join(","))
    //threads.runAsync(main)
})

const main = () => {
    log('开始记录日志')
    logger.success('成功开启 success 日志');
    logger.warning('成功开启 warning 日志');
    logger.danger('成功开启 danger 日志');
    logger.primary('成功开启 primary 日志');
    logger.info('成功开启 info 日志');
    logger.default('成功开启 default 日志');
    setInterval(()=> {}, 1000)
}
