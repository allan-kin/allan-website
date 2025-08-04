"use client";

import { ScreenCard } from "@/components/Shared/ScreenCard";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";
import { skillIcons } from "@/components/Skills/skill-list";


const SkillCarrousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 20 }, [ Autoplay() ]);

    return (
        <div className="block w-full bg-blue-50 py-10">
            <ScreenCard>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {skillIcons.map(skillIcon => (
                            <div key={skillIcon.id} className="w-[40%] md:min-w-[20%] select-none">
                                <div className="flex flex-row flex-wrap justify-center items-center">
                                    <div className="w-full flex justify-center items-center">
                                        <Image src={skillIcon.icon} width={50} height={50} alt={skillIcon.name} />
                                    </div>
                                    <div className="w-50 mx-auto text-center mt-2">
                                        <span className="text-gray-500 font-bold text-center">
                                            {skillIcon.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ScreenCard>
        </div>
    )
};

export { SkillCarrousel}