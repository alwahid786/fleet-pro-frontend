import { customAxios, customFormAxios } from "../../utils/customAxios";
import {
    addDeviceFailure,
    addDeviceStart,
    addDeviceSuccess,
    deleteDeviceFailure,
    deleteDeviceStart,
    deleteDeviceSuccess,
    getAllDevicesFailure,
    getAllDevicesStart,
    getAllDevicesSuccess,
    updateDeviceFailure,
    updateDeviceStart,
    updateDeviceSuccess,
} from "../slices/device.slice";

// add device
// -----------
const addDevice = (formData) => async (dispatch) => {
    dispatch(addDeviceStart());
    try {
        const response = await customFormAxios.post("/device/create", formData);
        console.log("truck create api response ", response);
        dispatch(addDeviceSuccess(response.data));
    } catch (error) {
        console.log("add device api error", error);
        dispatch(addDeviceFailure(error?.response?.data?.message || "Error ocurred while creating truck"));
    }
};

// update device
// -------------
const updateDevice = (deviceId, formData) => async (dispatch) => {
    dispatch(updateDeviceStart());
    try {
        const response = await customFormAxios.put(`/device/single/${deviceId}`, formData);
        console.log("update device api response ", response);
        dispatch(updateDeviceSuccess(response.data));
    } catch (error) {
        console.log("update device api error", error);
        dispatch(
            updateDeviceFailure(error?.response?.data?.message || "Error ocurred while updating device")
        );
    }
};

// delete device
// -----------
const deleteDevice = (deviceId) => async (dispatch) => {
    dispatch(deleteDeviceStart());
    try {
        const response = await customAxios.delete(`/device/single/${deviceId}`);
        console.log("delete device api response ", response);
        dispatch(deleteDeviceSuccess(response.data));
    } catch (error) {
        console.log("delete device api error", error);
        dispatch(
            deleteDeviceFailure(error?.response?.data?.message || "Error ocurred while deleting device")
        );
    }
};

// get all devices
// -------------
const getAllDevices = () => async (dispatch) => {
    dispatch(getAllDevicesStart());
    try {
        const response = await customAxios.get("/device/all");
        console.log("get all devices api response ", response);
        dispatch(getAllDevicesSuccess(response.data));
    } catch (error) {
        console.log("get all devices api error", error);
        dispatch(
            getAllDevicesFailure(error?.response?.data?.message || "Error ocurred while getting all devices")
        );
    }
};

export { addDevice, updateDevice, deleteDevice, getAllDevices };
