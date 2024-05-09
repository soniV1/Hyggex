import React from "react";
import { FiHome } from 'react-icons/fi';
import { IoIosArrowForward } from "react-icons/io";
function Breadcrums(){
    return (
        <>
        <div className="flex items-center space-x-2 w-hug h-hug top-139 left-102 mt-8 pl-10 ml-4">
            <FiHome className="w-5 h-5 text-gray-500"/>
  <a href="#" className="text-gray-500 hover:text-gray-700 w-hug h-hug font-inter text-base font-medium leading-5 text-center">Flashcard</a>
  <IoIosArrowForward/>
  <a href="#" className="text-gray-500 hover:text-gray-700  w-hug h-hug font-inter text-base font-medium leading-5 text-center">Mathematics</a>
  <IoIosArrowForward/>
  <span className="text-gray-700 font-inter text-base font-semibold leading-5 text-center">Relation and Function</span>
</div>

<div className="pl-20 mt-8">
    <h2 className="font-montserrat text-2xl font-bold leading-tight bg-gradient-to-r from-gradientFrom to-gradientTo text-transparent bg-clip-text ">Relations and Functions(Mathematics)</h2>
</div>


<div class="p-6">
  {/* <!-- Tab content goes here --> */}
</div>

        </>
    )
}

export default Breadcrums;