export default function Lower() {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-gray-100 m-10 rounded-xl p-5">
                <p className="text-2xl md:text-4xl font-semibold text-center m-10">
                Choose Us: Your Path to Innovation and <span className="grad-text">Success</span>
                </p>
                <div className="flex items-center justify-between overflow-scroll gap-5 h-66 w-full">
                    <div className="flex flex-col items-center m-5 bg-white shadow-lg rounded-xl p-5 z-50 w-80 h-52">
                        <p className="text-xl md:text-2xl font-semibold w-full mx-24">Expertise Across the Tech Spectrum</p>
                        <p className="text-md md:text-lg mt-5 w-full">Our team consists of developers, designers, and experts who excel in various areas of technology.</p>
                    </div>
                    <div className="flex flex-col items-center text-white m-5 bg-gradient-to-tr from-[#EDE14F] to-[#62AE6E] shadow-lg rounded-xl p-5 z-50 w-80 h-52">
                        <p className="text-xl md:text-2xl font-semibold w-full mx-24">Proven Track Record of Success:</p>
                        <p className="text-md md:text-lg mt-5">Our portfolio is a testament to our ability to deliver impactful results.</p>
                    </div>
                    <div className="flex flex-col items-center m-5 bg-white shadow-lg rounded-xl p-5 z-50 w-80 h-52">
                        <p className="text-xl md:text-2xl font-semibold w-full mx-24">Collaborative Approach, Transparent Communication:</p>
                        <p className="text-md md:text-lg mt-5">We believe in working hand-in-hand with our clients.</p>
                    </div>
                    <div className="flex flex-col items-center text-white m-5 bg-gradient-to-tr from-[#3171DE] to-[#4AC0F2] shadow-lg rounded-xl p-5 z-50 w-80 h-52">
                        <p className="text-xl md:text-2xl font-semibold w-full mx-24">Tailored Solutions for Your Unique Needs:</p>
                        <p className="text-md md:text-lg mt-5">We understand that no two projects are alike.</p>
                    </div>
                </div>
            </div>
        </>
    )
}