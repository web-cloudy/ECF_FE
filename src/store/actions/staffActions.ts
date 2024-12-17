import { AppDispatch } from '../store';
import {
    fetchStaffStart, fetchStaffSuccess, fetchStaffFailure, addStaffStart, addStaffSuccess,
    addStaffFailure
} from '../reducers/staffReducer';
import { fetchStaff, addStaff } from '../../services/apis/server';
/* eslint-disable @typescript-eslint/no-explicit-any */

export const getStaffList = () => async (dispatch: AppDispatch) => {
    dispatch(fetchStaffStart());
    try {
        const staffList = await fetchStaff(); // Fetch staff from the API
        dispatch(fetchStaffSuccess(staffList));
    } catch (error: any) {
        dispatch(fetchStaffFailure(error.message));
    }
};

// Action for adding a new staff member
export const addNewStaff = (staffData: any) => async (dispatch: AppDispatch) => {
    dispatch(addStaffStart()); // Dispatch to indicate adding staff is starting
    try {
        const newStaff = await addStaff(staffData); // Call your API to add staff
        dispatch(addStaffSuccess(newStaff)); // Dispatch success with the new staff data
        dispatch(getStaffList());
    } catch (error: any) {
        dispatch(addStaffFailure(error.message)); // Dispatch failure if an error occurs
    }
};