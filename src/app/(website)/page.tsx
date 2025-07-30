import { ScreenCard } from "@/components/Shared/ScreenCard";
import { Profile } from "@/components/Profile/Profile";
import { SkillCarrousel } from "@/components/Skills/Carrrousel";
import {HireMe} from "@/components/HireMe/HireMe";

export default function Home() {
    return (
        <>
            <ScreenCard>
                <div className="my-10">
                    <Profile />
                </div>
            </ScreenCard>
            <div className="my-10">
                <SkillCarrousel />
            </div>
            <ScreenCard>
                <HireMe />
            </ScreenCard>
        </>
    );
}
