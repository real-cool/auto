/*随机生成 4字母数字*/
export function genS4(len = 1) {
    let str = '';
    for (let i = 0; i < len; i++) {
        str += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return str;
}

export function genId(len = 4) {
    return (genS4() + '-').repeat(len).slice(0, (len + 1) * 4 - 1);
}

export function transTpl(data: string) {
    return data.indexOf('$') === -1 ? '${' + data + '}' : data
}

export function empty(value: any) {
    return value === undefined || value === null || value === '' || value.length === 0 || isPlainObject(value);
}

/**模板语法字符串化
 * 将对象里的数据 模板版化 同下一个道理
 * @param tpl
 * @param data
 */
export function tpl2str(tpl: string, data: Record<string, any> | Record<string, any>[]) {
    return transTpl(tpl).replace(/\${(.*?)}/g, (_match, key): string => {
        const obj = tpl2res(key, data, '')
        if (empty(obj)) return ''
        else return obj
    })
}

/**模板语法
 * 将对象里的数据 模板版化 比如 {a: {d: 2}, b, c} tpl为 'a.d' 返回值ret则 为 2 如果tpl为 'a' 则返回值为 {d: 2}
 * @param tpl
 * @param data
 * @param ret
 */
export function tpl2res<T>(tpl: string, data: Record<string, any> | Record<string, any>[], ret: T): T {
    const keys = tpl.split(".");
    let value = data;
    for (const key of keys) {
        if (!Array.isArray(value)) {
            value = value[key] || ret;
        } else {
            let ind = key.indexOf('[')
            let pre = key.slice(0, ind)
            // @ts-ignore
            value = pre ? value[pre] : value
            key.match(/\[(\d+)]/g)?.forEach((v) => {
                let i = parseInt(v.slice(1, -1), 10)
                // @ts-ignore
                value = value[i]
            })
        }
    }
    return value as T
}
const o = {};
export function isPlainObject(obj: Record<string, any>) {
    let proto, Ctor;
    if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
    }
    proto = Object.getPrototypeOf(obj);
    if (!proto) {
        return true;
    }
    Ctor = o.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor === "function" && o.toString.call(Ctor) === o.toString.call(Object);
}
//@ts-ignore
export function merge(this: Record<string, any> | void, start: boolean | Record<string, any>, ...args: Record<string, any>[] | any[]) {
    let options, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[i] || {};
        i++;
    }
    if (typeof target !== "object" && typeof target !== "function") {
        target = {};
    }
    if (i === length) {
        target = this;
        i--;
    }
    for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
            for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                    continue;
                }
                if (deep && copy && (isPlainObject(copy) ||
                    (copyIsArray = Array.isArray(copy)))) {
                    src = target[name];
                    if (copyIsArray && !Array.isArray(src)) {
                        clone = [];
                    } else if (!copyIsArray && !isPlainObject(src)) {
                        clone = {};
                    } else {
                        clone = src;
                    }
                    copyIsArray = false;
                    target[name] = merge(deep, clone, copy);
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
}

