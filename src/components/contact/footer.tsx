import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row w-full mb-5">
                <div className="flex justify-around items-center w-full">
                    <img src="/logo.png" alt="logo" className="w-14 h-14" />
                    <div className="flex gap-10">
                        <p className=" text-sm font-normal">Terms</p>
                        <p className=" text-sm font-normal">Privacy</p>
                        <p className=" text-sm font-normal">Cookies</p>
                    </div>
                </div>
                <div className="flex justify-end gap-5 items-center w-full pe-20">
                    <FontAwesomeIcon icon={faFacebookF} size="1x" className="text-black border-[1px] border-black rounded-full p-5" />
                    <FontAwesomeIcon icon={faTwitter} size="1x" className="text-black border-[1px] border-black rounded-full p-5" />
                    <FontAwesomeIcon icon={faLinkedinIn} size="1x" className="text-black border-[1px] border-black rounded-full p-5" />
                </div>
            </div>
        </>
    )
}