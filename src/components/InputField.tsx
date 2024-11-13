import React from 'react';

interface InputFieldProps {
  type: string;
  id: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  value,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default InputField;
