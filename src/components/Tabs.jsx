import React from "react";
import VideoEditor from "./VideoEditor";

function Tabs(){
    return(
        <>
        {/* tabs here--- */}
<div class=" top-[328px] left-[443px] flex justify-center items-center">
  <nav class="-mb-px flex justify-center items-center">
    <button class="w-full py-4 px-6 text-sm bg-gradient-to-r from-gradientFrom to-gradientTo text-transparent bg-clip-text bg-white  font-inter text-sm font-bold text-left border-b-[2px]">Study</button>
    <button class="w-full py-4 px-6 text-sm text-gray-500 bg-white  font-inter text-sm font-bold text-left">Quiz</button>
    <button class="w-full py-4 px-6 text-sm text-gray-500 bg-white  font-inter text-sm font-bold text-left ">Test</button>
    <button class="w-full py-4 px-6 text-sm text-gray-500 bg-white  font-inter text-sm font-bold text-left ">Game</button>
    <button class="w-full py-4 px-6 text-sm text-gray-500 bg-white  font-inter text-sm font-bold text-left ">Other</button>
    
  </nav>
  
</div>
<div className="mx-auto">
    <VideoEditor />
  </div>
        </>
    )

}

export default Tabs;