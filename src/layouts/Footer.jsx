import { CopyrightRounded, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react'
import { FaAsterisk } from 'react-icons/fa';

const Footer = () => {

    const date = new Date()
    

    return (
        <section className='bg-custom-combined-gradient w-full h-full flex flex-col  pt-48 pb-20 relative'>
            <div className="absolute inset-0">
                <div className="container mx-auto px-4 h-full">
                    {/* Grid */}
                    <div className="grid grid-cols-12 h-full">
                        {Array.from({ length: 12 }).map((_, idx) => (
                            <div key={idx} className="col-span-1 border-2 border-zinc-400 border-opacity-15 z-1 h-full">                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}

            <div className="container mx-auto px-4 z-10 text-center justify-center relative">
                <div className="absolute bottom-16 right-[26rem]  w-[45rem] h-[45rem] rounded-full filter blur-xl 
                    opacity-75 bg-gradient-to-r from-purple-300 to-pink-300 -z-20">
                </div>

                <div className="flex justify-center mt-6">
                    <p className='text-zinc-500 text-[2.5rem] tracking-[.52rem]'>
                        Great things happen when you say hello!
                    </p>
                </div>

                <h1 className='text-[15rem] text-zinc-700 uppercase z-10 leading-[10.5rem] tracking-[.2rem] 
                    nav-link-footer cursor-pointer'>
                    <a href="mailto:sandy07r@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Let's talk
                    </a>
                </h1>

                <p className='text-zinc-500 text-[2.5rem] tracking-[.52rem] mt-12'>
                    hello@trishramos.com
                </p>

                <hr className='w-full border-2 border-zinc-400 border-opacity-60 mt-[12rem]'/>

                <div className="flex justify-between items-center mt-6" >
                    <div className='flex justify-end text-zinc-700 my-6 mr-16 gap-12'>
                        <Instagram 
                            style={{ fontSize: '3rem',  cursor: 'pointer', transition: 'opacity 0.3s' }}
                            onMouseOver={(e) => e.target.style.opacity = 0.75}
                            onMouseOut={(e) => e.target.style.opacity = 2} 
                        />
                        <LinkedIn 
                            style={{ fontSize: '3rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                            onMouseOver={(e) => e.target.style.opacity = 0.75}
                            onMouseOut={(e) => e.target.style.opacity = 1}
                        />
                        <GitHub 
                            style={{ fontSize: '3rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                            onMouseOver={(e) => e.target.style.opacity = 0.75}
                            onMouseOut={(e) => e.target.style.opacity = 1}
                        /> 
                    </div>

                    <div className="flex text-3xl text-zinc-600 font-semibold">
                        <CopyrightRounded style={{marginTop: '.3rem', fontSize: '2rem'}}/>
                        {date.getFullYear()}
                    </div>

                    <div className="flex flex-col">
                        <div className="flex">
                            <FaAsterisk style={{ fontSize: '3rem', color: '#9935d8' }} className='rotating-icon'/>
                            <h4 className='text-zinc-700 text-5xl uppercase font-bold ml-3'>
                                Trish Ramos
                            </h4>
                        </div>
                        <p className='text-xl text-zinc-500 ml-16'>Web Developer & Motion Designer</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Footer;

