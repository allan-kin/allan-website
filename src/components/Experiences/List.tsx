"use client";

import { ExperienceCard } from "@/components/Experiences/Cards";
import {ExperienceCardList} from "@/components/Experiences/Cards/List";
import {YearTag} from "@/components/Experiences/Timeline/Year";

const ExperiencesList = () => {

    return (
        <div className="block w-full">
            <ul className="list-none">
                <li className="relative mb-5">
                    <ExperienceCard
                        jobTitle="Software Engineer"
                        company="Durable"
                        location="Vancouver (Remote)"
                        startDate="Jan 2024"
                        endDate="Jul 2025"
                    >
                        <ExperienceCardList items={[
                            "Developed and shipped customer-facing features using React, Next.js, Node.js, Express, and TypeScript, enhancing the user experience and platform scalability.",
                            "Redesigned and implemented a modern payment flow using Stripe Embedded Checkout, improving UX and conversion rates.",
                            "Built an internal admin panel using React, ShadCN, TanStack Table, and custom components inspired by Yii2’s GridView/DetailView patterns.",
                            "Contributed to the custom website builder, expanding functionality and component flexibility for content creators.",
                            "Integrated custom domains into the user journey, streamlining onboarding and setup via a guided UI built with Next.js.",
                            "Collaborated on custom theme architecture, leveraging Tailwind CSS (v3 & v4), shadcn/ui, and Headless UI to deliver performant and maintainable frontend experiences.",
                            "Actively utilized AI tools for code generation, refactoring, documentation, and rapid prototyping during daily development."
                        ]}/>
                    </ExperienceCard>
                    <span className="absolute left-[-90px] bottom-5">
                        <YearTag year="2024" withCircle />
                    </span>
                </li>
                <li className="relative mb-5">
                    <span className="absolute left-[-90px]">
                        <YearTag year="2023" withCircle />
                    </span>
                    <ExperienceCard
                        jobTitle="Chief Technology Officer (CTO)"
                        company="SoftwareKeep"
                        location="Vancouver (Remote)"
                        startDate="Feb 2016"
                        endDate="Dec 2023"
                    >
                        <ExperienceCardList items={[
                            "Architected and led the development of a headless e-commerce frontend using React, Next.js, GraphQL, and REST APIs integrated with Adobe Commerce (Magento).",
                            "Directed cross-functional engineering teams across Magento, Shopify, and Yii2 platforms, ensuring scalable architecture and sustainable growth.",
                            "Built custom Magento 2 modules to extend functionality, improve UX, and support complex B2C and B2B operations.",
                            "Designed and launched a custom payment gateway to support recurring billing and diverse regional methods.",
                            "Executed complex store migrations and platform integrations with minimal downtime and high data fidelity.",
                            "Created a centralized ERP system to unify order management across Magento 1, Magento 2, and Shopify.",
                            "Managed AWS infrastructure including EC2, RDS, S3, and Route 53, with a focus on performance and cost optimization.",
                            "Developed a reusable Shopify theme system, standardizing branding and accelerating store launches."
                        ]}/>
                    </ExperienceCard>
                    <span className="absolute left-[-90px]">
                        <YearTag year="2016" withCircle />
                    </span>
                </li>
                <li className="relative mb-5">
                    <ExperienceCard
                        jobTitle="Magento Developer"
                        company="Summa Solutions"
                        location="Buenos Aires (Remote)"
                        startDate="Jul 2015"
                        endDate="Jan 2016"
                    >
                        <ExperienceCardList items={[
                            "Developed and maintained custom Magento modules for enterprise-level clients in Latin America and the U.S.",
                            "Created custom product types and backend workflows tailored to client-specific needs.",
                            "Collaborated with Adobe’s engineering team to deliver features aligned with best practices and compliance standards.",
                            "Ensured platform security by applying patches and proactively resolving vulnerabilities."
                        ]}/>
                    </ExperienceCard>
                </li>
                <li className="relative mb-5">
                    <span className="absolute left-[-90px] -top-5">
                        <YearTag year="2015" withCircle />
                    </span>
                    <ExperienceCard
                        jobTitle="Magento Developer"
                        company="Trezo"
                        location="Brasil (On-site)"
                        startDate="Jun 2014"
                        endDate="Jun 2015"
                    >
                        <ExperienceCardList items={[
                            "Built and maintained custom modules for Magento 1.x storefronts, supporting performance and business requirements.",
                            "Enhanced frontend UX and backend operations using PHP, KnockoutJS, jQuery, and custom admin workflows.",
                            "Applied security updates and optimized site performance through code and infrastructure changes."
                        ]}/>
                    </ExperienceCard>
                </li>
            </ul>
        </div>
    )
}

export { ExperiencesList };