import React from 'react';

export const AzureIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 16.2A4.5 4.5 0 0 0 22 12a4.5 4.5 0 0 0-4-4.2h-1.4A8 8 0 1 0 6 16.2"/>
        <rect x="8" y="12" width="4" height="4" />
        <rect x="13" y="12" width="4" height="4" />
    </svg>
);
