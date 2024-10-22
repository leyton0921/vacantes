import React from 'react';

interface IInputProps {
    type: string;
    className?: string;
    placeHolder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input: React.FC<IInputProps> = ({
    type = '',
    className = '',
    placeHolder = '',
    value = '',
    onChange,

}) => {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
 
        />
    );
};

export default Input;
