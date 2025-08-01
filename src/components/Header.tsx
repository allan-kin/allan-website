"use client";
import { Menu } from "@/components/Menu/Menu";
import { MenuMobile } from "@/components/Menu/MenuMobile";
import { useScrollAtTop } from "@/hooks/at-top-scroll";
import { useMemo } from "react";
import clsx from "clsx";

const Header = () => {

    const scrollAtTop = useScrollAtTop();

    const MenuMobileMemo = useMemo(() => <MenuMobile />, []);
    const MenuMemo = useMemo(() => <Menu />, []);

    return (
        <header className="sticky top-2 z-50 block w-300 mx-auto max-w-full px-4 lg:px-0">
            <div className={clsx(
                "block w-full",
                "mt-2 rounded-md",
                "bg-white border-[1px] border-gray-200",
                "transition-all duration-200 ease-in-out",
                scrollAtTop ? "" : "shadow-sm"
            )}>
                <div className="flex flex-row flex-wrap justify-start items-center">
                    <div className="hidden md:block">
                        {MenuMemo}
                    </div>
                    <div className="block w-full md:hidden">
                        {MenuMobileMemo}
                    </div>
                </div>
            </div>
        </header>
    );
}

export { Header };