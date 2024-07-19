import axios from "../config/axios";

const createPostApi = {};

createPostApi.createPost = (body) => axios.post("/createPost", body);

export default createPostApi;
