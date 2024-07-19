import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const handleClickItemToScrollToTopPage = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className=" bg-[#f2f2f2] h-[417px] w-[450px] border-[1px] border-gray-400 flex flex-col justify-between relative z-0">
      <div className=" font-thin m-4 relative z-20"> {props.productName}</div>
      <div className=" relative z-10 w-[220px] flex justify-center m-auto hover:scale-125 transition-all duration-500 cursor-pointer">
        <Link to={`/product/${props.id}`}>
          <img
            onClick={handleClickItemToScrollToTopPage}
            src={props.productImage1}
            alt=""
          />
        </Link>
      </div>
      <div className=" flex justify-end font-thin m-4 relative z-20">
        $ {props.price}
      </div>
    </div>
  );
};

export default ProductCard;
