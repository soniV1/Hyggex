import React, { useRef } from 'react';
import { RiFullscreenFill } from "react-icons/ri";
import { LuLightbulb } from "react-icons/lu";
import { PiSpeakerHighBold } from "react-icons/pi";
import { IoChevronBackCircleSharp,IoChevronForwardCircle  } from "react-icons/io5";
import { TbReload } from "react-icons/tb";

function VideoEditor() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center  p-4 ">
        <div className="flex-grow max-w-[500px]">
          {/* Video player component */}
          <div className="bg-blue-900  rounded-lg overflow-hidden relative">
          <LuLightbulb className='text-2xl text-white absolute ml-6 mt-6'/>
          <PiSpeakerHighBold className='text-2xl text-white absolute top-0 right-0 mr-6 mt-6 '/>
          <span className='text-2xl text-white absolute top-28 left-36'>9 + 6 + 7x - 2x - 3</span>
            <video ref={videoRef} className=" w-full" >
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> 
            
          </div>
        </div>
        
      </div>
      <div className="flex justify-center items-center  p-4 ">
                <ul className='list-style-none flex gap-20 '>
                    <li><TbReload className='text-2xl text-blue-900' /></li>
                    
                    <li><IoChevronBackCircleSharp className='text-4xl text-blue-900' /></li>

                    <li> <span className='text-xl font-bold '> 01/10 </span></li>
                    <li><IoChevronForwardCircle className='text-4xl text-blue-900' /></li>
                    <li><RiFullscreenFill className='text-2xl text-blue-900' /></li>
                </ul>
      </div>
      {/* <div className="">
          
          <div className="flex flex-col space-y-4">
            <button onClick={handlePlay} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Play
            </button>
            <button onClick={handlePause} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Pause
            </button>
            <button onClick={handleFullscreen} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Fullscreen
            </button>
          </div>
        </div> */}
    </div>
  );
}

export default VideoEditor;
