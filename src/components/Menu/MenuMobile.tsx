"use client";

import { Menu } from "lucide-react";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/UI/drawer";
import { menuList } from "@/components/Menu/menu-items";
import Link from "next/link";
import {useState} from "react";

const MenuMobile = () => {

    const menuItems = menuList.filter(item => item.active);

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Drawer open={open} onOpenChange={setOpen}>
                <div className="w-full flex flex-row flex-nowrap justify-between items-center p-3">
                    <DrawerTrigger asChild>
                        <div className="w-12 h-12 cursor-pointer">
                            <Menu color="#000" width={48} height={48} />
                        </div>
                    </DrawerTrigger>
                    <div className="w-[calc(100%-60px)] text-left">
                        <span className="text-2xl font-bold">Allan B Santos</span>
                    </div>
                </div>
                <DrawerContent data-vaul-drawer-direction="left">
                    <DrawerHeader>
                        <DrawerTitle>Menu</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4">
                        <ul className="list-none">
                            {menuItems.map(item => (
                                <li key={item.id}>
                                    <Link
                                        className="text-menu block w-full p-4" href={item.href || '/'}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export { MenuMobile };