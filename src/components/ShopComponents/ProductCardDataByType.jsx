import ProductCard from "../ProductCard/ProductCard";
import { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductCardDataByType = ({
  productType,
  gender = ["MEN", "WOMEN", "KIDS"],
}) => {
  const { allProducts } = useContext(ShopContext);
  console.log("ShopCategory allProductsasdasdasdasdasd: ", allProducts);

  const filteredProducts = allProducts.filter(
    (item) =>
      item.productType.toUpperCase() === productType.toUpperCase() &&
      gender.includes(item.gender.toUpperCase())
  );

  // useEffect(() => {
  //   console.log("ProductCardDataByType allProducts: ", allProducts);
  //   console.log("ProductCardDataByType gender: ", gender);
  // }, [allProducts, gender]);

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {filteredProducts.slice(0, 7).map((item, i) => (
          <ProductCard
            key={i}
            id={item.id}
            productName={item.productName}
            productImage1={item.productImage1}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCardDataByType;
