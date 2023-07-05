// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({children, className=""}) => {
    return (
        <button className={`w-[170px] h-[50px] rounded-[100px] bg-gradientgreencolor2 border-2 border-gradientgreencolor2 transition ease duration-300 text-background-blueblack font-normal btnEffect flex justify-center items-center ${className || ''}`}>
            {children}
        </button>
    );
};

export default Button;