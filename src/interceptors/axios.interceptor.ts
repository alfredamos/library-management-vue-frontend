import { apiContext } from "@/behavior-subject/auth-context.rxjs";
import { initialAuthUser } from "@/utils/authUser-initial.util";
import axios from "axios";

const baseURL = "http://localhost:3100/api";
const Axios = axios.create({
  baseURL,
});

Axios.interceptors.request.use(
  (config) => {
    const user = apiContext.getUser();
    const token = user?.token;
    console.log("Token interceptor, token : ", token);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("In response-interceptor,  response : ", error);
    if (error.response.status === 401) {
      console.log("You have not logged in, please login!");
      apiContext.updateAuthUser$(initialAuthUser);
      window.location.href = "/home"
    }
  }
);

export default Axios;
