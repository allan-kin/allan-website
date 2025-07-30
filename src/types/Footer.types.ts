
type TypeFooterItemBase = {
    label: string;
}

type TypeFooterItemLink = TypeFooterItemBase & { href: string; }
type TypeFooterItemAction = TypeFooterItemBase & { action: () => void; }

export type TypeFooterItem = TypeFooterItemLink | TypeFooterItemAction;