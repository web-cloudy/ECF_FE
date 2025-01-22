import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { store } from '../store/store';
/* eslint-disable @typescript-eslint/no-explicit-any */
// Define types for parameters in the Api class methods
interface ApiParams {
    [key: string]: string | number | boolean | undefined;
}

interface ApiError {
    response?: {
        status: number;
        data: any;
    };
}

class Api {
    static get(route: string, data: any = {}, params: ApiParams = {}): Promise<any> {
        return this.xhr(route, data, params, 'get');
    }

    static put(route: string, data: any = {}, params: ApiParams = {}): Promise<any> {
        return this.xhr(route, data, params, 'put');
    }

    static post(route: string, data: any = {}, params: ApiParams = {}): Promise<any> {
        return this.xhr(route, data, params, 'post');
    }

    static delete(route: string, data: any = {}, params: ApiParams = {}): Promise<any> {
        return this.xhr(route, data, params, 'delete');
    }

    static replaceVariables(route: string, params: ApiParams): string {
        Object.keys(params).forEach((key) => {
            route = route.replace(`:${key}`, String(params[key]));
        });
        return route;
    }

    static wrapApiErrors(error: ApiError): void {
        try {
            const { status, data } = error.response || {};
            if (!status) {
                throw new Error('Connection with API server is broken');
            }
            if (status === 401) {
                const state = store.getState();
                const {
                    auth: { token }
                } = state;
                if (token) {
                    store.dispatch({ type: 'AUTH_LOGOUT' });
                    throw new Error('Unauthorized');
                }
            }
            const { message } = data;
            if (!message) {
                throw new Error(data);
            }

            if (typeof message === 'string') {
                throw new Error(message);
            }
            if (status === 400) {
                if (Array.isArray(message)) throw new Error(message[0]);
                const { problems = [] } = message;
                const mes: string = problems.reduce((str: string, problem: string) => `${str}\n${problem}`, '');
                throw new Error(mes);
            }
            throw new Error('Unknown error');
        } catch (e) {
            console.log('API error', e);
            // store.dispatch(onApplicationError(e)); // Uncomment if you have the onApplicationError action
            throw e;
        }
    }

    static xhr(route: string, data: any = {}, params: ApiParams = {}, method: string): Promise<any> {
        const state = store.getState();

        const sendRequest = (axiosInstance: AxiosInstance): Promise<any> => {
            const url = Api.replaceVariables(route, params);
            const headers: { [key: string]: string } = {
                'Content-Type': 'application/json'
            };

            if (state.auth.token) {
                headers.Authorization = `Bearer ${state.auth.token}`;
            }
            
            const options: AxiosRequestConfig = {
                baseURL: process.env.NEXT_PUBLIC_API_URL,
                url,
                method,
                headers,
                timeout: 15000
            };

            if (method === 'get') {
                options.params = data;
            } else {
                options.data = data;
            }

            return axiosInstance(options)
                .then((res: AxiosResponse) => res.data)
                .catch((err) => {
                    return Api.wrapApiErrors(err);
                });
        };

        return sendRequest(axios.create());
    }

    static uploadFiles(route: string, data: any, params: ApiParams, files: File[]): Promise<any> {
        const state = store.getState();

        const sendRequest = (axiosInstance: AxiosInstance): Promise<any> => {
            const url = Api.replaceVariables(route, params);
            const headers: { [key: string]: string } = {
                'Content-Type': 'multipart/form-data'
            };

            if (state.auth.token) {
                headers.Authorization = `Bearer ${state.auth.token}`;
            }

            const formData = new FormData();
            for (const file of files) {
                formData.append('file[]', file);
            }
           Object.keys(data).forEach((key) => formData.append(key, data[key]));

            const options: AxiosRequestConfig = {
                baseURL: process.env.NEXT_PUBLIC_API_URL,
                url,
                method: 'post',
                headers,
                timeout: 30000,
                data: formData
            };

            return axiosInstance(options)
                .then((res: AxiosResponse) => res.data)
                .catch((err) => {
                    return Api.wrapApiErrors(err);
                });
        };

        return sendRequest(axios.create());
    }

    static uploadFile(route: string, data: any, params: ApiParams, file: File): Promise<any> {
        const state = store.getState();

        const sendRequest = (axiosInstance: AxiosInstance): Promise<any> => {
            const url = Api.replaceVariables(route, params);
            const headers: { [key: string]: string } = {
                'Content-Type': 'multipart/form-data'
            };

            if (state.auth.token) {
                headers.Authorization = `Bearer ${state.auth.token}`;
            }

            const formData = new FormData();
            formData.append('file', file);
            Object.keys(data).forEach((key) => formData.append(key, data[key]));

            const options: AxiosRequestConfig = {
                baseURL: process.env.NEXT_PUBLIC_API_URL,
                url,
                method: 'put',
                headers,
                timeout: 30000,
                data: formData
            };

            return axiosInstance(options)
                .then((res: AxiosResponse) => res.data)
                .catch((err) => {
                    return Api.wrapApiErrors(err);
                });
        };

        return sendRequest(axios.create());
    }
}

export default Api;