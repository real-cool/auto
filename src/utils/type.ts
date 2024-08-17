export type BaseAction = {
    id: string | number,
    name: string;
    action: (params: Record<string, any>) => void,
    description?: string;
}

export type TabbarItem = {
    icon: IconType,
    name: string,
    to: string
}

export type TabbarSet = {
    data: TabbarItem[],
    active: number,
    change: (index: number) => void
}

export type IconType =
    ''
    | 'move'
    | 'log'
    | 'edit'
    | 'caozuorizhi'
    | 'action'
    | 'task'
    | 'tasking'
    | 'task-tpl'
export type IconSize = 'sa' | 'sm' | 'base' | 'md' | 'lg'