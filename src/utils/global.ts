import {ref, Ref} from "vue";
import {Logger} from "./type.ts";
import moment from "moment/moment";

export const loggerData: Ref<Logger[]> = ref([])

export function success_log(message: string) {
    loggerData.value.push({message, type: 'success', date: moment().format('YYYY-MM-DD HH:mm')})
}

export function warning_log(message: string) {
    loggerData.value.push({message, type: 'warning', date: moment().format('YYYY-MM-DD HH:mm')})
}

export function danger_log(message: string) {
    loggerData.value.push({message, type: 'danger', date: moment().format('YYYY-MM-DD HH:mm')})
}

export function primary_log(message: string) {
    loggerData.value.push({message, type: 'primary', date: moment().format('YYYY-MM-DD HH:mm')})
}

export function info_log(message: string) {
    loggerData.value.push({message, type: 'info', date: moment().format('YYYY-MM-DD HH:mm')})
}

export function default_log(message: string) {
    loggerData.value.push({message, type: 'default', date: moment().format('YYYY-MM-DD HH:mm')})
}

export function exec_script(name: string) {
    $autox.callHandler('ExecScript', name, (data: string) => {
        success_log(data)
    })
}

export function register(name: string, action: (data: string)=> void) {
    $autox.registerHandler(name, (data: string, _: (p: string) => void) => {
        action(data)
    })
}