
import React from 'react';


const MotionText = ({ icon, textBlue, textOrange, text3}) => {
  const repetitions = Array(6).fill(null);

  return (
    <div className="w-[100vw] font-syne text-4xl uppercase flex items-center m-0 p-0 box-border z-10"
        style={{ overflow: 'hidden' }}>
      <h2 className='text-center motion-text font-regular tracking-wider'>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {repetitions.map((_, index) => (
            <React.Fragment key={index}>
              <span className='rotating-icon' style={{ margin: '0 2rem' }}>
                {icon}
              </span>
              <span className='text-skyIce-700' style={{ margin: '0 .6rem' }}>{textBlue}</span>
              <span className='text-salmon font-semibold' >{textOrange}</span>
              <span className='text-skyIce-700' style={{ margin: '0 .6rem' }}>{text3}</span>              
            </React.Fragment>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default MotionText;

