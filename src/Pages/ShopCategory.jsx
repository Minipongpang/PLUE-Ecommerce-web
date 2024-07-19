import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductCardDataByType from "../components/ShopComponents/ProductCardDataByType";

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);
  const { category } = props;

  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   console.log("ShopCategory allProducts: ", allProducts);
  //   console.log("ShopCategory category: ", category);
  //   if (allProducts.length > 0) {
  //     setIsLoading(false);
  //   }
  // }, [allProducts, category]);

  // if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="flex justify-center ">
        <img src={props.banner} alt="" className="w-full mb-20" />
      </div>

      <div className="w-[1609px] m-auto">
        <div className="flex items-center round mt-16 mb-8">
          <p className=" font-light text-[60px] text-teal-800">Shirts</p>
          <div className=" h-[10px] bg-teal-800 w-[85%] rounded-l-xl"></div>
        </div>
        <ProductCardDataByType productType={"shirts"} gender={[category]} />

        <div className="flex items-center round mt-16 mb-8">
          <p className=" font-light text-[60px] text-teal-800">Pants</p>
          <div className=" h-[10px] bg-teal-800 w-[85%] rounded-l-xl"></div>
        </div>
        <ProductCardDataByType productType={"pants"} gender={[category]} />
        <div className="flex items-center round mt-16 mb-8">
          <p className=" font-light text-[60px] text-teal-800">Jackets</p>
          <div className=" h-[10px] bg-teal-800 w-[85%] rounded-l-xl"></div>
        </div>
        <ProductCardDataByType productType={"jackets"} gender={[category]} />

        <div className="flex items-center round mt-16 mb-8">
          <p className=" font-light text-[60px] text-teal-800">Accessories</p>
          <div className=" h-[10px] bg-teal-800 w-[85%] rounded-l-xl"></div>
        </div>
        <ProductCardDataByType
          productType={"accessories"}
          gender={[category]}
        />
      </div>
    </>
  );
};

export default ShopCategory;
