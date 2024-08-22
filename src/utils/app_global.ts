

export function exec_script(name: string) {
    $autox.callHandler('ExecScript', name, (_: string) => {})
}

export function success_log(msg: string) {
    $autox.callHandler('SuccessLog', msg, (_: string) => {})
}

export function warning_log(msg: string) {
    $autox.callHandler('WarningLog', msg, (_: string) => {})
}

export function danger_log(msg: string) {
    $autox.callHandler('DangerLog', msg, (_: string) => {})
}

export function primary_log(msg: string) {
    $autox.callHandler('PrimaryLog', msg, (_: string) => {})
}

export function info_log(msg: string) {
    $autox.callHandler('InfoLog', msg, (_: string) => {})
}

export function default_log(msg: string) {
    $autox.callHandler('DefaultLog', msg, (_: string) => {})
}

export function open_logger() {
    $autox.callHandler('openLogger', '', () => {})
}

export function hide_logger() {
    $autox.callHandler('LoggerHide', 'hide', (_: string) => {})
}

export function show_logger() {
    $autox.callHandler('LoggerShow', 'show', (_: string) => {})
}

export function clear_logger() {
    $autox.callHandler('LoggerClear', '', () => {})
}

