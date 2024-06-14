import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const truckApiPoint= createApi({

    reducerPath: "truckApi",

    baseQuery: fetchBaseQuery({

        baseUrl: "https://fleet-pro-backend.onrender.com/",
        credentials: "include",
        headers: {

            "Content-Type": "application/json"
        }
    }),

    endpoints: (builder)=> ({

        createTruck: builder.mutation({

            query: (data)=> ({

                url: "/api/truck/create", 
                method: "POST",
                body: data
            })
        }),
    })
})

export const {useCreateTruckMutation} = truckApiPoint;