import { ReactNode } from "react";
import { YearTag } from "@/components/Experiences/Timeline/Year";

const Timeline = ({ children }: { children: ReactNode }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-4">
            <div className="hidden sm:block relative w-10 h-full">
                <span className="absolute top-[-10px] left-[50px]">
                    <YearTag year="2025" />
                </span>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <span className="block rounded-full w-5 h-5 bg-indigo-300"></span>
                </span>
                <span className="block w-5 h-full bg-blue-50 mx-auto">
                    <span className="relative z-2 block rounded-full w-1 h-full bg-indigo-300 mx-auto"></span>
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <span className="block rounded-full w-5 h-5 bg-indigo-300"></span>
                </span>
                <span className="absolute bottom-[-10px] left-[50px]">
                    <YearTag year="2014" />
                </span>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export { Timeline };