import { ReactNode } from "react";

const ScreenCard = ({ children }: { children?: ReactNode }) => {
    return (
        <div className="block w-full p-4 md:p-0">
            <div className="block w-300 max-w-full mx-auto">
                {children}
            </div>
        </div>
    );
}

export { ScreenCard };