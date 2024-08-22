import type {VerifyProps} from "./type";

const validate = {
    required: (value: any) => value !== undefined && value !== null && value !== '',
    email: (value: string) => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
    phone: (value: string) => /^1[3456789]\d{9}$/.test(value),
    url: (value: string) => /^(http|https):\/\/([\w.]+\/?)\S*/.test(value),
    idcard: (value: string) => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value),
}

export function verify(value: string, verify: VerifyProps): { result: boolean, message: string } {
    let {required, email, phone, idcard, maxLength, minLength, max, min, message, validator} = verify
    let msg = typeof message === 'function' ? message(value) : message;
    if (required && !validate.required(value)) {
        return {result: false, message: msg || '必填'}
    }
    if (email && value && !validate.email(value)) {
        return {result: false, message: msg || '邮箱格式错误'}
    }
    if (phone && value && !validate.phone(value)) {
        return {result: false, message: msg || '手机号格式错误'}
    }
    if (idcard && value && !validate.idcard(value)) {
        return {result: false, message: msg || '身份证格式错误'}
    }
    if (maxLength && value.length > maxLength) {
        return {result: false, message: msg || `最大长度${maxLength}`}
    }
    if (minLength && value.length < minLength) {
        return {result: false, message: msg || `最小长度${minLength}`}
    }
    if (max && value && Number(value) > max) {
        return {result: false, message: msg || `最大值${max}`}
    }
    if (min && value && Number(value) < min) {
        return {result: false, message: msg || `最小值${min}`}
    }
    if (validator) {
        return {result: validator(value), message: msg || '验证失败'}
    }
    return {result: true, message: ''}
}

