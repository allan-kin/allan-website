import { ReactNode } from "react";

interface ExperienceCardProps {
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    range?: string;
    children?: ReactNode;
}

const ExperienceCard = (props: ExperienceCardProps) => {

    const {
        children,
        jobTitle,
        company,
        location,
        startDate,
        endDate,
        range
    } = props;

    return (
        <div className="relative bg-gray-100/20 p-4 rounded-sm shadow-sm hover:shadow-md">
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-between items-center mb-1">
                <div className="w-full md:w-auto">
                    <span className="text-lg">
                        <span className="text-gray-700 font-bold">{jobTitle}</span>
                        {" "}at{" "}
                        <span className="text-indigo-400 font-medium">{company}</span>
                    </span>
                </div>
                <div className="w-full md:w-auto">
                    <span className="text-sm text-gray-700 italic">
                        {startDate} - {endDate} {range && `(${range})`}
                    </span>
                </div>
            </div>
            <div className="block w-full mb-5">
                <span className="text-gray-700 text-sm font-medium mr-3">{location}</span>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export { ExperienceCard };