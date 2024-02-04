import Footer from "./footer";
import Subscribe from "./subscribe";

export default function Contacts() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-around px-10 mt-56 gap-20 md:mt-56">
                <div className="flex flex-col-reverse items-start md:justify-between gap-10 md:gap-36 md:flex-row">
                    <div className="flex justify-center gap-10 md:gap-36">
                        <div className="">
                            <p className=" text-lg font-normal">Product</p>
                            <p className=" text-lg font-normal text-gray-400">Employee database</p>
                            <p className=" text-lg font-normal text-gray-400">Payroll</p>
                            <p className=" text-lg font-normal text-gray-400">Absences</p>
                            <p className=" text-lg font-normal text-gray-400">Time Tracking</p>
                            <p className=" text-lg font-normal text-gray-400">Shift Planner</p>
                            <p className=" text-lg font-normal text-gray-400">Recruiting</p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-10 md:gap-36">
                        <div className="">
                            <p className=" text-lg font-normal">Information</p>
                            <p className=" text-lg font-normal text-gray-400">FAQ</p>
                            <p className=" text-lg font-normal text-gray-400">Blog</p>
                            <p className=" text-lg font-normal text-gray-400">Support</p>
                        </div>
                        <div className="">
                            <p className=" text-lg font-normal">Company</p>
                            <p className=" text-lg font-normal text-gray-400">About Us</p>
                            <p className=" text-lg font-normal text-gray-400">Career</p>
                            <p className=" text-lg font-normal text-gray-400">Contact us</p>
                            <p className=" text-lg font-normal text-gray-400">Lift Media</p>
                        </div>
                    </div>
                </div>
                <Subscribe />
            </div>
            <hr className="w-11/12 mx-auto border-[1px] border-gray-300 my-10" />
            <Footer />
        </>
    )
}