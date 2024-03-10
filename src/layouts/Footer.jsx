import { CopyrightRounded, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react'
import { FaAsterisk } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Footer = () => {

    const date = new Date()
    

    return (
        <section className='w-full min-h-full flex flex-col pt-36 pb-12 relative'>
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
                {/* <div className="absolute bottom-16 right-[26rem]  w-[45rem] h-[45rem] rounded-full filter blur-xl 
                    opacity-75 bg-gradient-to-r from-orange-100 to-purple-300 -z-20">
                </div> */}

                <div className="flex justify-center mt-6">
                    <p className='font-syne text-neutral-500 text-[2.5rem] tracking-[.52rem]'>
                        Great things happen when you say hello!
                    </p>
                </div>

                <h1 className='text-[14rem] font-syne font-bold text-neutral-700 uppercase z-10 leading-[15rem] 
                    tracking-tigher nav-link-footer cursor-pointer'>
                    <a href="mailto:sandy07r@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Let's talk
                    </a>
                </h1>

                <p className='font-syne text-neutral-500 text-[2.5rem] tracking-[.52rem] mt-4'>
                    hello@trishramos.com
                </p>

                <hr className='w-full border-2 border-neutral-400 border-opacity-60 mt-[12rem]'/>

                <motion.div className="flex justify-between items-center mt-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >

                    <div className='flex justify-end text-neutral-600 my-6 mr-16 gap-12'>
                        <Instagram 
                            style={{ fontSize: '3rem',  cursor: 'pointer', transition: 'opacity 0.3s' }}
                            onMouseOver={(e) => e.target.style.opacity = 0.65}
                            onMouseOut={(e) => e.target.style.opacity = 2} 
                        />
                        <LinkedIn 
                            style={{ fontSize: '3rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                            onMouseOver={(e) => e.target.style.opacity = 0.65}
                            onMouseOut={(e) => e.target.style.opacity = 1}
                        />
                        <GitHub 
                            style={{ fontSize: '3rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                            onMouseOver={(e) => e.target.style.opacity = 0.65}
                            onMouseOut={(e) => e.target.style.opacity = 1}
                        /> 
                    </div>

                    <div className="flex text-2xl text-neutral-600 font-semibold">
                        <CopyrightRounded style={{marginTop: '.1rem', fontSize: '1.8rem'}}/>
                        {`${date.getFullYear()}. Crafted by yours truly`}
                    </div>

                    <div className="flex flex-col">
                        <div className="flex">
                            <FaAsterisk style={{ fontSize: '2rem', color: '#9935d8' }} className='rotating-icon mt-4'/>
                            <h4 className='text-neutral-600 font-syne text-[2.6rem] tracking-tight uppercase font-semibold ml-1'>
                                Trish Ramos
                            </h4>
                        </div>
                        <p className='text-[1.22rem] font-syne text-neutral-500 ml-10 mt-[-1rem]'>
                            Web Developer & Motion Designer
                        </p>
                    </div> 
                </motion.div>

                
            </div>
        </section>
    )
}

export default Footer;




