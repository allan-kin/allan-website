"use client";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/UI/navigation-menu";
import { menuList } from "@/components/Menu/menu-items";

const Menu = () => {

    const menuItems = menuList.filter(item => item.active);

    return (
        <NavigationMenu className="w-full p-4">
            <NavigationMenuList>
                {menuItems.map(item => (
                    <NavigationMenuItem key={item.id}>
                        <NavigationMenuLink asChild className="py-2 px-4">
                            <Link className="text-menu" href={item.href || '/'}>{item.label}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export { Menu }