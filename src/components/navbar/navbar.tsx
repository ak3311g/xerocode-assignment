import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

export default function Navbar() {

    const [active , setActive] = useState('home');
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelectorAll('section');
            let current = '';

            section.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if(window.scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.id;
                }
        });
        setActive(current);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
    }, [])

    let url = useLocation().pathname;
    console.log(url);

    return (
        <>
            <div className="flex justify-between items-center m-3 font-Epilogue text-md sticky top-0 z-[70] bg-white p-5">

                <img src="/logo.png" alt="logo" className="w-10 h-10" />

                <div className="hidden md:flex justify-around items-center text-base font-semibold bg-gray-50 rounded-full px-20 py-2 gap-10">
                    <a href="#" className={active === '' ? 'text-blue-500' : ''}>Home</a>
                    <a href="#about" className={active === 'about' ? 'text-blue-500' : ''}>About us</a>
                    <a href="#service" className={active === 'services' ? 'text-blue-500' : ''}>Services</a>
                    <a href="#contact" className={active === 'contact' ? 'text-blue-500' : ''}>Contact us</a>
                </div>

                <div className="hidden md:flex justify-center items-center gap-3">
                    <select className="bg-transparent rounded-md p-1">
                        <option>US</option>
                        <option>EU</option>
                        <option>GB</option>
                    </select>
                    <button className="bg-blue-500 text-white rounded-full px-3 py-2">Schedule a Call</button>
                </div>

                <div className="md:hidden z-20">
                    <button className="text-black rounded-full px-3 py-2" onClick={()=>setShow(!show)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>

                {
                    show && (
                        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-50 bg-opacity-90 flex justify-center items-center z-10">
                            <div className="flex flex-col gap-5">
                                <a href="#" className="text-2xl font-semibold">Home</a>
                                <a href="#about" className="text-2xl font-semibold">About us</a>
                                <a href="#service" className="text-2xl font-semibold">Services</a>
                                <a href="#contact" className="text-2xl font-semibold">Contact us</a>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}