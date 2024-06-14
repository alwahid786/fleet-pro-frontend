import { configureStore } from "@reduxjs/toolkit";
import { authApiPoint } from "./api/authApi";
import { truckApiPoint } from "./api/truckApi";


const store = configureStore({
    reducer: {
      [authApiPoint.reducerPath]: authApiPoint.reducer,
      [truckApiPoint.reducerPath]: truckApiPoint.reducer
    },

    middleware: (getDefaultMiddleware) =>

        getDefaultMiddleware().concat([authApiPoint.middleware, truckApiPoint.middleware]),
           
  });
  
  
  export default store;