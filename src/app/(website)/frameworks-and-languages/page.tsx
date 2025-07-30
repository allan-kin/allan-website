import type { Metadata } from "next";
import { ScreenCard } from "@/components/Shared/ScreenCard";
import { LanguageList } from "@/components/Languages/List";

export const metadata: Metadata = {
    title: 'Programming Languages',
    description: 'Here you will have access of a list of languages that I have knowledge'
};

export default function Languages() {
    return (
        <ScreenCard>
            <div className="my-10">
                <h3 className="mb-10">Frameworks & Languages</h3>
                <LanguageList />
            </div>
        </ScreenCard>
    );
}
