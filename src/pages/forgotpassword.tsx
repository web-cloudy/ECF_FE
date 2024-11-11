import React, {useState } from 'react';
import InputField from '../components/InputField'

const ForgotPassword: React.FC = () => {
    const [emailCode, setEmaileCode] = useState('');
    const handleEmailCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmaileCode(e.target.value);
      };

    return (
        <div className="flex h-screen">
            <div className="hidden md:flex flex-1 forgotpasssword-background"></div>
            <div className="flex flex-1 flex-col bg-white pt-9 pr-10 md:w-1/2">
                <div className="w-full h-screen">
                    <div className="flex justify-end">
                        <img src="/images/logo.svg" alt="Express Capital Financing Logo" className="h-12" />
                    </div>
                    <div className="max-w-md w-full mx-auto mt-40 flex flex-col justify-center px-10 sm:px-0">
                        <h1 className="font-inter font-extra-bold text-4xl sm:text-5xl leading-[45px] sm:leading-66 tracking--4 text-primary">Forgot Password</h1>
                        <div className="pt-10 mb-[38px]">
                            <InputField
                                type="text"
                                id="email"
                                placeholder="Enter the code sent to email"
                                className="w-full py-2 font-inter font-semibold text-[24px] leading-[32px] border-b border-[#121212] focus:outline-none focus:border-green-500 placeholder-secondary text-primary"
                                value={emailCode}
                                onChange={handleEmailCodeChange}
                            />
                        </div>

                        <button className="w-full sm:w-2/3 bg-buttonprimary font-inter font-semibold text-[16px] leading-[24px] text-white py-[16px] rounded-full hover:bg-green-700 transition">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
