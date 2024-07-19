import React, { createContext, useEffect, useState } from "react";
// import All_product from "../assets/AllProductImage/AllProduct";
import productApi from "../apis/product";

export const ShopContext = createContext(null);

// ทำcart
const getDefaultCart = (products) => {
  let cart = {};
  if (products) {
    for (let index = 0; index < products.length; index++) {
      cart[products[index].id] = 0;
    }
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await productApi.getAllProducts();
      const products = response.data;
      setAllProducts(products);
      setCartProducts(getDefaultCart(products));
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const addProductToCart = (productId) => {
    setCartProducts((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
    // เช็คว่า productID ในobject อยู่ตรงไหน ถ้าใช่จะcloneขึ้นมาและ add+1เข้าไปในเลขidนั้น
  };
  const removeProductFromCart = (productId) => {
    setCartProducts((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };

  // อัพเดทค่าquantity
  const updateProductQuantity = (productId, quantity) => {
    setCartProducts((prev) => ({ ...prev, [productId]: quantity }));
  };

  // หาค่าผลรวมในcart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartProducts) {
      if (cartProducts[item] > 0) {
        let productInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        if (productInfo) {
          totalAmount += productInfo.price * cartProducts[item];
        }
      }
    }
    return totalAmount;
  };

  //หาจำนวนของทั้งหมดในcart
  const getTotalCartProducts = () => {
    let totalItem = 0;
    for (const item in cartProducts) {
      if (cartProducts[item] > 0) {
        totalItem += cartProducts[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    // All_product,
    allProducts,
    cartProducts,
    addProductToCart,
    removeProductFromCart,
    updateProductQuantity,
    getTotalCartAmount,
    getTotalCartProducts,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
