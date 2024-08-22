


export function register(name: string, action: (data: string)=> void) {
    $autox.registerHandler(name, (data: string, _: (p: string) => void) => {
        action(data)
    })
}