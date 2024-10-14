import React from 'react';

const Button = ({ onClick, children, variant = 'default', ariaLabel }) => {
    const baseStyles =
        'px-4 py-2 rounded-md font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors';

    const variantStyles = {
        default: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400',
        outline:
            'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]}`}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default Button;
