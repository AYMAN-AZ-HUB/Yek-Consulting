import React from 'react';

export function Input({ className = "", ...props }) {
    return <input className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-sm ${className}`} {...props} />;
}
