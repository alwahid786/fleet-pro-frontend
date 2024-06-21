import { customAxios, customFormAxios } from "../../utils/customAxios";
import {
    addTruckFailure,
    addTruckStart,
    addTruckSuccess,
    deleteTruckFailure,
    deleteTruckStart,
    deleteTruckSuccess,
    getAllTrucksFailure,
    getAllTrucksStart,
    getAllTrucksSuccess,
    updateTruckFailure,
    updateTruckStart,
    updateTruckSuccess,
} from "../slices/truck.slice";

// add truck
// -----------
const addTruckAction = (formData) => async (dispatch) => {
    dispatch(addTruckStart());
    try {
        const response = await customFormAxios.post("/truck/create", formData);
        console.log("truck create api response ", response);
        dispatch(addTruckSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(addTruckFailure(error?.response?.data?.message || "Error ocurred while creating truck"));
    }
};

// update truck
// ------------
const updateTruckAction = (truckId, formData) => async (dispatch) => {
    dispatch(updateTruckStart());
    try {
        const response = await customFormAxios.put(`/truck/single/${truckId}`, formData);
        console.log("truck update api response ", response);
        dispatch(updateTruckSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(updateTruckFailure(error?.response?.data?.message || "Error ocurred while updating truck"));
    }
};

// delete truck
// ------------
const deleteTruckAction = (truckId) => async (dispatch) => {
    dispatch(deleteTruckStart());
    try {
        const response = await customAxios.delete(`/truck/single/${truckId}`);
        console.log("truck delete api response ", response);
        dispatch(deleteTruckSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(deleteTruckFailure(error?.response?.data?.message || "Error ocurred while deleting truck"));
    }
};

// get all trucks
// --------------
const getAllTrucksAction = () => async (dispatch) => {
    dispatch(getAllTrucksStart());
    try {
        const response = await customAxios.get("/truck/all");
        console.log("truck get all api response ", response);
        dispatch(getAllTrucksSuccess(response.data));
    } catch (error) {
        console.log(error);
        dispatch(
            getAllTrucksFailure(error?.response?.data?.message || "Error ocurred while getting all trucks")
        );
    }
};

export { addTruckAction, updateTruckAction, deleteTruckAction, getAllTrucksAction };
