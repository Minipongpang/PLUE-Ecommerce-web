import React from "react";
// import testImg from "../assets/allProductImage/hm01-a.png";
import TrendingData from "../components/TrendingData/TrendingData";

const Trending = () => {
  return (
    <>
      <div>
        <div className="flex items-center round mt-16 mb-8">
          <p className=" font-light text-[60px] text-teal-800">Trending</p>
          <div className=" h-[10px] bg-teal-800 w-full rounded-l-xl"></div>
        </div>
        {/* <div>
          <div className=" flex w-full">
            <div className=" bg-[#f2f2f2] h-[417px] w-[450px] border-[1px] border-gray-400 flex flex-col justify-between ">
              <div className=" font-thin m-4"> HAT HAT HAT</div>
              <div className="w-[220px] flex justify-center m-auto ">
                <img src={testImg} alt="" />
              </div>
              <div className=" flex justify-end font-thin m-4">$ 99.99</div>
            </div>

            <div className=" bg-[#f2f2f2] h-[417px] w-[450px] border-[1px] border-gray-400 flex flex-col justify-between ">
              <div className=" font-thin m-4"> HAT HAT HAT</div>
              <div className="w-[220px] flex justify-center m-auto ">
                <img src={testImg} alt="" />
              </div>
              <div className=" flex justify-end font-thin m-4">$ 99.99</div>
            </div>

            <div className=" bg-[#f2f2f2] h-[417px] w-[450px] border-[1px] border-gray-400 flex flex-col justify-between ">
              <div className=" font-thin m-4"> HAT HAT HAT</div>
              <div className="w-[220px] flex justify-center m-auto ">
                <img src={testImg} alt="" />
              </div>
              <div className=" flex justify-end font-thin m-4">$ 99.99</div>
            </div>

            <div className=" bg-[#f2f2f2] h-[417px] w-[450px] border-[1px] border-gray-400 flex flex-col justify-between ">
              <div className=" font-thin m-4"> HAT HAT HAT</div>
              <div className="w-[220px] flex justify-center m-auto ">
                <img src={testImg} alt="" />
              </div>
              <div className=" flex justify-end font-thin m-4">$ 99.99</div>
            </div>
          </div>
        </div> */}
        <TrendingData />
      </div>
    </>
  );
};

export default Trending;
