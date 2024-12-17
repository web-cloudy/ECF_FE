import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/* eslint-disable @typescript-eslint/no-explicit-any */

// Define the staff state type
interface StaffState {
    staffList: Array<any>;
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: StaffState = {
    staffList: [],
    loading: false,
    error: null,
};

// Create a slice for staff management
const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        // Fetch staff actions
        fetchStaffStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchStaffSuccess(state, action: PayloadAction<Array<any>>) {
            state.staffList = action.payload;
            state.loading = false;
        },
        fetchStaffFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },

        // Add staff actions
        addStaffStart(state) {
            state.loading = true;
            state.error = null;
        },
        addStaffSuccess(state, action: PayloadAction<any>) {
            state.staffList.push(action.payload); // Add the new staff member to the list
            state.loading = false;
        },
        addStaffFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

// Export the actions
export const { 
    fetchStaffStart, 
    fetchStaffSuccess, 
    fetchStaffFailure,
    addStaffStart,
    addStaffSuccess,
    addStaffFailure 
} = staffSlice.actions;

export default staffSlice.reducer;