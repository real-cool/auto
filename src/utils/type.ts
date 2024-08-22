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
    activeType?: 'click' | 'hover',
    slotWidth?: boolean  //是否宽度为 slot的组件宽度
}

export type Logger = {
    id: number,
    date: Date,
    type?: ColorType,
    message: string,
}