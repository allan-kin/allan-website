
export type TypeMenuItem = {
    id: string;
    label: string;
    href?: string;
    active: boolean;
    children?: TypeMenuItem[];
}
