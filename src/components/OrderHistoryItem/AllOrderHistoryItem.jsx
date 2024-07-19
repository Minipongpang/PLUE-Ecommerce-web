// components/AllOrderHistoryItem/AllOrderHistoryItem.jsx
import React from "react";

const AllOrderHistoryItem = ({ order, item }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} `;
  };

  return (
    <tr className="bg-white border-y-[1px] border-gray-200">
      <td className="pl-[50px]">{order.user.id}</td>
      <td className="pl-10">
        <img
          src={item.product.productImage1}
          alt=""
          className="w-[50px] rounded-xl shadow-lg my-2"
        />
      </td>

      <td>{item.product.productName}</td>
      <td>{order.status}</td>
      <td className="w-[250px]">{order.user.address}</td>
      <td className="pl-5">{formatDate(order.createdAt)}</td>
      <td>{order.shipByDate || "N/A"}</td>
      <td>${item.price}</td>
      <td>{item.amount}</td>
      <td>{order.paymentStatus}</td>
      <td>
        {order.eSlip && (
          <img
            src={order.eSlip}
            alt="eSlip"
            className="w-[100px] h-[120px] my-2"
          />
        )}
      </td>
    </tr>
  );
};

export default AllOrderHistoryItem;
