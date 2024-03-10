
import React from 'react';


const MotionText = ({ icon, text}) => {
  const repetitions = Array(4).fill(null);

  return (
    <div className="text-slider-container font-syne text-2xl z-10" style={{ overflow: 'hidden' }}>
      <h2 className='text-center text-neutral-600 motion-text font-regular tracking-wider'>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {repetitions.map((_, index) => (
            <React.Fragment key={index}>
              <span className='rotating-icon' style={{ margin: '0 2rem' }}>
                {icon}
              </span>
              <span className='text-neutral-600' style={{ margin: '0 1rem' }}>{text}</span>
              
              
            </React.Fragment>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default MotionText;

