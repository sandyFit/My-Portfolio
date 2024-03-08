import React from 'react';

const About = () => {
    

    return ( 
        
        <section className='w-full px-48 py-24 rounded-[6rem] bg-[#1f0336] min-h-full z-50'>
            <div className="grid grid-cols-2 gap-20">
                {/* Who I Am */}
                <article>
                    <h1 className="text-zinc-100 text-[6rem] leading-none">Who I Am</h1>
                    <p className="text-3xl text-zinc-300 mt-8">
                        I'm a aesthetics focused motion designer and web developer based in Colombia, dedicated to crafting
                        digital experiences that are not only purposeful but also unforgettable. With a keen eye for design
                        and a commitment to innovative solutions, I aim to elevate brands and bring visions to life.
                    </p>
                </article>

                {/* Placeholder for an image or another visual representation */}
                <article className="flex justify-center items-center">
                    <div className="bg-white w-full h-[60%] flex justify-center items-center">
                        <p className="text-black">Your Image Here</p>
                    </div>
                </article>

                {/* What I Do */}
                <article className="col-span-2 mt-20">
                    <h1 className="text-zinc-100 text-[6rem] leading-none">What I Do</h1>
                    <p className="text-3xl text-zinc-300 mt-8">
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
