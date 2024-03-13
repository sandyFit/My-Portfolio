import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DarkMode, LightMode } from "@mui/icons-material";
import { FaSun } from 'react-icons/fa';


const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <nav className='absolute top-0 left-[146px] flex items-end w-[calc(100vw - 146px)] h-[142px] z-10 px-10'>
            <div className="w-full h-full grid grid-cols-2 place-items-end mb-4">
                {/* Navigation Links */}
            <ul className='flex justify-self-end gap-20 mr-56 ml-12'> 
                    {['about', 'projects', 'contact', 'resume'].map((item, index) => (
                        <li className='text-skyIce-500 text-xl font-semibold hover:text-skyIce-300 link uppercase' key={index}>
                            <Link to={item} smooth={true} duration={500}>
                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                {/* Theme Toggle Button */}
                <button className="justify-self-end border-2 border-skyIce-500 hover:border-skyIce-300 rounded-full p-2"
                    onClick={handleClick}>
                    <span className="flex items-center justify-center w-full h-full text-skyIce-500 opacity-85 hover:text-skyIce-300">
                        {isClicked ? <DarkMode style={{ fontSize: '2.7rem' }} /> : <FaSun style={{ fontSize: '2.7rem' }} />}
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
