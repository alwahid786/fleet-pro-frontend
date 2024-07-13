import { customAxios } from "../../utils/customAxios";
import {
    forgetPasswordFailure,
    forgetPasswordStart,
    forgetPasswordSuccess,
    loginUserFailure,
    loginUserStart,
    loginUserSuccess,
    logoutUserFailure,
    logoutUserStart,
    logoutUserSuccess,
    resetPasswordFailure,
    resetPasswordStart,
    resetPasswordSuccess,
} from "../slices/user.slice";

// login Action
// -----------
const loginUserAction = (email, password) => async (dispatch) => {
    dispatch(loginUserStart());
    try {
        const response = await customAxios.post("/user/login", { email, password });
        // console.log("user login api response ", response);
        dispatch(loginUserSuccess(response.data));
    } catch (error) {
        // console.log(error);
        dispatch(loginUserFailure(error?.response?.data?.message || "Error ocurred while login"));
    }
};
// forget password
// ---------------
const forgetPasswordAction = (email) => async (dispatch) => {
    dispatch(forgetPasswordStart());
    try {
        const response = await customAxios.put("/user/forget-password", { email });
        // console.log("forget password api response ", response);
        dispatch(forgetPasswordSuccess(response.data));
    } catch (error) {
        // console.log(error);
        dispatch(
            forgetPasswordFailure(error?.response?.data?.message || "Error ocurred while forget password")
        );
    }
};

// reset password
// ---------------
const resetPasswordAction = (resetToken, newPassword) => async (dispatch) => {
    dispatch(resetPasswordStart());
    try {
        const response = await customAxios.post(`/user/reset-password?resetToken=${resetToken}`, {
            newPassword,
        });
        // console.log("reset password api response ", response);
        dispatch(resetPasswordSuccess(response?.data));
    } catch (error) {
        // console.log(error);
        dispatch(
            resetPasswordFailure(error?.response?.data?.message || "Error ocurred while reset password")
        );
    }
};

// logout user
// -----------
const logoutUserAction = () => async (dispatch) => {
    dispatch(logoutUserStart());
    try {
        const response = await customAxios.get("/user/logout");
        // console.log("logout user api response ", response);
        dispatch(logoutUserSuccess(response.data));
    } catch (error) {
        // console.log(error);
        dispatch(logoutUserFailure(error?.response?.data?.message || "Error ocurred while logout"));
    }
};

export { loginUserAction, forgetPasswordAction, resetPasswordAction, logoutUserAction };
