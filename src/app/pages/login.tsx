import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <div className="flex h-screen">
            <div className="hidden md:flex flex-1 custom-background"></div>
            <div className="flex flex-1 flex-col bg-white pt-9 pr-10 md:w-1/2">
                <div className="w-full h-screen">
                    <div className="flex justify-end">
                        <img src="/images/logo.svg" alt="Express Capital Financing Logo" className="h-12" />
                    </div>
                    <div className="max-w-md w-full mx-auto mt-40 flex flex-col justify-center">
                        <h1 className="font-inter font-extra-bold text-5xl leading-66 tracking--4 text-[#294C2B]">Welcome to Express Capital Financing</h1>
                        <div className="pt-10 mb-6">
                            <label className="block text-gray-700 mb-2" htmlFor="email">Enter email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                            />
                        </div>

                        <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                            Continu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
