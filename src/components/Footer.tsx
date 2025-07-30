"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin, PhoneCall, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="block bg-white p-12 border-t-[1px] border-gray-200 shadow-top-sm">
            <div className="w-300 max-w-full mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="md:mb-4 lg:mb-0">
                    <h4 className="block w-full font-bold mb-5">Links</h4>
                    <ul>
                        <li className="block w-full mb-4">
                            <Link className="hover:underline" href="/">Home</Link>
                        </li>
                        <li className="block w-full mb-4">
                            <Link className="hover:underline" href="/frameworks-and-languages">Languages</Link>
                        </li>
                        <li className="block w-full mb-4">
                            <Link className="hover:underline" href="/professional-experiences">Professional Experiences</Link>
                        </li>
                    </ul>
                </div>
                <div className="md:mb-4 lg:mb-0">
                    <h4 className="block w-full font-bold mb-5">Frameworks & Languages</h4>
                    <ul>
                        <li className="block w-full mb-4">
                            <span className="flex flex-row flex-nowrap justify-start items-center">
                                <span className="mr-2">
                                    <Image src="images/icons/magento-icon.svg" width={20} height={20} alt="Magento icon" />
                                </span>
                                <span>
                                   Adobe Commerce
                                </span>
                            </span>
                        </li>
                        <li className="block w-full mb-4">
                            <span className="flex flex-row flex-nowrap justify-start items-center">
                                <span className="mr-2">
                                    <Image src="images/icons/react-icon.svg" width={20} height={20} alt="React icon" />
                                </span>
                                <span>
                                   React • NextJs
                                </span>
                            </span>
                        </li>
                        <li className="block w-full mb-4">
                            <span className="flex flex-row flex-nowrap justify-start items-center">
                                <span className="mr-2">
                                    <Image src="images/icons/node-icon.svg" width={20} height={20} alt="Node icon" />
                                </span>
                                <span>
                                   Node (Express)
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="md:mb-4 lg:mb-0">
                    <h4 className="block w-full font-bold mb-5">Social</h4>
                    <ul>
                        <li className="block w-full mb-4">
                            <a className="hover:underline" target="_blank" href="https://www.linkedin.com/in/allan-barbuza-dos-santos">
                                <span className="flex flex-row flex-nowrap justify-start items-center">
                                    <span className="mr-2">
                                        <Image src="images/icons/linkedin-icon.svg" width={20} height={20} alt="LinkedIn icon" />
                                    </span>
                                    <span>LinkedIn</span>
                                </span>
                            </a>
                        </li>
                        <li className="block w-full mb-4">
                            <a className="hover:underline" target="_blank" href="https://wa.me/5547999899292">
                                <span className="flex flex-row flex-nowrap justify-start items-center">
                                    <span className="mr-2">
                                        <Image src="images/icons/whatsapp-icon.svg" width={20} height={20} alt="Whatsapp icon" />
                                    </span>
                                    <span>WhatsApp</span>
                                </span>
                            </a>
                        </li>
                        <li className="block w-full mb-4">
                            <a className="hover:underline" target="_blank" href="https://www.instagram.com/setsukimitsuzushi/">
                                <span className="flex flex-row flex-nowrap justify-start items-center">
                                    <span className="mr-2">
                                        <Image src="images/icons/instagram-icon.svg" width={20} height={20} alt="Instagram icon" />
                                    </span>
                                    <span>Instagram</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:mb-4 lg:mb-0">
                    <h4 className="block w-full font-bold mb-5">Where to find me</h4>
                    <ul>
                        <li className="block w-full mb-4">
                            <a className="hover:underline" target="_blank" href="https://wa.me/5547999899292">
                                <span className="flex flex-row flex-nowrap justify-start items-center">
                                    <span className="mr-2">
                                       <PhoneCall size={20} />
                                    </span>
                                    <span>+55 (47) 9 9989-9292</span>
                                </span>
                            </a>
                        </li>
                        <li className="block w-full mb-4">
                            <a className="hover:underline" target="_blank" href="mailto:allan.technimbus@gmail.com">
                                <span className="flex flex-row flex-nowrap justify-start items-center">
                                    <span className="mr-2">
                                       <Mail size={20} />
                                    </span>
                                    <span>allan.technimbus@gmail.com</span>
                                </span>
                            </a>
                        </li>
                        <li className="block w-full mb-4">
                            <span className="flex flex-row flex-nowrap justify-start items-center">
                                <span className="mr-2">
                                   <MapPin size={20} />
                                </span>
                                <span>Santa Catarina - Brazil</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export { Footer };