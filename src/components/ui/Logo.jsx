import React from "react";

function Logo({ text, children }) {
  const lenght = text.length;
  const deg = 360 / lenght;

    return (
        <div className="spinning-text-wrapper">
        <div className="spinning-text">
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