import React from "react";

const Logo =({ text, children }) => {
  const lenght = text.length;
  const deg = 360 / lenght;

    return (
        <div className='relative w-[140px] h-[140px] rounded-full grid place-items-center font-medium z-50'>
            <div className='spinning-text'>
                <p className="text-skyIce-500 font-semibold">
                    {text.split("").map((letra, i) => (
                        <span 
                        key={i}
                        style={{
                            transform: `rotate(${deg * i}deg)`,
                            position: 'absolute',
                            top: '0',
                            left: '50%',
                            transformOrigin: '0 70px'
                        }}
                        >
                        {letra}
                        </span>
                    ))}
                </p>
            </div>
            {children}
        </div>
    );
}

export default Logo;