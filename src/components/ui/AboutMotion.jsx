import React from 'react'

const AboutMotion = ({ text, children }) => {
    
    const lenght = text.length;
    const deg = 360 / lenght;

    return (
        <div className='relative w-[700px] h-[700px] rounded-full grid place-items-center text-4xl font-medium 
            z-50'>
            <div className='spinning-text '>
                <p className="text-lime-300 font-bold" style={{ height: '700px', position: 'relative' }}>
                    {text.split("").map((letra, i) => (
                        <span className='spining-text-big'
                        key={i}
                        style={{
                            transform: `rotate(${deg * i}deg)`,
                            position: 'absolute',
                            top: '0',
                            left: '50%',
                            transformOrigin: '0 350px'
                        }}
                        >
                        {letra}
                        </span>
                    ))}
                </p>
            </div>
            {children}
        </div>
    )
}

export default AboutMotion;
