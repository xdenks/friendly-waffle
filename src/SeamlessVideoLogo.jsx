import React from 'react';
import './SeamlessVideoLogo.css';

const SeamlessVideoLogo = () => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <video 
          className="video-loop"
          autoPlay 
          loop
          muted
          playsInline
        >
          <source src="/assets/adqwea_seamless.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default SeamlessVideoLogo;