import React from "react";

const OrderHistoryItem = ({ order }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} `;
  };

  return (
    <>
      {order.orderItems.map((item, index) => (
        <tr className="bg-white border-y-[1px] border-gray-200" key={index}>
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
      ))}
    </>
  );
};

export default OrderHistoryItem;
