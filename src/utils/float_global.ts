import {ref, Ref} from "vue";
import {Logger} from "./type.ts";

export const loggerData: Ref<Logger[]> = ref([])

export function success_log(message: string) {
    const d = new Date()
    loggerData.value.unshift({message, type: 'success', date: d, id: d.getTime()})
}

export function warning_log(message: string) {
    const d = new Date()
    loggerData.value.unshift({message, type: 'warning', date: d, id: d.getTime()})
}

export function danger_log(message: string) {
    const d = new Date()
    loggerData.value.unshift({message, type: 'danger', date: d, id: d.getTime()})
}

export function primary_log(message: string) {
    const d = new Date()
    loggerData.value.unshift({message, type: 'primary', date: d, id: d.getTime()})
}

export function info_log(message: string) {
    const d = new Date()
    loggerData.value.unshift({message, type: 'info', date: d, id: d.getTime()})
}

export function default_log(message: string) {
    const d = new Date()
    loggerData.value.unshift({message, type: 'default', date: d, id: d.getTime()})
}

export function copyText(e: Event) {
    // 使用 Clipboard API 复制文本
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText((e.target as HTMLElement).innerText).then(() => {
            // 可选：给用户反馈
            success_log("复制成功");
        }).catch(err => {
            // 处理错误
            danger_log("复制失败：" + err.message);
        });
    } else {
        fallbackCopyText((e.target as HTMLElement).innerText)
    }
}

function fallbackCopyText(text: string) {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    success_log("文本已复制！");
}

export function exec_fun(name: string, args: string, call?: (_state: string) => void) {
    $autox.callHandler(name, args, (state: string) => {
        success_log(`执行${name}成功, 参数: ${args}, 返回值: ${state}`)
        call && call(state)
    })
}