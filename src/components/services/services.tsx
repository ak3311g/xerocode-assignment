import Bg from "../common/bg"
import ServiceCard from "./serviceccard"

export default function Services() {

    const services = [
        {
            title: 'Custom Software Development',
            description: 'Create custom software tailored for your unique needs, including front-end, and core back-end technology.',
            img: '/document-code.png'
        },
        {
            title: 'QA and Testing',
            description: 'Create custom software tailored for your unique needs, including front-end, and core back-end technology.',
            img: '/setting-5.png'
        },
        {
            title: 'AI and Data Science',
            description: 'Use leading AI, machine learning, and data engineering technologies to unlock business value.',
            img: '/data.png'
        },
        {
            title: 'UI/UX Design',
            description: 'Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.',
            img: '/brush.png'
        },
        {
            title: 'Mobile App Development',
            description: 'Build performant, scalable, and secure mobile applications for iOS and Android devices.',
            img: '/mobile.png'
        },
        {
            title: 'Platform and Infrastruture',
            description: 'Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.',
            img: '/shapes.png'
        }
    ]

    return (
        <>
            <div className="flex flex-col w-full justify-center items-center">
                <div className="flex flex-col w-full justify-center items-center">
                    <div className="text-xl md:text-3xl font-semibold flex flex-col md:flex-row justify-start md:justify-center items-center md:gap-3 text-gray-600 m-5">We have multidisciplinary teams to meet any
                            <p className="text-md w-full md:w-auto grad-text">challenge .</p>
                    </div>
                    <div className="flex md:flex-row flex-col justify-start md:justify-center items-start md:items-center gap-10 m-10 shadow-xl p-10 rounded-3xl">
                        <div className="">
                            <img src="/monitor.png" alt="Monitor" className="w-16" />
                            <p className="text-2xl font-bold text-gray-600">Front-end</p>
                            <p className="text-md text-gray-500">Our frontend developers understand the delicate balance between aesthetics and functionality.</p>
                        </div>
                        <div className="">
                            <img src="/simcard.png" alt="Monitor" className="w-16" />
                            <p className="text-2xl font-bold text-gray-600">Back-end</p>
                            <p className="text-md text-gray-500">Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs.</p>
                        </div>
                        <div className="">
                            <img src="/driver.png" alt="Monitor" className="w-16" />
                            <p className="text-2xl font-bold text-gray-600">Data Analysts</p>
                            <p className="text-md text-gray-500">Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-24 mb-20 md:mt-40">
                    <div className="relative">
                        <Bg />
                        <div className="flex justify-center items-center px-7 sm:px-28 md:px-52 ">
                            <img src="/Vector 6.png" alt="service" className="w-16" />
                            <p className="text-2xl md:text-4xl font-semibold">Empowering Your Digital Vision: Our Comprehensive Tech Services.</p>
                        </div>
                        <div className="flex overflow-x-auto h-96 md:h-auto m-10 md:grid grid-cols-3">
                            {services.map((service, index) => (
                                <ServiceCard key={index} title={service.title} description={service.description} img={service.img} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}