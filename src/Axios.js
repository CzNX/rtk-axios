import axios from "axios";
import myApi from "./api/Api";
const Axios = () => {
  //   axios.defaults.baseURL = "https://reqres.in/api";
  const instance = axios.create({
    baseURL: "https://reqres.in/api",
    timeout: 1000,
    headers: { "X-custom-Header": "foobar" },
  });

  const instanceData = () => {
    instance.get("/users").then((res) => console.log(res.data));
  };
  const getData = async () => {
    const {
      data: { data },
    } = await myApi.get("/users");
    console.log(data);
  };
  const postData = async () => {
    const data = { name: "new-name", test: "new-job" };
    const final = await myApi
      .post("/users", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const updateData = async () => {
    const data = { name: "new-name", job: "new-job" };

    try {
      const res = await myApi.put("/users/2", data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async () => {
    try {
      const res = await myApi.delete("/users/2");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const multiple = async () => {};
  return (
    <div className="App">
      <button onClick={getData}>GET DATA</button>
      <button onClick={postData}>POST DATA</button>
      <button onClick={updateData}>update DATA</button>
      <button onClick={deleteData}>delete DATA</button>
      <button onClick={instanceData}>GET Instance</button>
      <button onClick={getData}>GET DATA</button>
    </div>
  );
};

export default Axios;
