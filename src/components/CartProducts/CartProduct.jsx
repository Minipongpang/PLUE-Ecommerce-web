import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import qrIcon from "../../../images/QrIcon.png";
import qrCode from "../../../images/qrCode.jpg";
import "./CartProduct.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import orderApi from "../../apis/order";
import { toast } from "react-toastify";
import ProductRow from "./components/ProductRow";

const CartProduct = () => {
  const {
    allProducts,
    cartProducts,
    removeProductFromCart,
    updateProductQuantity,
    getTotalCartAmount,
  } = useContext(ShopContext);
  const [showQrSection, setShowQrSection] = useState(false);
  const [eSlipFile, setESlipFile] = useState(null);
  const navigate = useNavigate();

  // const handleQuantityChange = (e, productId) => {
  //   const value = parseInt(e.target.value);
  //   if (value >= 0) updateProductQuantity(productId, value);
  // };

  const toggleQrSection = () => {
    setShowQrSection((prevState) => !prevState);
  };

  const handleBlur = () => {
    setShowQrSection(false);
  };

  const checkAccessToken = () => {
    return localStorage.getItem("ACCESS_TOKEN");
  };

  const token = checkAccessToken();
  const firstName = token
    ? JSON.parse(atob(token.split(".")[1])).firstName
    : "";
  const lastName = token ? JSON.parse(atob(token.split(".")[1])).lastName : "";
  const address = token ? JSON.parse(atob(token.split(".")[1])).address : "";
  const phoneNumber = token
    ? JSON.parse(atob(token.split(".")[1])).phoneNumber
    : "";

  const handleCheckout = async () => {
    const orderItems = Object.keys(cartProducts)
      .filter((id) => cartProducts[id] > 0)
      .map((id) => ({
        productId: parseInt(id),
        amount: cartProducts[id],
        price: allProducts.find((product) => product.id === parseInt(id)).price,
      }));

    const formData = new FormData();
    formData.append("userId", getUserId());
    formData.append("status", "PENDING");
    formData.append("paymentStatus", "PENDING");
    formData.append("orderItems", JSON.stringify(orderItems));
    if (eSlipFile) {
      formData.append("eSlip", eSlipFile);
    }

    try {
      await orderApi.checkout(formData);
      toast.success("Checkout Successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Checkout error", err);
    }
  };

  const getUserId = () => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (!token) return null;
    return JSON.parse(atob(token.split(".")[1])).id;
  };

  return (
    <div className=" w-max flex flex-col m-auto mt-10 mb-20 font-thin ">
      <div className="text-thin text-[35px] my-10">
        <p>Orders</p>
      </div>
      <div className="bg-white py-7 px-[50px] text-[13px] font-semibold text-teal-800 rounded-t-xl w-[1609px]">
        <p>All Product</p>
      </div>
      <div>
        <table className=" table-auto text-[12px] w-[1609px]">
          <tr className=" bg-[#FAFAFB]">
            <th className=" pl-10 py-5 text-left font-thin">PRODUCT</th>
            <th className=" py-5 text-left font-thin">NAME</th>
            <th className=" py-5 text-left font-thin">ADDRESS</th>
            <th className=" py-5 text-left font-thin">ORDER PRICE</th>
            <th className=" py-5 text-left font-thin">QUANTITY</th>
            <th className=" py-5 text-left font-thin">E-SLIP</th>
            <th className=" py-5 text-left font-thin">REMOVE</th>
          </tr>

          {allProducts.map((product) =>
            cartProducts[product.id] > 0 ? (
              <ProductRow
                key={product.id}
                product={product}
                address={address}
                cartProducts={cartProducts}
                updateProductQuantity={updateProductQuantity}
                removeProductFromCart={removeProductFromCart}
              />
            ) : null
          )}
        </table>
      </div>
      <div className="bg-white py-7 px-[50px] text-[13px] font-semibold text-teal-800 rounded-b-xl w-[1609px]"></div>

      {/* CHECKOUT PART */}
      <div>
        <div
          className="flex  bg-white mt-10 py-7 px-[50px] text-[13px] font-semibold text-teal-800 rounded-t-xl
        min-h-[400px]"
        >
          <div className="flex flex-col w-[536px] pr-5 border-r-[1px] border-gray-200">
            <big>Address</big>
            <big className="mt-5">
              {firstName} {lastName}
            </big>
            <div className="flex justify-between">
              <big className="">{phoneNumber}</big>
              <Link to="/editProfile">
                <small className="text-blue-500">Change</small>
              </Link>
            </div>
            <p className="mt-5 font-thin text-[12px]">{address}</p>
          </div>
          <div className="flex flex-col px-10 w-[500px] border-r-[1px] border-gray-200">
            <big className="text-[28px]">Payment method:</big>
            <button
              className="w-[120px] h-[30px] border-[1px] border-gray-300 rounded-xl select focus:bg-teal-100 focus:border-[3px] focus:border-teal-300 text-[12px] font-thin my-2 "
              onClick={toggleQrSection}
              onFocus={handleBlur}
            >
              QR Prompt Pay
            </button>
            <div className=" border-b-[1px] border-gray-200"></div>

            {/* QR CODE & Upload*/}
            {showQrSection ? (
              <>
                <div className="flex gap-2 my-5">
                  <input type="radio" id="qr" name="qr" defaultChecked />
                  <label htmlFor="qr" className="flex gap-2">
                    <img src={qrIcon} alt="" className="w-[20px] h-[20px]" />
                    QR PROMPT PAY
                  </label>
                </div>
                <div className="flex gap-5  ">
                  <img src={qrCode} alt="" className="w-[150px]" />
                  <div className="pl-5">
                    <label
                      className="block mb-2 text-sm font-thin text-gray-900 dark:text-white"
                      htmlFor="file_input"
                    >
                      Upload E-Slip
                    </label>
                    <input
                      className="custom-file-input font-thin rounded-xl"
                      id="file_input"
                      type="file"
                      onChange={(e) => setESlipFile(e.target.files[0])}
                    ></input>
                  </div>
                </div>
              </>
            ) : null}
          </div>{" "}
          {/* total Part */}
          <div className="flex flex-col justify-end text-right w-[473px] pl-8 gap-4">
            <div className=" flex justify-between font-thin text-[16px]">
              <p>Merchandise Subtotal:</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <div className=" flex justify-between font-thin text-[16px]">
              <p>Shipping Total:</p>
              <p>$ {0}</p>
            </div>
            <div className=" flex justify-between font-thin text-[20px]">
              <p>Total Payment:</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[80px]  bg-white py-7 px-[50px] font-semibold text-teal-800 rounded-b-xl border-t-[1px] border-gray-200 flex justify-end">
        <button
          onClick={handleCheckout}
          className="w-[250px] h-[40px] bg-teal-900 text-white font-thin rounded-xl hover:bg-teal-300  focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform active:bg-green-200 active:text-black"
        >
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
