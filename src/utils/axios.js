import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-server-qkm5.onrender.com/",
});

export default instance;
