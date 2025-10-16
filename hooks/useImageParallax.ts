import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook to apply a subtle parallax effect to an image as it's scrolled into view.
 * @param speed - The multiplier for the parallax effect. Lower is slower.
 * @param strength - The maximum pixel distance the image can move.
 * @returns A ref for the container and a style object for the image.
 */
export const useImageParallax = (speed = 0.1, strength = 20) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the element is roughly in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distance = elementCenter - viewportCenter;
        
        // Calculate parallax movement, moving opposite to scroll direction
        let parallaxY = -distance * speed;

        // Clamp the movement to the strength value
        parallaxY = Math.max(-strength, Math.min(strength, parallaxY));

        setStyle({
          transform: `scale(1.15) translateY(${parallaxY.toFixed(2)}px)`,
          transition: 'transform 0.1s linear', // Smooth out the transform changes
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, strength]);

  return { ref: containerRef, style };
};
