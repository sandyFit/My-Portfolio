import React from 'react'

const Test = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className='sticky  w-full min-h-full flex flex-col justify-center pt-40 pb-20 overflow-hidden'>
            <div className="absolute inset-0">
                <div className="container mx-auto px-4 h-full">
                    {/* Grid */}
                    <div className="grid grid-cols-12 h-full">
                        {Array.from({ length: 12 }).map((_, idx) => (
                            <div key={idx} className="col-span-1 border-2 border-neutral-400 border-opacity-15 z-1 h-full">                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="container mx-auto px-4 z-10 text-center">
                {/* <div className="absolute top-20 right-[36rem] w-[45rem] h-[45rem] rounded-full filter blur-xl 
                    opacity-75 bg-gradient-to-r from-orange-100 to-purple-400 -z-20">
                </div> */}

                <div className="flex flex-col items-center mt-12">

                    <h1 className='text-left text-[3rem] tracking-[.6rem] font-syne font-medium text-neutral-600  
                        z-10 leading-[8rem]'>
                        Hi there, I'm <br/>
                        <span className='font-arya font-extrabold text-neutral-700 uppercase z-10 text-[15rem]
                            tracking-[-.4rem]'
                            // data-aos='fade-up'
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            trish ramos
                        </span>
                    </h1>

                    {/* Flex container for aligning text and button */}
                    <div className="flex flex-col justify-end mt-[-1.5rem] ">
                        <p className='text-[3rem] tracking-[.6rem] font-medium font-syne text-neutral-600'>
                            Web Developer & Digital Designer
                        </p>
                        
                        <div className="w-full flex justify-center mt-7">
                            {/*<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden 
                                rounded-3xl bg-transparent border-2 border-neutral-500 px-16 py-2 font-medium
                                text-neutral-600 text-xl uppercase duration-500"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{ minWidth: '320px' }}  // Set a fixed minimum width or adjust as needed
                            >

                                <div className="flex justify-between items-center w-full pl-5 tracking-widest">
                                    <span className="z-10">{isHovered ? "let's talk" : 'contact me'}</span>
                                    
                                    <div className="flex absolute right-0 transition-all ease-in-out duration-500" 
                                        style={{ width: '50px', transition: 'opacity 0.5s', opacity: isHovered ? 1 : 0 }}>
                                        <ArrowForward style={{color: '#9935d8', fontSize: '2rem'}}/>
                                    </div>
                                </div>
                            </button> */}

                            <button class="relative h-12 overflow-hidden rounded bg-transparent px-40 py-7 text-neutral-600 
                                text-2xl font-semibold text-opacity-85 uppercase transition-all duration-300 border-2 border-neutral-500  
                                flex justify-center items-center hover:ring-2 hover:ring-neutral-500 hover:ring-offset-2
                                hover:text-neutral-500"
                            >
                                <span class="relative tracking-wider">get in touch</span>
                            </button>
                            
                        </div>                
                    </div>
                </div>

                <div className="mt-32">
                    <MotionText
                        icon={<FaAsterisk style={{color: '#9935d8'}}/>}
                        text={'Transforming Ideas into Interactive Experiences'}
                         />
                </div>
            </div>

        </section>
    );
}

export default Test;


{/* <div className="flex relative">
    <div className="big-circle-gradient w-32 h-32 rounded-full filter blur-[1px]"></div>
    <div className="circle-gradient w-[6rem] h-[6rem] rounded-full absolute top-12 circle-shadow filter 
        blur-[1px]">
    </div>

</div> */}

{/* <div className="absolute top-20 right-[36rem] w-[45rem] h-[45rem] rounded-full filter blur-xl 
    opacity-75 bg-gradient-to-r from-lime-200 to-purple-400 -z-20">
</div> */}

{/* <FaAsterisk style={{
        fontSize: '8rem'
    }} className="rotating-icon  absolute -top-12 left-6 text-[#7c5dec]" />
    
    <FaAsterisk style={{
        fontSize: '5rem'}} className="rotating-icon text-lime-300" /> */}

{/* Grid */}
<div className="grid grid-cols-12 h-full">
    {Array.from({ length: 16 }).map((_, idx) => (
        <div key={idx} className="col-span-1 border-2 border-orangey  border-opacity-15 
            z-1 h-full">                               
        </div>
    ))}
</div> 

{/* Placeholder for an image or another visual representation */}
    <article className="flex justify-center items-center z-30">
        <div className="flex justify-center items-center">
            <AboutMotion
                text={'*CRAFTING NARRATIVES THROUGH DESIGN & BUILDING COOL THINGS WITH CODE'}
            />
        </div>
</article>
    
// Whether it's building responsive and accessible web applications or creating compelling visual narratives, 
// my goal is to deliver an impactful digital presence that drives success and tells a story.