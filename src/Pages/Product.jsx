import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplays/ProductDisplay";

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div>
        <Breadcrum product={product} />
      </div>

      <div>
        <ProductDisplay product={product} />
      </div>
    </>
  );
};

export default Product;
