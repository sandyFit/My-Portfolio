import { FaMoon, FaSun } from "react-icons/fa";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../components/ui/Logo";
import { DarkMode, LightMode } from "@mui/icons-material";



const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <nav className='absolute top-0 left-[140px] flex items-end w-[calc(100vw - 140px)] h-[142px]
            border-[1px] border-t-skyIce-700 border-b-skyIce-700 z-10 px-10'>
      
            {/* Container for links and button */}
            <div className="ml-[58rem] flex items-center gap-48"> {/* Adjust the gap as needed */}
                {/* Navigation Links */}
                <ul className='flex items-center gap-16'> {/* Adjust the gap as needed */}
                    {['about', 'projects', 'contact', 'resume'].map((item, index) => (
                        <li className='text-skyIce-500 text-xl font-semibold hover:text-skyIce-300 link uppercase'
                            key={index}
                        >
                            <Link to={item} smooth={true} duration={500}>
                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                {/* Theme Toggle Button */}
                <button className="w-14 h-14" onClick={handleClick}>
                    <span className="flex items-center justify-center w-full h-full text-skyIce-500 opacity-85 hover:text-skyIce-300">
                        {isClicked ? <DarkMode style={{ fontSize: '2.7rem' }} /> : <LightMode style={{ fontSize: '2.7rem' }} />}
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;
