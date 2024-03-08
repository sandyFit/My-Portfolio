import React, { useState } from 'react';
import MotionText from '../../components/ui/MotionText';
import { ArrowForward } from '@mui/icons-material';
import { FaAsterisk } from "react-icons/fa";


const Hero = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className='sticky  w-full min-h-full flex flex-col justify-center pt-48 pb-20'>
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
            <div className="container mx-auto px-4 z-10 text-center">
                <div className="absolute top-20 right-[36rem] w-[45rem] h-[45rem] rounded-full filter blur-xl 
                    opacity-75 bg-gradient-to-r from-purple-300 to-pink-300 -z-20">
                </div>

                <h1 className='text-[12rem] text-zinc-700 uppercase z-10 leading-[10.5rem] tracking-[.2rem]'
                    data-aos='zoom-out-down'  
                >
                    hi there, i'm <br/>
                    <span className='mt-[-4rem]'>
                        trish ramos
                    </span>
                </h1>

                {/* Flex container for aligning text and button */}
                <div className="flex justify-center items-center flex-col mt-12">
                    <p className='text-[3rem] tracking-[.93rem] font-medium'>
                        Web Developer & Motion Designer
                    </p>
                    
                    <div className="w-10/12 flex justify-end mt-6">
                        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden 
                            rounded-md bg-transparent border-2 border-zinc-500 px-12 font-medium
                            text-zinc-600 text-xl uppercase duration-500"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{ minWidth: '250px' }}  // Set a fixed minimum width or adjust as needed
                        >

                            <div className="flex justify-between items-center w-full pl-3">
                                <span className="z-10">{isHovered ? "let's talk" : 'contact me'}</span>
                                
                                <div className="flex absolute right-0 transition-all ease-in-out duration-500" 
                                    style={{ width: '50px', transition: 'opacity 0.5s', opacity: isHovered ? 1 : 0 }}>
                                    <ArrowForward style={{color: '#9935d8', fontSize: '2rem'}}/>
                                </div>
                            </div>
                        </button>
                    </div>                
                </div>

                <div className="mt-32">
                    <MotionText
                        icon={<FaAsterisk style={{color: '#9935d8'}}/>}
                        text={'Transforming Ideas into Interactive Experiences'}
                         />
                </div>
            </div>
        </section>
    );
};

export default Hero;
