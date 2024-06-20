import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import getEnv from "../config/getEnv";

const baseUrl = getEnv("VITE_SERVER_URL");

const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
    },
});

export default store;
export { baseUrl };
