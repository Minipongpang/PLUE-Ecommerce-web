// pages/AdminOrderHistory.jsx
import React, { useEffect, useState } from "react";

import adminApi from "../apis/admin";
import AllOrderHistoryItem from "../components/OrderHistoryItem/AllOrderHistoryItem";

const AdminOrderHistory = () => {
  const [allOrderHistory, setAllOrderHistory] = useState([]);

  useEffect(() => {
    const fetchAllOrderHistory = async () => {
      try {
        const response = await adminApi.getAllOrderHistory();
        setAllOrderHistory(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllOrderHistory();
  }, []);

  console.dir(setAllOrderHistory, "123123123123123123123123");
  console.dir(allOrderHistory, "123123123123123123123213123123123123213");

  return (
    <div className="w-max flex flex-col m-auto mt-10 mb-20 font-thin">
      <div className="text-thin text-[35px] my-10">
        <p>Order History</p>
      </div>
      <div className="bg-white py-7 px-[50px] text-[13px] font-semibold text-teal-800 rounded-t-xl w-[1609px]">
        <p>All Orders</p>
      </div>
      <div>
        <table className="table-auto text-[12px] w-[1609px]">
          <thead>
            <tr className="bg-[#FAFAFB]">
              <th className="pl-10 py-5 text-left font-thin">USER</th>
              <th className="pl-10 py-5 text-left font-thin">PRODUCT</th>
              <th className="py-5 text-left font-thin">NAME</th>
              <th className="py-5 text-left font-thin">STATUS</th>
              <th className="py-5 text-left font-thin">ADDRESS</th>
              <th className="pl-5 py-5 text-left font-thin">CREATED TIME</th>
              <th className="py-5 text-left font-thin">SHIP BY DATE</th>
              <th className="py-5 text-left font-thin">ORDER PRICE</th>
              <th className="py-5 text-left font-thin">QUANTITY</th>
              <th className="py-5 text-left font-thin">PAYMENT STATUS</th>
              <th className="py-5 text-left font-thin">E-SLIP</th>
            </tr>
          </thead>
          <tbody>
            {allOrderHistory.flatMap((order) =>
              order.orderItems.map((item, index) => (
                <AllOrderHistoryItem key={index} order={order} item={item} />
              ))
            )}
          </tbody>
        </table>
        <div className="bg-white py-7 px-[50px] text-[13px] font-semibold text-teal-800 rounded-b-xl w-[1609px]"></div>
      </div>
    </div>
  );
};

export default AdminOrderHistory;
