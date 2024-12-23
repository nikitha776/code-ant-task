import React from 'react'
import image2 from "../assets/Subtract (1).png";
import image from "../assets/Subtract.png";
import pieChart from "../assets/Group 4.png"
import { FaLongArrowAltUp } from "react-icons/fa";

const LeftContainer = () => {
    return (
        <div className="lg:w-[50%] lg:h-screen lg:relative lg:block hidden text-[#081735]">
            <div className = "ml-[10%]">
                <div className="h-[20%] w-[47%] absolute mt-[150px] ml-[75px] shadow-custom bg-white rounded-2xl z-10 overflow-hidden">
                    <div className="flex gap-4 p-4 border-b border-[#E6E8F0]">
                        <div>
                            <img src={image2} className="w-[90%]"></img>
                        </div>
                        <div className="font-bold">AI to Detect & Autofix Bad Code</div>
                    </div>
                    <div className="flex justify-evenly mt-[3%]">
                        <div>
                            <div className="font-bold ml-[30%]">30+</div>
                            <div className="text-xs">Language Supports</div>
                        </div>
                        <div>
                            <div className="font-bold ml-[20%]">10K+</div>
                            <div className="text-xs">Developers</div>
                        </div>
                        <div>
                            <div className="font-bold ml-[15%]">100K+</div>
                            <div className="text-xs">Hours Saved</div>
                        </div>
                    </div>
                </div>
                <div className="absolute shadow-custom bg-white rounded-2xl w-[190px] h-[125px] mt-[275px] ml-[275px] z-20">
                    <div className="flex">
                        <div className="m-4">
                            <img src={pieChart} className="w-[45px] mb-2"></img>
                            <p className="text-xs font-bold mb-1">Issues Fixed</p>
                            <p className="font-bold text-xl">500K+</p>
                        </div>
                        <div className="m-4 my-6">
                            <div className="flex text-[#0049C6]"><FaLongArrowAltUp /><span className="text-xs font-semibold">14%</span></div>
                            <div className="text-xs">This week</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[30%] absolute bottom-0 left-0 ">
                <img src={image} className="w-full h-auto"></img>
            </div>
        </div>
    )
}

export default LeftContainer

{/* import React from 'react';
import image from "../assets/Subtract.png";

const LeftContainer = () => {
  return (
    <div className="w-1/2 h-screen relative">
      <div className="absolute w-[350px] h-[125px] mt-[175px] ml-[100px] shadow-custom bg-white rounded-2xl z-10 overflow-hidden">
        Helloo
      </div>
      <div className="absolute shadow-custom bg-white rounded-2xl w-[200px] h-[125px] mt-[275px] ml-[275px] z-20">
        HII
      </div>
      <div className="w-[200px] absolute bottom-0 left-0">
        <img src={image} className="w-full h-auto" alt="Subtract" />
      </div>
    </div>
  );
}

export default LeftContainer; */}
