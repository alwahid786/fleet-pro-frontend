import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import getEnv from "../config/getEnv";
import truckSlice from "./slices/truck.slice";

const baseUrl = getEnv("VITE_SERVER_URL");

const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [truckSlice.name]: truckSlice.reducer,
    },
});

export default store;
export { baseUrl };
