import React from 'react';
import MotionText from '../../components/ui/MotionText';
import { FaAsterisk } from "react-icons/fa";
import SplitType from 'split-type';


const Hero = () => {


    return (
        <section className='relative w-[calc(100vw - 140px)] min-h-full flex flex-col pt-60 pb-20 rounded-xl'>
            <div className="absolute top-[1rem] left-[52rem]">
                <div className="w-[65rem] h-[65rem] bg-transparent rounded-full border-[160px] border-salmon
                    border-opacity-85 z-0">                   
                </div>                
            </div>

            
            {/* Content */}
            <div className="w-full h-full z-10 text-left">
                
                <div className="flex flex-col justify-center items-start mt-4 ml-56">
                    <div className='font-syne text-skyIce-600 uppercase z-10 text-[7.5rem] font-[750] tracking-[-.2rem]'>
                        hi there, i'm
                    </div>
                    <div className='ml-36 mt-[-2rem] font-syne text-skyIce-600 uppercase z-10 text-[7.5rem] 
                        font-[750] tracking-[-.2rem]'>
                        trish ramos
                    </div>                  
                </div>

                

                <div className=" w-full mt-32 mb-12 bg-slate-300 h-20 flex items-center shadow-lg shadow-skyIce-700 rotate-3">
                    <MotionText
                        icon={<FaAsterisk style={{color: '#6148bd'}}/>}
                        textBlue={'creative developer especializing in'}
                        textOrange={`[Frontend]`}
                        text3={'solutions'}
                    />
                </div>
            </div>

        </section>
    );
};

export default Hero;
