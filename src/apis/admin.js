import axios from "../config/axios";

const adminApi = {};

adminApi.getAllOrderHistory = () => axios.get("/admin/allHistory");

export default adminApi;
