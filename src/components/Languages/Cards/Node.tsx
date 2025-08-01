import { LanguageCard } from "@/components/Languages/Card";
import { Quote } from "@/components/Quote";

const NodeCard = () => {

    return (
        <LanguageCard language="Node" icon="images/icons/node-icon.svg">
            <p className="leading-7 text-left">Node.js is a JavaScript runtime built on Chrome’s V8 engine, allowing developers to write server-side applications using JavaScript. It’s lightweight, efficient, and ideal for real-time applications and APIs.</p>
            <ul className="list-disc ml-12 mt-4">
                <li className="my-4">Building fast, scalable backend services and APIs</li>
                <li className="my-4">Handling asynchronous operations and real-time data (e.g., WebSockets)</li>
                <li className="my-4">Creating full-stack JavaScript applications (with Express, NestJS, etc.)</li>
                <li className="my-4">Integrating databases like MongoDB or PostgreSQL</li>
            </ul>
            <span className="block h-[60px]"></span>
            <Quote atBottom>My Node.js experience covers RESTful API development, backend architecture, and full-stack project delivery.</Quote>
        </LanguageCard>
    )
};

export { NodeCard };