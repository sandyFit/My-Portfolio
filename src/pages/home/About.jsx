import React from 'react';
import AboutMotion from '../../components/ui/AboutMotion';
import MotionText from '../../components/ui/MotionText';

const About = () => {
    

    return ( 
        
        <section className='w-full pl-16 pt-72 bg-zinc-300 min-h-full z-10'>
            <div className="grid grid-cols-1 gap-20 ml-56">

                {/* Who I Am */}
                <article className='z-30'>
                    <h2 className='font-syne text-skyIce-600 uppercase z-10 text-[7.5rem] font-[750] tracking-[-.2rem]'>
                        Who I am
                    </h2>
                    <p className="font-syne text-4xl text-skyIce-900 mt-8 z-20">
                        I'm a aesthetics focused graphic designer based in Colombia. Driven by my passion for everything digital,
                        I embarked on a self-taught journey to expand my expertise into web development. <br /><br />
                        I love crafting digital experiences that are accessible, meaningful and unforgettable. <br /><br />
                        With a keen eye for design and a commitment to innovative solutions, my goal is to make apps & websites that
                        transform the way people connect and interact with brands.
                    </p>
                </article>

                <div className="absolute top-[60rem] right-[70rem] ">
                    <div className="w-[68rem] h-[68rem] bg-transparent rounded-full border-[160px] border-salmon
                        border-opacity-85 z-0">                   
                    </div>                
                </div>  

                

                {/* What I Do */}
                <article className="W-full grid grid-cols-1 mt-[10rem] mb-24 z-30">
                    <h2 className='font-syne text-skyIce-600 uppercase z-10 text-[7.5rem] font-[750] flex justify-self-end
                        tracking-[-.2rem] mb-12 mr-36'>
                            What I do
                        </h2>
                    <div className="grid  grid-cols-2 gap-8">
                        
                       <p className="font-syne text-4xl text-skyIce-900 mt-8">
                            I transform ideas into digital experiences. <br/><br/>Whether
                            it's building responsive and accessible web applications or creating compelling visual narratives, 
                            my goal is to deliver an impactful digital presence that drives success and tells a story.
                            <br /><br />
                            Let's work together!<br /><br />
                            I'm looking for new opportunities to challenge myself within a creative agency or through freelance projects,
                            aiming to both apply and enhance my programming and design abilities.
                        </p>
                        <div className="z-10">
                            <AboutMotion text={' ~ I BUILD COOL THINGS THROUGH DESIGN & CODE'}/>
                        </div>
                    </div>

                </article>
            </div>
        </section>
    );
};

export default About;
