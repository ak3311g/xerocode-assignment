import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Subscribe() {
    return (
        <>
            <div className="flex flex-col items-start gap-5 justify-center p-5 rounded-2xl bg-gray-100">
                <p className=" text-lg font-normal w-3/4 text-[#0A142F]">Subscribe</p>
                <div className=" relative flex justify-center items-center w-full">
                    <input type="email" placeholder="Email adress" className="w-full h-12 rounded-full bg-white text-gray-400 pl-4" />
                    <FontAwesomeIcon icon={faCircleArrowRight} className="absolute right-0 text-5xl text-[#3171DE]" />
                </div>
                <p className=" text-xs font-semibold text-gray-400 ">Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
            </div>
        </>
    )
}