// ProductRow.jsx
import React from "react";

const ProductRow = ({
  product,
  address,
  cartProducts,
  updateProductQuantity,
  removeProductFromCart,
}) => {
  const handleQuantityChange = (e, productId) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      updateProductQuantity(productId, value);
    }
  };

  return (
    <tr className="bg-white border-y-[1px] border-gray-200">
      <td className=" pl-10 py-2">
        <img
          src={product.productImage1}
          alt=""
          className="w-[50px] rounded-xl shadow-lg"
        />
      </td>
      <td>{product.productName}</td>
      <td className=" py-3 w-[400px] pr-[100px]">{address}</td>
      <td>$ {product.price}</td>
      <td>
        <input
          type="number"
          id={product.id}
          className="bg-gray-50 w-8 h-6 border border-gray-300 text-center rounded-lg"
          value={cartProducts[product.id]}
          onChange={(event) => handleQuantityChange(event, product.id)}
          required
        />
      </td>
      <td>IMG</td>
      <td
        className="pl-3 text-[26px] text-red-600 cursor-pointer"
        onClick={() => {
          removeProductFromCart(product.id);
        }}
      >
        &#9746;
      </td>
    </tr>
  );
};

export default ProductRow;
