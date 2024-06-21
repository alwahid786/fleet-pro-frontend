import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    message: null,
};

const truckSlice = createSlice({
    name: "truck",
    initialState,
    reducers: {
        // add Truck
        // -----------
        addTruckStart: (state) => {
            state.loading = true;
        },
        addTruckSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        addTruckFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // update Truck
        // -----------
        updateTruckStart: (state) => {
            state.loading = true;
        },
        updateTruckSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        updateTruckFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // delete Truck
        // -----------
        deleteTruckStart: (state) => {
            state.loading = true;
        },
        deleteTruckSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        deleteTruckFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // get all trucks
        // -----------
        getAllTrucksStart: (state) => {
            state.loading = true;
        },
        getAllTrucksSuccess: (state, action) => {
            state.loading = false;
            state.trucks = action.payload.trucks;
        },
        getAllTrucksFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // clear error and message
        // ------------------------
        clearTruckMessage: (state) => {
            state.message = null;
        },
        clearTruckError: (state) => {
            state.error = null;
        },
    },
});

export const {
    clearTruckMessage,
    clearTruckError,
    addTruckStart,
    addTruckSuccess,
    addTruckFailure,
    updateTruckStart,
    updateTruckSuccess,
    updateTruckFailure,
    deleteTruckStart,
    deleteTruckSuccess,
    deleteTruckFailure,
    getAllTrucksStart,
    getAllTrucksSuccess,
    getAllTrucksFailure,
} = truckSlice.actions;
export default truckSlice;
