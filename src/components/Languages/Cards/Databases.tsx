import { LanguageCard } from "@/components/Languages/Card";
import { Quote } from "@/components/Quote";

const DatabasesCard = () => {

    return (
        <LanguageCard language="Databases" icon="images/icons/mysql-icon.svg" iconWidth={70}>
            <p className="leading-7 text-left">I work with both relational and NoSQL databases, choosing the right tool based on the project{"'"}s structure, performance needs, and scalability requirements.</p>
            <ul className="list-disc ml-12 mt-4">
                <li className="my-4">
                    <span className="block w-full font-bold text-md">Mysql</span>
                    <span className="block w-full leading-7">A widely adopted relational database, ideal for structured data, transactional systems, and reliable SQL-based querying. Commonly used in traditional web applications and eCommerce platforms.</span>
                </li>
                <li className="my-4">
                    <span className="block w-full font-bold text-md">PostgreSQL</span>
                    <span className="block w-full leading-7">A powerful, open-source relational database known for its advanced features, data integrity, and extensibility. Suited for applications that require complex queries, full-text search, or support for JSON and geospatial data.</span>
                </li>
                <li className="my-4">
                    <span className="block w-full font-bold text-md">MongoDB</span>
                    <span className="block w-full leading-7">A flexible NoSQL document database, great for handling unstructured or rapidly evolving data. Ideal for real-time applications, content management systems, and use cases that benefit from a dynamic schema.</span>
                </li>
            </ul>
            <span className="block h-[60px]"></span>
            <Quote atBottom>I use React to build clean, scalable front-end applications with a strong focus on user experience.</Quote>
        </LanguageCard>
    )
};

export { DatabasesCard };