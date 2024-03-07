import React from 'react';
import Hero from './Hero';
import About from './About';

const Home = () => {
    return (
        <div className='relative'>           
            <section id='hero'>
                <Hero/>
            </section>

            <section id='about'>
                <About/>
            </section>
        </div>
    )
}

export default Home;
