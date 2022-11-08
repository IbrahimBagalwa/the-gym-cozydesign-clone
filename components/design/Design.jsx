import React, { useEffect, useRef } from 'react';

export default function Design() {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <div>
      <video loop autoPlay ref={videoRef}>
        <source
          src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86da0e3af903761f6c302c_Black And White Video Of Man Infront Of The Computer-transcode.mp4'
          data-wf-ignore='true'
        />
        <source
          src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86da0e3af903761f6c302c_Black And White Video Of Man Infront Of The Computer-transcode.webm'
          data-wf-ignore='true'
        />
      </video>
    </div>
  );
}
