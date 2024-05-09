import React from "react";
import Frame from '../images/Frame.svg'
import { FaCirclePlus } from "react-icons/fa6";

function ImgButton(){
    return(
        <>
        <div className="container flex ">
            <div className="w-1/2" >
                <img className="w-217 h-80.6" src={Frame}/>
            </div>
            <div className="w-1/2 flex justify-end">
                <button className=" flex self-center"><span className="text-4xl  bg-blue"><FaCirclePlus  /></span><span className="text-2xl ml-3 bg-gradient-to-r from-gradientFrom to-gradientTo text-transparent bg-clip-text">Create Flashcard</span></button>
            </div>
        </div>
        </>
    )

}
export default ImgButton;