import Image from "next/image";
import { Button } from "@/components/UI/button";
import Link from "next/link";
import { AnimationOnScrollReveal } from "@/components/UI/Animations/OnScrollReveal";

const HireMe = () => {
    return (
        <AnimationOnScrollReveal>
            <div className="flex flex-row flex-wrap justify-center items-center md:flex-nowrap py-10 leading-8">
                <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
                    <Image className="rounded-sm" src="/images/hire-me.png" width={500} height={500} alt="Hire me" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="px-10">
                        <h2 className="text-3xl font-bold mb-4">Let{"'"}s Work Together</h2>
                        <p className="text-muted-foreground mb-6">
                            Whether you{"'"}re looking to build a high-performance web app, need help refining your product, or just want to explore possibilities — I{"'"}d love to hear from you. I bring 12+ years of experience in building reliable, scalable solutions.
                        </p>
                        <p className="text-muted-foreground">
                            Reach out and let{"'"}s make something great together.
                        </p>
                        <Button variant="default" className="mt-6 cursor-pointer" asChild>
                            <Link href="https://wa.me/5547999899292" target="_blank">
                                Contact Me
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </AnimationOnScrollReveal>
    );
}

export { HireMe };