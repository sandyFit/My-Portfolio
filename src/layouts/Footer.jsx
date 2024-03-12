import { CopyrightRounded, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Logo from '../components/ui/Logo';
import TextInMotion from '../components/ui/TextInMotion';


const Footer = () => {

    const date = new Date()
    

    return (
        <section className='w-full min-h-full flex flex-col pb-4 relative'>
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

            <div className="flex">
                <TextInMotion
                    icon={'|'}
                    text={'AVAILABLE FOR WORK'}
                />
            </div>
            
                
            <div className="container mx-auto px-4 z-10 text-center justify-center relative pt-20">

                <div className="flex justify-center mt-12">
                    <p className='font-syne text-neutral-500 text-[2.3rem] tracking-[.8rem]'>
                        Great things happen when you say hello!
                    </p>
                </div>

                <h1 className='text-[14rem] font-syne font-bold text-neutral-700 uppercase z-10 leading-[15rem] 
                    tracking-[-1rem] cursor-pointer hover:text-neutral-600'>
                    <a href="mailto:sandy07r@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Let's talk
                    </a>
                </h1>

                

                <p className='font-syne text-neutral-500 text-[2.3rem] tracking-[.2rem] mt-1 mb-[8rem]'>
                    hello@trishramos.com
                </p>

                <div className="flex-flex-start relative">
                    <hr className='w-[83.5%] border-2 border-skyIce border-opacity-60 absolute top-16 opacity-60'/>
                </div>

                

                <div className="flex justify-between items-center">     
                    <div className="flex justify-betwwen items-center gap-[23.5rem] w-full ">
                        <div className='flex justify-end text-neutral-600 mr-16 mt-20 gap-16'>
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


                        <div className="flex text-2xl text-neutral-600 mt-20">
                            <CopyrightRounded style={{marginTop: '.1rem', fontSize: '1.8rem'}}/>
                            {`${date.getFullYear()}  Trish Ramos   |   Crafted with`}
                            <FaHeart style={{color: 'red', margin: '8px', opacity: '.7'}}/>
                            {'by yours truly'}
                        </div>
                    </div>    

                    <div className="flex flex-col pb-6">
                        <Logo text='*TRISH RAMOS*DEVELOPER & DESIGNER'>
                            <div className="flex justify-center items-center bg-lime-300 w-32 h-32 rounded-full -z-10">
                                
                                <p className="text-skyIce text-[7.5rem] font-syne font-bold">T</p>
                            </div>
                        </Logo>
                    </div> 
                    

                </div>           
            </div>
             
        </section>
    )
}

export default Footer;




