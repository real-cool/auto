/// <reference types="vite/client" />

declare namespace globalThis {
    const $autox: {
        callHandler: (name: string, arg: string, callback: (resp: string) => void) => void,
        registerHandler: (name: string, callback: (arg: string, call: (p?: string)=> void) => void) => void,
    }
}