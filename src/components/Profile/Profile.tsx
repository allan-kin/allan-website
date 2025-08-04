"use client";

import Image from "next/image";
import { AnimationTransitionIn } from "@/components/UI/Animations/TransitionIn";
import { TypeAnimation } from "react-type-animation";

const Profile = () => {

    return (
        <div className="block w-full p-4 xl:p-0">
            <div className="flex flex-row flex-wrap md:gap-12 md:flex-nowrap justify-center md:justify-between items-start md:items-center">
                <div className="w-full md:w-1/2 text-center mb-5 md:md-0 flex justify-center items-center">
                    <AnimationTransitionIn>
                        <Image
                            className="rounded-full"
                            src="/images/profile.png"
                            width={400}
                            height={400}
                            alt="Profile"
                            priority
                        />
                    </AnimationTransitionIn>
                </div>
                <div className="w-full md:w-1/2">
                    <AnimationTransitionIn>
                        <h3 className="mb-3">
                            <TypeAnimation
                                sequence={[
                                    'Software Engineer',
                                    2000,
                                    '',
                                    'Fullstack Developer',
                                    2000,
                                    '',
                                    'Adobe Commerce Developer',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h3>
                    </AnimationTransitionIn>
                    <AnimationTransitionIn>
                        <p className="leading-8">
                            Hi, I{"'"}m <strong>Allan</strong> — a full-stack developer with <strong>over 12 years of experience</strong> in <strong>Adobe Commerce (Magento)</strong>
                            {" "}and a strong focus on modern web technologies like <strong>React</strong> and <strong>Node.js</strong>.
                            {" "}I build scalable, performant solutions for both eCommerce and custom web applications.
                            {" "}Passionate about clean code, intuitive UIs, and efficient backend systems.
                        </p>
                    </AnimationTransitionIn>
                </div>
            </div>
        </div>
    );
}

export { Profile };