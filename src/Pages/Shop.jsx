import React from "react";
import ProductCardDataByType from "../components/ShopComponents/ProductCardDataByType";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <div className="flex justify-end mr-[120px] mt-20">
        <Link to="/createPost">
          <button className=" w-[200px] h-[50px] bg-teal-900 text-white font-thin rounded-xl hover:bg-teal-300  focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform active:bg-green-200 active:text-black">
            ADD PRODUCT
          </button>
        </Link>
      </div>
      <div className="w-[1609px] m-auto">
        <div className="flex items-center round mt-16 mb-8">
          <p className=" font-light text-[60px] text-teal-800">Shirts</p>
          <div className=" h-[10px] bg-teal-800 w-[85%] rounded-l-xl"></div>
        </div>
        <ProductCardDataByType productType={"shirts"} />

        <div className="flex items-center round mt-16 mb-8">
          <p className=" font-light text-[60px] text-teal-800">Pants</p>
          <div className=" h-[10px] bg-teal-800 w-[85%] rounded-l-xl"></div>
        </div>
        <ProductCardDataByType productType={"pants"} />
        <div className="flex items-center round mt-16 mb-8">
          <p className=" font-light text-[60px] text-teal-800">Jackets</p>
          <div className=" h-[10px] bg-teal-800 w-[85%] rounded-l-xl"></div>
        </div>
        <ProductCardDataByType productType={"jackets"} />

        <div className="flex items-center round mt-16 mb-8">
          <p className=" font-light text-[60px] text-teal-800">Accessories</p>
          <div className=" h-[10px] bg-teal-800 w-[85%] rounded-l-xl"></div>
        </div>
        <ProductCardDataByType productType={"accessories"} />
      </div>
      ;
    </>
  );
};

export default Shop;
