import React, { useState, useCallback, useEffect } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, message }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false); // Reset for next open
    }, 300); // Corresponds to fadeOut animation duration
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex justify-center items-center p-4 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div
        className={`relative bg-white dark:bg-gray-800 w-full max-w-md rounded-2xl shadow-2xl mx-4 p-8 text-center ${isClosing ? '' : 'animate-scaleIn'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="demo-modal-title" className="text-xl font-bold text-gray-900 dark:text-white mb-3">Demonstration Feature</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
        <button
          onClick={handleClose}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-2.5 px-8 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-800"
          aria-label="Close dialog"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default DemoModal;