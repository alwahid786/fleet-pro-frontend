import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notifications: [],
    loading: false,
    error: null,
    message: null,
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        // get notifications
        // ------------------
        getAllNotificationsStart: (state) => {
            state.loading = true;
        },
        getAllNotificationsSuccess: (state, action) => {
            state.loading = false;
            state.notifications = action.payload.notifications;
        },
        getAllNotificationsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // read notification
        // ------------------
        readNotificationStart: (state) => {
            state.loading = true;
        },
        readNotificationSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        readNotificationFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // clear error and message
        // ------------------------
        clearNotificationMessage: (state) => {
            state.message = null;
        },
        clearNotificationError: (state) => {
            state.error = null;
        },
    },
});

export const {
    getAllNotificationsStart,
    getAllNotificationsSuccess,
    getAllNotificationsFailure,
    readNotificationStart,
    readNotificationSuccess,
    readNotificationFailure,
    clearNotificationMessage,
    clearNotificationError,
} = notificationSlice.actions;
export default notificationSlice;
