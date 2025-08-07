"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  platform?: 'enterprises' | 'care' | 'mart' | 'learn' | 'studios';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  platform = 'enterprises',
  className = '',
  onClick,
  disabled = false
}) => {
  const platformColors = {
    enterprises: {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
      outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50'
    },
    care: {
      primary: 'bg-green-600 hover:bg-green-700 text-white',
      secondary: 'bg-green-100 hover:bg-green-200 text-green-700',
      outline: 'border border-green-600 text-green-600 hover:bg-green-50'
    },
    mart: {
      primary: 'bg-purple-600 hover:bg-purple-700 text-white',
      secondary: 'bg-purple-100 hover:bg-purple-200 text-purple-700',
      outline: 'border border-purple-600 text-purple-600 hover:bg-purple-50'
    },
    learn: {
      primary: 'bg-orange-600 hover:bg-orange-700 text-white',
      secondary: 'bg-orange-100 hover:bg-orange-200 text-orange-700',
      outline: 'border border-orange-600 text-orange-600 hover:bg-orange-50'
    },
    studios: {
      primary: 'bg-pink-600 hover:bg-pink-700 text-white',
      secondary: 'bg-pink-100 hover:bg-pink-200 text-pink-700',
      outline: 'border border-pink-600 text-pink-600 hover:bg-pink-50'
    }
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const baseClasses = 'font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const colorClasses = platformColors[platform][variant];
  const sizeClasses = sizes[size];
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseClasses} ${colorClasses} ${sizeClasses} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
