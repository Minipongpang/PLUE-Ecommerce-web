import React, { useContext } from "react";
import trending_product from "../../assets/trendingProduct/trendingProduct";
import ProductCard from "../ProductCard/ProductCard";
import { ShopContext } from "../../Context/ShopContext";

const TrendingData = () => {
  const { allProducts } = useContext(ShopContext);

  const filteredProducts = allProducts.filter((item) =>
    item.productName.startsWith("Carhartt")
  );

  return (
    <div>
      <div className="flex">
        {filteredProducts.slice(3, 8).map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              productName={item.productName}
              productImage1={item.productImage1}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingData;
