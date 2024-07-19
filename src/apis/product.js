import axios from "../config/axios";

const productApi = {};

productApi.getAllProducts = () => axios.get("/product");

export default productApi;
