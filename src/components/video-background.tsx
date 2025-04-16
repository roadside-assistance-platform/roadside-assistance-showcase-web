import { useEffect, useRef, useState } from "react";

export const VideoBackground = () => {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSources = [
    "/videos/video1.mp4",
    "/videos/video2.mp4", 
    "/videos/video1.mp4",
  ];
  // loop through video sources every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, [videoSources.length]);
  
  return ( 
    <>
      <div className="absolute inset-0 w-full h-full top-0 z-1">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={videoSources[index]} />
        
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-2" />
    </>
  );
}