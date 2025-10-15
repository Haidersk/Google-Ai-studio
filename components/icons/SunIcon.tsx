import React from 'react';

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM12 21a1 1 0 01-1-1V18a1 1 0 112 0v2a1 1 0 01-1 1zM4.22 5.64a1 1 0 010-1.42l1.42-1.41a1 1 0 011.41 1.41L5.64 5.64a1 1 0 01-1.42 0zM18.36 19.78a1 1 0 01-1.41-1.41l1.41-1.42a1 1 0 111.42 1.42l-1.42 1.41zM21 12a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM3 12a1 1 0 011-1h2a1 1 0 110 2H4a1 1 0 01-1-1zM19.78 5.64a1 1 0 01-1.42 0L16.95 4.22a1 1 0 111.41-1.41l1.42 1.41a1 1 0 010 1.42zM5.64 19.78a1 1 0 01-1.41 0L2.82 18.36a1 1 0 111.41-1.41l1.42 1.41a1 1 0 010 1.42zM12 5a1 1 0 011-1V2a1 1 0 11-2 0v2a1 1 0 011 1z"
      clipRule="evenodd"
    />
  </svg>
);