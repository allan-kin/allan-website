"use client";

import { useEffect, useRef, useState } from "react";

const useScrollAtTop = (throttleDelay: number = 200): boolean => {

    const throttleId = useRef<NodeJS.Timeout | null>(null);
    const [scrollAtTop, setScrollAtTop] = useState<boolean>(true);

    useEffect(() => {
        const updateScroll = () => {
            setScrollAtTop(window.scrollY === 0);
        };

        const handleScroll = () => {
            if (!throttleId.current) {
                updateScroll();
                throttleId.current = setTimeout(() => {
                    throttleId.current = null;
                    updateScroll();
                }, throttleDelay);
            }
        };

        updateScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            if (throttleId.current) clearTimeout(throttleId.current);
            window.removeEventListener('scroll', handleScroll);
        }

    }, [throttleDelay]);

    return scrollAtTop;
}

export { useScrollAtTop }