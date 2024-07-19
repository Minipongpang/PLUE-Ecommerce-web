import React from "react";
import bgNewCollection from "../../images/NewRelease/bg01.png";
// import testImg from "../assets/allProductImage/hm01-a.png";
import NewReleaseData from "../components/NewReleaseData/NewReleaseData";
const NewRelease = () => {
  return (
    <div className=" h-[834px] flex justify-center overflow-hidden mt-14">
      <div className="">
        <img src={bgNewCollection} alt="" />
      </div>
      <div className="flex flex-col">
        <NewReleaseData />
        <NewReleaseData />
      </div>
      {/* <div className=" grid grid-cols-1 w-[894px] animate-loop-scroll">
        <div className=" grid grid-cols-2 w-[896px]  ">
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

        <div className=" grid grid-cols-2 w-[894px]  " aria-hidden="true">
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
    </div>
  );
};

export default NewRelease;
