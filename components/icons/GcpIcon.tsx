import React from 'react';

export const GcpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 16.2A4.5 4.5 0 0 0 22 12a4.5 4.5 0 0 0-4-4.2h-1.4A8 8 0 1 0 6 16.2"/>
        <circle cx="12.5" cy="14.5" r="2.5"/>
        <path d="M12.5 11v1m0 5v1m-2.5-3.5l-.8.5m5.6 0l-.8-.5m-4.3-1l.8-.5m2.7 0l.8.5"/>
    </svg>
);
