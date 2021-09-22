import axios from "axios";

// export const api = (axios.defaults.baseURL = "https://reqres.in/api");
export default axios.create({
  baseURL: "https://reqres.in/api",
});
