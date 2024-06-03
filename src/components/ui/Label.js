import React from 'react';

export function Label({ className = "", children, ...props }) {
    return <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`} {...props}>{children}</label>;
}
