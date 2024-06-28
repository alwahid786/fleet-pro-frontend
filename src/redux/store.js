import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import getEnv from "../config/getEnv";
import truckSlice from "./slices/truck.slice";
import driverSlice from "./slices/driver.slice";
import employeesSlice from "./slices/employees.slice";
import deviceSlice from "./slices/device.slice";

const baseUrl = getEnv("VITE_SERVER_URL");

const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [truckSlice.name]: truckSlice.reducer,
        [driverSlice.name]: driverSlice.reducer,
        [employeesSlice.name]: employeesSlice.reducer,
        [deviceSlice.name]: deviceSlice.reducer,
    },
});

export default store;
export { baseUrl };
