import React from "react";

const Breadcrum = (props) => {
  const { product } = props;
  if (!product) {
    return <div>Breadcrum: No product found</div>;
  }
  return (
    <div className=" font-thin m-10">
      {product.productType} / {product.productName}
    </div>
  );
};

export default Breadcrum;
