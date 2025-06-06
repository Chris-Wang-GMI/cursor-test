import React from 'react';
import { cn } from './lib/utils';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
      )}
    >
      {label}
    </button>
  );
};

export default Button;
