import React from 'react';
import Hero from './Hero';
import About from './About';
import Quotes from './Quotes';

const Home = () => {
    return (
        <div className='relative'>           
            <section id='hero' className=''>
                <Hero/>
            </section>

            <section id='quotes' className=''>
                <Quotes/>
            </section>

            <section id='about' className=''>
                <About/>
            </section>
        </div>
    )
}

export default Home;
