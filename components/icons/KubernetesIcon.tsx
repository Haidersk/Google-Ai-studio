import React from 'react';

export const KubernetesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="8"></circle>
        <circle cx="12" cy="12" r="2"></circle>
        <path d="M12 4V2m0 20v-2m8-10h2m-20 0h2m5.64 5.64l1.41 1.41m-9.9-9.9l1.41 1.41m8.49-1.41l-1.41 1.41m9.9 9.9l-1.41-1.41"></path>
    </svg>
);
