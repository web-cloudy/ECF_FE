import Api from '../api';
import { FETCH_STAFF, CHECK_EMAIL, ADD_STAFF, LOGIN } from '../endPoints';
/* eslint-disable @typescript-eslint/no-explicit-any */

export const fetchStaff = async ()=> {
    try {
        const response = await Api.get(FETCH_STAFF);
        return response.data;
    } catch (error) {
        console.error("Error fetching staff:", error);
        throw error;
    }
};

// Add a new staff member
export const addStaff = async (staffData: any) => {
    try {
        const response = await Api.post(ADD_STAFF, staffData); // Send staff data to the server
        return response.data;
    } catch (error) {
        console.error("Error adding staff:", error);
        throw error;
    }
};

// Check if email is already in use
export const checkEmail = async (email: string) => {
    try {
        const response = await Api.get(`${CHECK_EMAIL}?email=${email}`);
        return response.data;
    } catch (error) {
        console.error("Error checking email:", error);
        throw error;
    }
};

export const login = async (data: any) => {
    try {
        const response = await Api.post(LOGIN, data);
        return response;
    } catch (error) {
        console.error("Error checking user:", error);
        throw error;
    }
};