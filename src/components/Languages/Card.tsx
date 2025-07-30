import Image from "next/image";
import { ReactNode } from "react";

const LanguageCard = ({ language, icon, iconWidth = 45,  children }: { language: string; icon: string; iconWidth?: number; children?: ReactNode }) => {

    return (
        <div className="relative bg-gray-200/20 p-4 rounded-sm shadow-sm hover:shadow-md">
            <div className="flex flex-row flex-nowrap justify-between items-center mb-8">
                <span className="font-bold text-lg">{language}</span>
                <span>
                    <Image src={icon} width={iconWidth} height={iconWidth} alt={`${language} icon`} />
                </span>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export { LanguageCard };