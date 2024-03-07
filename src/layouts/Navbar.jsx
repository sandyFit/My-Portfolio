import { FaAsterisk } from "react-icons/fa";
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='absolute top-0 left-0 flex justify-between items-center w-full py-16 px-[4%] z-10'>
            <div className="flex relative">
                <div className="big-circle-gradient w-32 h-32 rounded-full filter blur-[1px]"></div>
                <div className="circle-gradient w-[6rem] h-[6rem] rounded-full absolute top-12 circle-shadow filter 
                    blur-[1px]"></div>
            </div>

            <div className="flex justify-evenly gap-[6.5rem]">
                <div className="flex justify-around gap-2">
                    <p className='text-2xl font-semibold text-zinc-500 text-opacity-85 uppercase'>
                        Available for work
                    </p>

                    <FaAsterisk
                        className='rotating-icon'
                        style={{color: '#9935d8'}}
                    />
                </div>

                <ul className='flex flex-col items-start'>
                    {['about', 'projects', 'contact', 'curriculum'].map((item, index) => (
                        <li className='text-zinc-600 text-2xl font-semibold hover:text-zinc-500'
                            key={index}
                        >
                            <Link to={item} smooth='true' duration={500}>
                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                            </Link>
                        </li>
                    ))}
                    
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar;
