export default function Organisations() {
    return (
        <>
            <div className="flex flex-col items-center justify-around bg-gray-100">
                <div className="flex flex-col justify-center items-center gap-4 mt-20">
                    <p className="text-3xl text-center font-semibold text-gray-800">Trusted by Leading Organisations</p>
                    <p className="text-md md:text-lg text-gray-600 font-semibold w-full md:w-3/4 text-center">Our 4,000+ team has expertise in almost everyprogramming language.</p>
                </div>
                <div className="hidden md:flex justify-between items-center overflow-hidden w-full">
                    <img src="/simple-icons_samsung.png" alt="Samsung" className="h-44" />
                    <img src="/logos_microsoft.png" alt="Samsung" className="h-14" />
                    <img src="/logos_google.png" alt="Samsung" className=" h-14" />
                    <img src="/slack.png" alt="Samsung" className=" h-10" />
                    <img src="/simple-icons_lg.png" alt="Samsung" className=" h-24" />
                    <img src="/simple-icons_sony.png" alt="Samsung" className=" h-40" />
                </div>


                <div className="md:hidden flex flex-col justify-center items-center w-full">
                    <div className="flex justify-center items-center gap-10">
                        <img src="/samsung.png" alt="Samsung" className=" h-16" />
                        <img src="/logos_microsoft.png" alt="Samsung" className=" h-5" />
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <img src="/logos_google.png" alt="Samsung" className=" h-5" />
                        <img src="/slack.png" alt="Samsung" className=" h-5" />
                        <img src="/simple-icons_lg.png" alt="Samsung" className=" h-10" />
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <img src="/sony.png" alt="Samsung" className=" h-14" />
                    </div>
                </div>


                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full m-10">Out Full Repertorie</button>
            </div>
        </>

        /* 21 22 18 40 60 */
    )
}