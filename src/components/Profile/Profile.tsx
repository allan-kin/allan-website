"use client";

const Profile = () => {

    return (
        <div className="block w-full p-4 xl:p-0">
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-between items-start md:items-center">
                <div className="w-full md:w-1/2 text-center mb-5 md:md-0">
                    <span className="w-[400px] h-[400px] bg-gray-200 rounded-full block mx-auto md:mx-0"></span>
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="mb-3">Software Engineering</h3>
                    <p className="leading-8">
                        Hi, I{"'"}m <strong>Allan</strong> — a full-stack developer with <strong>over 12 years of experience</strong> in <strong>Adobe Commerce (Magento)</strong>
                        {" "}and a strong focus on modern web technologies like <strong>React</strong> and <strong>Node.js</strong>.
                        {" "}I build scalable, performant solutions for both eCommerce and custom web applications.
                        {" "}Passionate about clean code, intuitive UIs, and efficient backend systems.
                    </p>
                </div>
            </div>
        </div>
    );
}

export { Profile };