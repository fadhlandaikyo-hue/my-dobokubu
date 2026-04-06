import axios from "axios";
import {useAuthStore} from "../auth.js";

const api = axios.create({baseURL: "http://localhost:3000/api"})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401 ) {
            const auth = useAuthStore();
            auth.logoutUser();
        }
        return Promise.reject(error);
    }
)