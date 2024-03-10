import React from 'react';

const About = () => {
    

    return ( 
        
        <section className='w-full px-48 py-24 rounded-[30em 0 0 30em] bg-neutral-900 min-h-full z-10 relative'
            style={{borderRadius: '120px 120px 0 0'}}
        >
            <div className="grid grid-cols-2 gap-20">

                <div className="absolute top-20 right-[36rem] w-[45rem] h-[45rem] rounded-full filter blur-2xl 
                    opacity-75 bg-gradient-to-r from-purple-500 to-lime-300 z-20">
                </div>
                {/* Who I Am */}
                <article className='z-30'>
                    <h1 className="text-lime-300 text-[6rem] leading-none">Who I Am</h1>
                    <p className="text-3xl text-neutral-200 mt-8">
                        I'm a aesthetics focused motion designer and web developer based in Colombia, dedicated to crafting
                        digital experiences that are not only purposeful but also unforgettable. With a keen eye for design
                        and a commitment to innovative solutions, I aim to elevate brands and bring visions to life.
                    </p>
                </article>

                {/* Placeholder for an image or another visual representation */}
                <article className="flex justify-center items-center z-30">
                    <div className="bg-white w-full h-[60%] flex justify-center items-center">
                        <p className="text-black">Your Image Here</p>
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
