import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: null,
    message: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // user login
        // -----------
        loginUserStart: (state) => {
            state.loading = true;
        },
        loginUserSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.user = action.payload.user;
        },
        loginUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // forget password
        // ----------------
        forgetPasswordStart: (state) => {
            state.loading = true;
        },
        forgetPasswordSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        forgetPasswordFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // reset password
        // ---------------
        resetPasswordStart: (state) => {
            state.loading = true;
        },
        resetPasswordSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        resetPasswordFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // user logout
        // ------------
        logoutUserStart: (state) => {
            state.loading = true;
        },
        logoutUserSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        logoutUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // clear error and message
        // ------------------------
        clearUserMessage: (state) => {
            state.message = null;
        },
        clearUserError: (state) => {
            state.error = null;
        },
    },
});

export const {
    loginUserStart,
    loginUserSuccess,
    loginUserFailure,
    forgetPasswordStart,
    forgetPasswordSuccess,
    forgetPasswordFailure,
    resetPasswordStart,
    resetPasswordSuccess,
    resetPasswordFailure,
    logoutUserStart,
    logoutUserSuccess,
    logoutUserFailure,
    clearUserMessage,
    clearUserError,
} = userSlice.actions;
export default userSlice;
