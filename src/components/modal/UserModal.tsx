import React from 'react';

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 relative">
                <button
                    className="absolute top-2 right-2 text-[24px] leading-[32px] text-[#121212]"
                    onClick={onClose}
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}

export default UserModal;
