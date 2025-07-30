import { LanguageCard } from "@/components/Languages/Card";
import { Quote } from "@/components/Quote";

const ReactCard = () => {

    return (
        <LanguageCard language="ReactJs" icon="images/icons/react-icon.svg">
            <p className="leading-7 text-left">React is a JavaScript library developed by Facebook for building fast, interactive user interfaces, particularly for single-page applications (SPAs). It uses a component-based architecture and a virtual DOM for high performance.</p>
            <ul className="list-disc ml-12 mt-4">
                <li className="my-4">Creating modern, responsive user interfaces</li>
                <li className="my-4">Building reusable UI components for maintainable front-end development</li>
                <li className="my-4">Developing SPAs with smooth navigation and dynamic content</li>
                <li className="my-4">Integrating with backend APIs or headless CMSs for a decoupled architecture</li>
            </ul>
            <span className="block h-[40px]"></span>
            <Quote atBottom>I use React to build clean, scalable front-end applications with a strong focus on user experience.</Quote>
        </LanguageCard>
    )
};

export { ReactCard };