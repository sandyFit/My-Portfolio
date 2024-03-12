import React from 'react';
import MotionText from '../../components/ui/MotionText';
import { FaAsterisk } from "react-icons/fa";
import SplitType from 'split-type';


const Hero = () => {


    return (
        <section className='relative w-[calc(100vw - 140px)] min-h-full flex flex-col pt-60 pb-20 rounded-xl'>
            <div className="absolute top-0 left-[50rem]">
                <div className="w-[72rem] h-[72rem] bg-transparent rounded-full border-[1px] border-skyIce-700
                    border-opacity-85 -z-10">                   
                </div>

                
            </div>

            <div className="absolute top-0 left-[140px] w-[47.5%] h-[58rem] bg-transparent border-r-[1px] border-b-[1px] 
            border-skyIce-700 border-opacity-85">                   
            </div>
            {/* Content */}
            <div className="w-full h-full ml-[125px] px-4 z-10 text-left">
                
                <div className="flex flex-col justify-center items-start mt-12 ml-32">
                    <h1 className='font-syne text-skyIce-400 uppercase z-10 text-[7rem] font-[750] tracking-[-.6rem]'
                    >
                        hi there, i'm<br />
                        
                        <span className='ml-24 mt-[-3rem] text-salmon'>trish ramos</span>
                        
                        
                    </h1>                  
                                
                </div>
                

                <div className="mt-24 mb-12 bg-slate-300 h-20 flex items-center shadow-lg shadow-skyIce-700">
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
