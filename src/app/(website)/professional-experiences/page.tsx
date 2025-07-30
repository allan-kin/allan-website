import type { Metadata } from "next";
import { ScreenCard } from "@/components/Shared/ScreenCard";
import { ExperiencesList } from "@/components/Experiences/List";
import { Timeline } from "@/components/Experiences/Timeline";

export const metadata: Metadata = {
    title: 'Professional Experiences',
    description: "Here you will have access to my career and my professional timeline"
};

export default function Experiences() {
    return (
        <ScreenCard>
            <div className="my-10">
                <h3 className="mb-10">Professional Experiences</h3>
                <div className="block w-full">
                    <Timeline>
                        <ExperiencesList />
                    </Timeline>
                </div>
            </div>
        </ScreenCard>
    );
}
