import { customAxios } from "../../utils/customAxios";
import {
    getAllNotificationsFailure,
    getAllNotificationsStart,
    getAllNotificationsSuccess,
    readNotificationFailure,
    readNotificationStart,
    readNotificationSuccess,
} from "../slices/notification.slice";

// get all notifications
// --------------------
const getAllNotificationsAction = () => async (dispatch) => {
    dispatch(getAllNotificationsStart());
    try {
        const response = await customAxios.get("/notification/all");
        console.log("get all notifications api response ", response);
        dispatch(getAllNotificationsSuccess(response.data));
    } catch (error) {
        console.log("get all notifications api error ", error);
        dispatch(
            getAllNotificationsFailure(error?.response?.data?.message || "Error while fetching notifications")
        );
    }
};

// read a notification
// -------------------
const readNotificationAction = (notificationId) => async (dispatch) => {
    try {
        dispatch(readNotificationStart());
        const response = await customAxios.patch(`/notification/read/${notificationId}`);
        console.log("read notification api response ", response);
        dispatch(readNotificationSuccess(response.data));
    } catch (error) {
        console.log("read notification api error ", error);
        dispatch(
            readNotificationFailure(error?.response?.data?.message || "Error while reading notification")
        );
    }
};

export { getAllNotificationsAction, readNotificationAction };
