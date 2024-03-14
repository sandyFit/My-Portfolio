import React from 'react';
import AboutMotion from '../../components/ui/AboutMotion';
import MotionText from '../../components/ui/MotionText';

const About = () => {
    

    return ( 
        
        <section name='about' className='w-full pl-16 pt-72 bg-zinc-300 min-h-full z-10 overflow-hidden'>
            <div className="before::content[''] absolute top-[1rem] left-[43%] w-[65rem] h-[65rem] bg-transparent 
                rounded-full border-[160px] border-salmon-300 z-0">
            </div>
            
            <div id='about' className="grid grid-cols-1 gap-20 ml-56 ">

                {/* Who I Am */}
                <article className='z-30 w-8/12 ml-96 px-12'>
                    <h2 className='font-syne text-skyIce-600 uppercase z-10 text-[7.5rem] font-[750] tracking-[-.2rem]'>
                        Who I am
                    </h2>
                    <p className="font-syne text-3xl text-skyIce-900 ml-16 mt-8 z-20">
                        
                        Thanks for visisting. 😊 Feel free to call me Trish, just like my friends do.
                        I'm a aesthetics focused graphic designer based in Colombia.<br /><br />
                        Driven by my passion for all things digital, I embarked on a self-taught journey to expand 
                        my expertise into web development, directing my attention primarily towards frontend solutions.
                        <br /><br />
                        This journey has deepened my commitment to build digital products that are the perfect blend of
                        meaningful aesthetics and function.<br /><br />

                        Away from the screen, I'm indulging in life's varied rhythms—be it striking a balance with gym
                        sessions, mastering the craft of baking cookies, or channeling my quirky side through the world
                        of doodles.<br/><br/>

                        I'm currently looking for new opportunities to challenge myself within a creative agency or through
                        freelance projects, aiming to both apply and enhance my programming and design skills.
                        
                    </p>
                </article>

                <div className="before::content[''] absolute top-[71rem] right-[62%] w-[65rem] h-[65rem] bg-transparent 
                    rounded-full border-[160px] border-salmon-300 z-0">
                </div>
                

                {/* What I Do */}
                <article className="W-full grid grid-cols-1 mt-[6rem] mb-24 z-30">
                    <h2 className='font-syne text-skyIce-600 uppercase z-10 text-[7.5rem] font-[750] flex justify-self-end
                        tracking-[-.2rem] mb-12 mr-36'>
                            What I do
                        </h2>
                    <div className="grid  grid-cols-2 gap-8">

                        <div className="grid">

                        <p className="font-syne text-3xl text-skyIce-900 mt-8">
                                I build cool digital things through design & Code. <br /><br />
                                My portfolio showcases a diverse range of projects, including:
                            </p>
                            <ul className="font-syne text-3xl text-skyIce-900 mt-8 decoration-slice pl-6">
                                <li className='list-disc'>UX Design</li>
                                <li className='list-disc'>Web Development</li>
                                <li className='list-disc'>UI Animations</li>
                                <li className='list-disc'>Icon Illustrations</li>
                            </ul>

                            <p className="font-syne text-3xl text-skyIce-900 mt-8">
                                Being confortable with code empowers me to swiftly prototype
                                and validate user experiences, ensuring that each project is not only beautiful
                                but also functional.
                                <br /><br />
                                I can help you with:<br /><br />
                            </p>   
                        </div>
                        <div className="z-10">
                            <AboutMotion text={' ~ I BUILD COOL DIGITAL THINGS THROUGH DESIGN & CODE'}/>
                        </div>
                    </div>

                </article>
            </div>
        </section>
    );
};

export default About;
