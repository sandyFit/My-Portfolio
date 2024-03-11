import { FaAsterisk, FaMoon, FaSun } from "react-icons/fa";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <nav className='absolute top-0 left-0 flex justify-between items-center w-full py-16 px-[4%] z-10'>
            {/* <div className="flex relative">
                <div className="big-circle-gradient w-32 h-32 rounded-full filter blur-[1px]"></div>
                <div className="circle-gradient w-[6rem] h-[6rem] rounded-full absolute top-12 circle-shadow filter 
                    blur-[1px]">
                </div>

            </div> */}
            <div className=" relative">
                
                <FaAsterisk style={{
                    fontSize: '8rem'
                }} className="rotating-icon  absolute -top-12 left-6 text-purple-600" />
                
                <FaAsterisk style={{
                    fontSize: '5rem'}} className="rotating-icon text-lime-300" />
            </div>

            <div className="flex justify-evenly gap-20">
                {/*
                    <p className='text-2xl font-semibold text-neutral-500 text-opacity-85 uppercase'>
                        Available for work
                    </p>

                    <FaAsterisk
                        className='rotating-icon'
                        style={{color: '#9935d8'}}
                    /> 
                </div>  */}
 
                <div className="flex justify-evenly gap-20">
                    <button class="relative h-14 overflow-hidden rounded bg-transparent px-12 py-6 text-neutral-600 
                        text-2xl font-semibold text-opacity-85 uppercase transition-all duration-300 border-2 border-neutral-500  
                        flex justify-center items-center hover:ring-2 hover:ring-neutral-500 hover:ring-offset-2
                        hover:text-neutral-500"
                    >
                        <span class="relative tracking-wider">get in touch</span>
                    </button>

                    <button class="relative w-14 h-14 overflow-hidden bg-transparent p-2 text-neutral-600 
                        text-2xl font-semibold text-opacity-85 uppercase transition-all duration-300 border-2 border-neutral-500  
                        flex justify-center items-center hover:ring-2 hover:ring-neutral-500 hover:ring-offset-2
                        hover:text-neutral-500"
                        onClick={handleClick}
                    >
                        <span class="relative tracking-wider">
                            {isClicked ? <FaMoon style={{ fontSize: '2rem' }} /> : <FaSun style={{ fontSize: '2rem' }} />}
                            
                            
                        </span>
                    </button>

                </div>

                <ul className='flex flex-col items-start'>
                    {['about', 'projects', 'contact', 'resume'].map((item, index) => (
                        <li className='text-neutral-600 text-2xl font-semibold hover:text-neutral-500 mb-2 nav-link'
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
