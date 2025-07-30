import { ReactNode } from "react";
import { clsx } from "clsx";

const Quote = ({ atBottom = false, children }: { atBottom?: boolean; children: ReactNode; }) => {

    return (
        <div className={clsx(
            atBottom ? "absolute bottom-0 right-[20px] w-[calc(100%-20px] mb-3" : ""
        )}>
            <div className="font-light text-sm text-gray-700 text-right italic leading-6">
                {'"'}
                {children}
                {'"'}
            </div>
        </div>
    );
}

export { Quote };