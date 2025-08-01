import {TypeMenuItem} from "@/types/Menu.types";

const menuList: TypeMenuItem[] = [
    {
        id: 'home',
        label: 'Home',
        href: '/',
        active: true
    },
    {
        id: 'experience',
        label: 'Professional Experiences',
        href: '/professional-experiences',
        active: true
    },
    {
        id: 'languages',
        label: 'Frameworks & Languages',
        href: '/frameworks-and-languages',
        active: true
    }
];

export { menuList };