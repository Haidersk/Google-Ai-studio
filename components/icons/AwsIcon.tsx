import React from 'react';

export const AwsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 16.2A4.5 4.5 0 0 0 22 12a4.5 4.5 0 0 0-4-4.2h-1.4A8 8 0 1 0 6 16.2"/>
        <path d="M7 19h10"/>
        <path d="M7 16h10"/>
        <path d="M7 13h10"/>
    </svg>
);
