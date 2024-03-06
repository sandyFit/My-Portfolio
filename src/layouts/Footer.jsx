import React from 'react'

const Footer = () => {
    return (
        <section className='bg-custom-combined-gradient w-full h-full flex flex-col justify-center pt-48 pb-20 relative'>
            <div className="absolute inset-0">
                <div className="container mx-auto px-4 h-full">
                    {/* Grid */}
                    <div className="grid grid-cols-12 h-full">
                        {Array.from({ length: 12 }).map((_, idx) => (
                            <div key={idx} className="col-span-1 border-2 border-zinc-400 border-opacity-15 z-1 h-full">                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}

            <div className="container mx-auto px-4 z-10 text-center relative">
                <div className="absolute top-20 right-[36rem] w-[45rem] h-[45rem] rounded-full filter blur-xl 
                    opacity-75 bg-gradient-to-r from-purple-300 to-pink-300 -z-20">
                </div>

                <h1 className='text-[15rem] text-zinc-700 uppercase z-10 leading-[10.5rem] tracking-[.2rem]
                    nav-link-footer'>
                    Let's talk
                </h1>

                <div className="flex justify-center mt-6">
                    <p className='text-zinc-500 text-[3.1rem] tracking-[.52rem]'>
                        Great things happen when you say hello!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer