import { LanguageCard } from "@/components/Languages/Card";
import { Quote } from "@/components/Quote";

const MagentoCard = () => {

    return (
        <LanguageCard language="Adobe Commerce (Magento)" icon="images/icons/magento-icon.svg">
            <p className="leading-7 text-left">Magento, now known as Adobe Commerce, is a powerful open-source eCommerce platform built on PHP. It is highly customizable, scalable, and designed for complex, large-scale online stores.</p>
            <ul className="list-disc ml-12 mt-4">
                <li className="my-4">Developing robust, enterprise-level eCommerce solutions</li>
                <li className="my-4">Customizing storefronts, checkout flows, and product catalogs</li>
                <li className="my-4">Integrating with third-party services (payment gateways, CRMs, etc.)</li>
                <li className="my-4">Optimizing performance and scalability for high-traffic environments</li>
            </ul>
            <span className="block h-[60px]"></span>
            <Quote atBottom>I have over a decade of experience with Magento, delivering tailored solutions for B2C and B2B clients.</Quote>
        </LanguageCard>
    )
};

export { MagentoCard };