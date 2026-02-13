import React from 'react'

export const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
    <button className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 text-sm font-semibold bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20 active:scale-95 transition-all duration-300 ${className}`} {...props} >
        {children}
    </button>
);

export const GhostButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
    <button className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold border-2 border-primary/20 dark:border-white/10 text-primary dark:text-gray-300 hover:bg-primary/5 dark:hover:bg-white/5 backdrop-blur-sm active:scale-95 transition-all duration-300 ${className}`} {...props} >
        {children}
    </button>
);