import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-blue-950 text-white hover:bg-blue-900 border border-transparent',
    secondary: 'bg-amber-500 text-white hover:bg-amber-600 border border-transparent',
    outline: 'bg-transparent border border-blue-950 text-blue-950 hover:bg-blue-50',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;