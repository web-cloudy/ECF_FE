import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { AxiosError } from 'axios';
import Image from 'next/image';
import InputField from '../components/InputField';
import { login } from '@/services/apis/server';
import { loginSuccess } from '@/store/reducers/authReducer';

const Password: React.FC = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Retrieve the email from the query params when the component mounts
        if (router.query.email) {
            setEmail(router.query.email as string);
        }
    }, [router.query.email]);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handlePasswordSubmit = async () => {
        if (!password) {
            setMessage('Please enter your password');
            return;
        }
        try {
            const response = await login({email, password});
            dispatch(loginSuccess(response));
            if (response.user.token) {
                // If the login is successful, navigate to the Dashboard
                router.push('/user-management');
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                setMessage(error.response?.data?.message || 'Login failed');
            } else {
                setMessage('An unexpected error occurred');
            }
        }
        router.push('/user-management')
    };

    return (
        <div className="flex h-screen">
            <div className="hidden md:flex flex-1 passsword-background"></div>
            <div className="flex flex-1 flex-col bg-white pt-9 pr-10 md:w-1/2">
                <div className="w-full h-screen">
                    <div className="flex justify-end">
                        <Image
                            src="/images/logo.svg"               // Image source
                            alt="Express Capital Financing Logo" // Alt text for accessibility
                            className="h-12"                     // Tailwind class for height
                            width={48}                            // Width in pixels (equivalent to Tailwind's h-12)
                            height={48}                           // Height in pixels (equivalent to Tailwind's h-12)
                        />
                    </div>
                    <div className="max-w-md w-full mx-auto mt-40 flex flex-col justify-center px-10 sm:px-0">
                        <h1 className="font-inter font-extra-bold text-4xl sm:text-5xl leading-[45px] sm:leading-66 tracking--4 text-primary">Password</h1>
                        <div className="pt-10 mb-[38px]">
                            <InputField
                                type="password"
                                id="password"
                                placeholder="Enter password"
                                className="w-full py-2 font-inter font-semibold text-[24px] leading-[32px] border-b border-[#121212] focus:outline-none placeholder-secondary text-primary"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        {message && (
                            <div className="text-red-500 text-sm mb-4">{message}</div>
                        )}
                        <button className="w-full sm:w-2/3 bg-buttonprimary font-inter font-semibold text-[16px] leading-[24px] text-white py-[16px] rounded-full hover:bg-green-700 transition"
                                onClick={handlePasswordSubmit}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Password;
