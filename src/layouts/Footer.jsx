import { CopyrightRounded, GitHub, Instagram, LinkedIn, SouthEast } from '@mui/icons-material';
import React from 'react'
import { FaArrowAltCircleRight, FaHeart } from 'react-icons/fa';



const Footer = () => {

    const date = new Date()
    

    return (
        <section name='contact' className='w-full min-h-full flex flex-col relative overflow-hidden'>
            {/* Content */}

            <div id='contact' className="flex flex-col justify-start relative ml-56 ">              
                <h1 className='font-syne text-skyIce-600 uppercase z-10 text-[7.5rem] font-[750] tracking-[-.6rem] mt-20'>
                    drop me a line
                </h1>


                <SouthEast style={{color:'#ff637f', fontSize: '4rem'}}/>

                <p className='font-syne text-skyIce-600 text-[2rem] w-10/12 font-[600] tracking-[.1rem] mt-12'>
                    If you'd like to work with me or just say hello, please get in touch.
                </p>
            
                <a href="mailto:sandy07r@gmail.com" className='flex justify-start'>
                    <FaArrowAltCircleRight style={{color: '#ff637f', fontSize: '2.5rem'}}/> 
                    <p className='font-syne text-salmon-400 hover:text-skyIce-300 text-[2.5rem] font-[400] tracking-[.1rem] 
                        underline'>
                        hello@trishramos.com
                    </p>
                </a>

                <div className="w-full h-full grid grid-cols-2 place-items-between mt-[15.2rem] mb-12">     
                    <div className='flex justify-self-start gap-56'>
                        <div className='flex justify-start text-skyIce-700 mt-20 gap-12'>
                            <Instagram 
                                style={{ fontSize: '2rem',  cursor: 'pointer', transition: 'opacity 0.2s' }}
                                onMouseOver={(e) => e.target.style.opacity = 0.65}
                                onMouseOut={(e) => e.target.style.opacity = 2} 
                            />
                            <LinkedIn 
                                style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                                onMouseOver={(e) => e.target.style.opacity = 0.65}
                                onMouseOut={(e) => e.target.style.opacity = 1}
                            />
                            <GitHub 
                                style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                                onMouseOver={(e) => e.target.style.opacity = 0.65}
                                onMouseOut={(e) => e.target.style.opacity = 1}
                            /> 
                        </div>


                        <div className="w-full flex text-xl font-medium uppercase text-skyIce-700 mt-20">
                            <CopyrightRounded style={{marginTop: '.1rem', fontSize: '1.8rem'}}/>
                            {`${date.getFullYear()}  |   Crafted with`}
                            <FaHeart style={{color: 'red', margin: '3px 4px 0 4px', opacity: '.7'}}/>
                            {'by yours truly'}
                        </div>
                    </div>  
                    

                    <div className="before::content[''] absolute top-[20rem] left-[64%] w-[65rem] h-[65rem] bg-transparent 
                        rounded-full border-[160px] border-salmon-300 z-0">
                    </div>

                </div>           
            </div>
             
            
        </section>
    )
}

export default Footer;




