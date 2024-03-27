import React, { useState, useRef } from 'react';
import Audio from './Audio';

const Audiotask = () => {
  const [audioo, SetAudio] = useState(Audio);
  
  return (
    <div>
     
      {audioo.results.map((x, index) => {
        return (
          <div key={index} className=' h-40  grid-cols-1 '>
            
            <h3>TITLE: {x.kind}</h3>
            <h3>TrackName: {x.trackName}</h3>
            <audio className='p-1 w-80' controls src={x.previewUrl} />
            
            <br />
            
          </div>
        );
      })}
    </div>
  );
};
export default Audiotask;
