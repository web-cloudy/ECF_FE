import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';


import InputField from '../components/InputField';


const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleEmailSubmit = async () => {
        // try {
        //     const response = await axios.post('http://localhost:4000/api/auth/login/email', { email });

        //     if (response.status === 200) {
        //         router.push({
        //             pathname: '/Password',
        //             query: { email },
        //         });
        //     }
        // } catch (error: any) {
        //     setMessage(error.response?.data?.message || 'Email verification failed');
        // }
        if(!email) {
            setMessage('Please enter a valid email address');
            return;
        }
        router.push({
            pathname: '/Password',
            query: {email},
        })
    }

    return (
        <div className="flex h-screen">
            <div className="hidden md:flex flex-1 login-background"></div>
            <div className="flex flex-1 flex-col bg-white pt-9 pr-10 md:w-1/2">
                <div className="w-full h-screen">
                    <div className="flex justify-end">
                        <img src="/images/logo.svg" alt="Express Capital Financing Logo" className="h-12" />
                    </div>
                    <div className="max-w-md w-full mx-auto mt-40 flex flex-col justify-center px-10 sm:px-0">
                        <h1 className="font-inter font-extra-bold text-4xl sm:text-5xl leading-[45px] sm:leading-66 tracking--4 text-primary">Welcome to Express Capital Financing</h1>
                        <div className="pt-10 mb-[38px]">
                            <InputField
                                type="email"
                                id="email"
                                placeholder="Enter email"
                                className="w-full py-2 font-inter font-semibold text-[24px] leading-[32px] border-b border-[#121212] focus:outline-none placeholder-secondary text-primary"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        {message && (
                            <div className="text-red-500 text-sm mb-4">{message}</div>
                        )}
                        <button className="w-full sm:w-2/3 bg-buttonprimary font-inter font-semibold text-[16px] leading-[24px] text-white py-[16px] rounded-full hover:bg-green-700 transition"
                            onClick={handleEmailSubmit}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
