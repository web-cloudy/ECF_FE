import { createAsyncThunk } from '@reduxjs/toolkit';
import {checkEmail} from '../../services/apis/server'; // Centralized axios instance
/* eslint-disable @typescript-eslint/no-explicit-any */

export const checkEmailExists = createAsyncThunk(
    'auth/checkEmailExists',
    async (email: string, { rejectWithValue }) => {
        try {
            const response = await checkEmail(email);
            return response.data; // Assume the API returns { exists: boolean }
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Failed to verify email');
        }
    }
);
