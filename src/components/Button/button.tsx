import React, { useState } from 'react';

type ButtonProps = {
    children: React.ReactNode;
    isLoading?: boolean;
    color?: 'red' | 'green';
};

const Button = ({ children, isLoading, color = 'green' }: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const buttonColor = isLoading ? color : (isHovered ? 'blue' : color);

    return (
        <button
            style={{ backgroundColor: buttonColor }}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {isLoading ? 'Carregando...' : children}
        </button>
    );
};

export default Button;
