import axios from "../config/axios";

const orderApi = {};

orderApi.checkout = (body) => axios.post("/order/checkout", body);

orderApi.getUserOrderHistory = () => axios.get("/order/orderHistory");
orderApi.getAllOrderHistory = () => axios.get("/order/all");

export default orderApi;
