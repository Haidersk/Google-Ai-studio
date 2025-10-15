import React from 'react';

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 004.463-.945.75.75 0 01.981.981A10.503 10.503 0 0118 18c-5.798 0-10.5-4.702-10.5-10.5 0-1.562.34-3.045.945-4.463a.75.75 0 01.819-.162z"
      clipRule="evenodd"
    />
  </svg>
);