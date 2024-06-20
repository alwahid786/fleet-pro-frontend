import axios from "axios";
import { baseUrl } from "../redux/store";

const customAxios = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default customAxios;
