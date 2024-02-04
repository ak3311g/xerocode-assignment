export default function RatingCard() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5 bg-white p-5 rounded-xl">
                <div className="flex justify-start items-center w-full">
                    <p className="text-2xl mx-5 pe-12">⭐⭐⭐⭐⭐</p>
                </div>
                <div className="flex flex-col justify-start items-center mx-5 w-full">
                    <p className="text-xl font-bold">"Exceptional Solutions, Exceeded Expectations!"</p>
                    <p className="text-lg font-medium">"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations."</p>
                </div>
                <hr className="w-full border-1 border-gray-200" />
                <div className="flex justify-start items-center gap-5 w-full">
                    <img src="/R1.png" alt="R1" className="w-12 rounded-full" />
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-lg font-bold">John Doe</p>
                        <p className="text-lg font-medium">CEO, XYZ Corp</p>
                    </div>
                </div>
            </div>
        </>
    )
}