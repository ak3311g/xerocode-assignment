import Image from "./image";
import RatingCard from "./ratingcard";

export default function Ratings() {
    return (
        <>
            <Image />
            <div className="flex flex-col items-center justify-center gap-20">
                <div className="w-full flex flex-col justify-center items-center text-center md:text-left md:items-end mt-10 gap-10">
                    <p className=" text-3xl md:text-5xl md:w-[550px] md:me-20 font-medium mx-10 md:mx-0">We've stopped counting. Over 500 brands count on us.</p>
                    <p className=" text-lg md:text-xl md:w-[550px] md:me-20 font-medium mx-10 md:mx-0">Our 4,000+ team has expertise in almost everyprogramming language.</p>
                </div>

                <div className="flex w-[calc(100%-100px)] overflow-scroll gap-5">
                    <RatingCard />
                    <RatingCard />
                    <RatingCard />
                    <RatingCard />
                </div>
            </div>
        </>
    )
}