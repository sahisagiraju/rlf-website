import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
        secondary: "border-transparent text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500",
        outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500",
        accent: "border-transparent text-white bg-orange-500 hover:bg-orange-600 focus:ring-orange-500",
    };

    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={styles} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={styles} {...props}>
            {children}
        </button>
    );
};

export default Button;
