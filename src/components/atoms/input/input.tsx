import React from 'react';

interface IInputProps {
    type: string;
    className?: string;
    placeHolder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean | undefined;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void; 
}

const Input: React.FC<IInputProps> = ({
    type = '',
    className = '',
    placeHolder = '',
    value = '',
    onChange,
    required,
    onKeyDown
}) => {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            required={required}
            onKeyDown={onKeyDown} 
        />
    );
};

export default Input;
