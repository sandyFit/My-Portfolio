import React from 'react';
import AboutMotion from '../../components/ui/AboutMotion';

const About = () => {
    

    return ( 
        
        <section className='w-full px-48 py-24 bg-skyIce min-h-full z-10'>
            <div className="grid grid-cols-2 gap-20">

                {/* Who I Am */}
                <article
                    className='z-30'>
                    <h1 className="text-lime-300 text-[6rem] leading-none">Who I Am</h1>
                    <p className="text-4xl text-neutral-200 mt-8">
                        I'm a aesthetics focused graphic designer based in Colombia. Driven by my passion for everything digital,
                        I embarked on a self-taught journey to expand my expertise into web development. <br /><br />
                        I love crafting digital experiences that are accessible, meaningful and unforgettable. <br /><br />
                        With a keen eye for design and a commitment to innovative solutions, my goal is to make websites that
                        transform the way people connect and interact with brands.
                    </p>
                </article>

                {/* Placeholder for an image or another visual representation */}
                <article className="flex justify-center items-center z-30">
                    <div className="flex justify-center items-center">
                        <AboutMotion
                            text={'TELLING STORIES WITH DESIGN & MAKING COOL THINGS WITH CODE*'}
                        />
                    </div>
                </article>

                {/* What I Do */}
                <article className="col-span-2 mt-20 z-30">
                    <h1 className="text-purple-300 text-[6rem] leading-none">What I Do</h1>
                    <p className="text-3xl text-neutral-200 mt-8">
                        Leveraging a unique blend of technical proficiency and creative flair, I specialize in developing
                        and designing interactive websites, engaging motion graphics, and dynamic user interfaces. Whether
                        it's building responsive and accessible web applications or creating compelling visual narratives, 
                        my goal is to deliver an impactful digital presence that drives success and tells a story.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default About;
