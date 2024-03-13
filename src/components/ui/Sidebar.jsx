import React from 'react';
import Logo from './Logo';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <section className='w-[146px] min-h-full flex flex-col justify-between items-center border-r-[2px]
            border-zinc-100 gap-60 pb-16 fixed inset-0 z-30 bg-zinc-300 bg-opacity-85
        '>
            <div className="w-full h-[146px] relative bg-skyIce-600 ">
                <Logo text='*TRISH RAMOS*CREATIVE DEVELOPER'>
                    <div className="flex justify-center items-center bg-lime-300 w-24 h-24 rounded-full -z-10">                
                        <p className="text-skyIce-600 text-[5rem] font-syne font-bold">T</p>
                    </div>
                </Logo>
            </div>

            <div className="flex">
                <p className='text-syne text-2xl text-skyIce-600 -rotate-90'>Welcome</p>
            </div>

            <div className='flex flex-col justify-evenly text-skyIce-700 mt-12 gap-10'>
                <FaInstagram 
                    style={{ fontSize: '2rem',  cursor: 'pointer', transition: 'opacity 0.2s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 2} 
                />
                <FaLinkedin 
                    style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                />
                <FaGithub
                    style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                /> 
                
            </div>
            
        </section>
    )
}

export default Sidebar;
