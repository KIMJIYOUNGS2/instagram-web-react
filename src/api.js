import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  timeout: 1000,
  headers: { "X-CSRFToken": Cookies.get("csrftoken") },
});

// export const getAllFeeds = () => {
//   return instance.get("feeds/").then((res) => res.data); // baseURL + feeds/
// };

export const getAllFeeds = async () => {
  const res = await instance.get("feeds/");
  return res.data; // baseURL + feeds/
};

// const res = await axios.get("/feeds");
// console.log("res", res);
