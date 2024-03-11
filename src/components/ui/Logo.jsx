import React from "react";

function Logo({ text, children }) {
  const lenght = text.length;
  const deg = 360 / lenght;

    return (
        <div className='relative w-[180px] h-[180px] rounded-full grid place-items-center font-medium z-50'>
        <div className='spinning-text'>
            <p className="text-skyIce font-bold">
                {text.split("").map((letra, i) => (
                    <span
                    key={i}
                    style={{
                        transform: `rotate(${deg * i}deg)`,
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