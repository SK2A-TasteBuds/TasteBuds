import React from "react";

function Headercard() {
  return (
    <div>
      <p className=''>Header card</p>
      <div className='bg-slate-400 w-full'>
        <img
          src='https://images.unsplash.com/photo-1682685797140-c17807f8f217'
          alt='header image'
          className='max-w-sm w-full rounded-lg'
        />
      </div>
    </div>
  );
}

export default Headercard;
