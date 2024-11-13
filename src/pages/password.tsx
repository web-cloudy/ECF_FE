import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import InputField from '../components/InputField'

const Password: React.FC = () => {
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
            // Make a POST request to validate the email and password
            router.push('/Dashboard');
            const response = await axios.post('http://localhost:4000/api/auth/login', { email, password });

            if (response.status === 200) {
                // If the login is successful, navigate to the Dashboard
                router.push('/Dashboard');
            }
        } catch (error: any) {
            setMessage(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="flex h-screen">
            <div className="hidden md:flex flex-1 passsword-background"></div>
            <div className="flex flex-1 flex-col bg-white pt-9 pr-10 md:w-1/2">
                <div className="w-full h-screen">
                    <div className="flex justify-end">
                        <img src="/images/logo.svg" alt="Express Capital Financing Logo" className="h-12" />
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
