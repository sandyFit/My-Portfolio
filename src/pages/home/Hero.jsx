import React, { useState } from 'react';
import MotionText from '../../components/ui/MotionText';
import { FaAsterisk } from "react-icons/fa";


const Hero = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className='relative w-full min-h-full flex flex-col pt-60 pb-20'>
            <div className="absolute inset-0">
                <div className="container mx-auto px-4 h-full">
                    {/* Grid */}
                    <div className="grid grid-cols-12 h-full">
                        {Array.from({ length: 12 }).map((_, idx) => (
                            <div key={idx} className="col-span-1 border-2 border-neutral-400 border-opacity-15 z-1 h-full">                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="container mx-auto px-4 z-10 text-left">
                {/* <div className="absolute top-20 right-[36rem] w-[45rem] h-[45rem] rounded-full filter blur-xl 
                    opacity-75 bg-gradient-to-r from-lime-200 to-purple-400 -z-20">
                </div> */}

                <p className='absolute font-semibold text-[52rem] -bottom-16 right-[42rem] -z-20
                    text-neutral-400 opacity-30'
                >
                    &
                </p>

                <div className="flex flex-col items-center mt-12">

                    <div className="flex flex-col items-start mb-[-4rem] w-full">
                        <p className='text-[3.2rem] tracking-[.6rem] leading-tighter font-medium font-syne 
                            text-neutral-600 ml-28'>
                            Web Developer
                        </p>                                      
                    </div>
                        <h1 className='font-syne  text-neutral-700 uppercase z-10 text-[12rem]
                            tracking-[-.8rem]'
                            data-aos='zoom-right'
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            trish ramos
                        </h1>
                    

                    
                    <div className="flex flex-col items-end mt-[-4rem] w-full">
                        <p className='text-[3.2rem] tracking-[.6rem] leading-tight font-medium font-syne mr-24
                            text-neutral-600'>
                            Digital Designer
                        </p>                                      
                    </div>              
                </div>
                

                <div className="mt-56">
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
