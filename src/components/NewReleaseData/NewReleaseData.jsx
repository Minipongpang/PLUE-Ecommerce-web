import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ShopContext } from "../../Context/ShopContext";

const NewReleaseData = () => {
  const { allProducts } = useContext(ShopContext);

  return (
    <div>
      <div className="grid grid-cols-1 w-[894px] animate-loop-scroll">
        <div className=" grid grid-cols-2 w-[896px]  ">
          {allProducts.slice(14, 22).map((item, i) => {
            return (
              <ProductCard
                key={i}
                id={item.id}
                productName={item.productName}
                productImage1={item.productImage1}
                price={item.price}
              />
            );
          })}
        </div>
        {/* <div className=" grid grid-cols-2 w-[896px]  " aria-hidden="true">
          {All_product.slice(18, 22).map((item, i) => {
            return (
              <ProductCard
                key={i}
                id={item.id}
                productName={item.productName}
                productImage1={item.productImage1}
                price={item.price}
              />
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default NewReleaseData;
