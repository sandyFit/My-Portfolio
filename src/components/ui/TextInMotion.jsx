import React from 'react'

const TextInMotion = ({icon, text}) => {
    
    const repetitions = Array(10).fill(null);

    return (
        <div className="text-slider-container font-syne text-2xl z-10" style={{ overflow: 'hidden' }}>
        <h2 className='text-center text-neutral-600 motion-text font-regular tracking-wider'>
            <div 
                className='bg-lime-300 h-16 grid place-items-center'
                >
                    <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>

                        {repetitions.map((_, index) => (
                            <React.Fragment key={index}>
                            <span style={{ margin: '0 2rem', color: '#7c5dec' }}>
                                {icon}
                            </span>
                            <span className='text-neutral-600' style={{ margin: '0 1rem' }}>{text}</span>
                            
                            
                            </React.Fragment>
                        ))}
                    </div>
            </div>
        </h2>
        </div>
    );
    
}

export default TextInMotion