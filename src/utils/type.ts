import {Component} from "vue";

export type BaseAction = {
    id: string | number,
    name: string;
    action: (params: Record<string, any>) => void,
    description?: string;
}

export type TabbarItem = {
    icon: IconType,
    name: string,
    to: Component
}

export type ColorType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

export type IconType =
    ''
    | 'empty'
    | 'close'
    | 'move'
    | 'log'
    | 'edit'
    | 'caozuorizhi'
    | 'action'
    | 'task'
    | 'tasking'
    | 'task-tpl'
    | 'setting'
    | 'sync'
    | 'check'
    | 'plus'
    | 'delete'
    | 'down'
    | 'up'
    | 'right'
    | 'left'
    | 'warning'
    | 'f-success'
    | 'search'
    | 'f-warning'
export type IconSize = 'sa' | 'sm' | 'base' | 'md' | 'lg'

export type IconProps = {
    icon: IconType;
    size?: IconSize;
    wrapClass?: string;
}

export type ListerColumn = {
    data: string,
    title: string,
}

export type ListerProps = {
    title?: string,
    data: Record<string, any>,
    column: ListerColumn[]
}

export type ButtonSize = 'sm' | 'base' | 'md'

export type ButtonProps = {
    wrapClass?: string,
    icon?: IconProps,
    text: string,
    type?: ColorType,
    size?: ButtonSize
}

export type PopperProps = {
    show?: boolean,
    teleportTo?: string,
    activeType?: 'click' | 'hover',
    slotWidth?: boolean,  //是否宽度为 slot的组件宽度
    offsetY?: number | string
}

export type Logger = {
    id: number,
    date: Date,
    type?: ColorType,
    message: string,
}
export type VerifyProps = {
    required?: boolean,
    email?: boolean,
    phone?: boolean,
    idcard?: boolean,
    maxLength?: number,
    minLength?: number,
    max?: number,
    min?: number,
    message?: ((v: string) => string) | string,
    validator?: (v: string) => boolean
}

export type Rules = Record<string, VerifyProps>

export type FormProps = {
    rules?: Rules,
    size?: 'sm' | 'md' | 'lg',
    value?: Record<string, any>,
    wrapClass?: string,
    theme?: 'light' | 'dark',
}

export type FormExpose = {
    validate: () => boolean,
    resetFields: () => void,
}

export type FormItemProps = {
    wrapClass?: string,
    mainClass?: string,
    msgClass?: string,
    label?: string,
    msg?: string,
}

export type FieldProps = {
    name?: string,
    wrapClass?: string,
    value?: any,
    frontIcon?: IconProps,
    placeholder?: string,
    readonly?: boolean,
    endIcon?: IconProps,
    inputClass?: string,
}

export type TabInnerPageProps = {
    title?: string,
    tabs: TabbarItem[],
    current?: number,
}

export type SelectorProps = {
    data?: Record<string, any>[],
    tpl?: [string, string], // id, name
    endIcon?: IconProps,
    inputClass?: string,
    placeholder?: string,
    wrapClass?: string,
    name?: string,
    value?: any,
    frontIcon?: IconProps,
}