"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import FloatingHearts from '@/components/floating-hearts';

const AskValentinePage: React.FC = () => {
  const router = useRouter();
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [noButtonPosition, setNoButtonPosition] = useState<{
    top: string | number;
    left: string | number;
    right: string | number;
    bottom: string | number;
  }>({
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
  });

  // Function to set a random position within bounds
  const setRandomPosition = () => {
    if (!noButtonRef.current || !containerRef.current) return;

    const buttonRect = noButtonRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    // Define padding based on p-6 (1.5rem = 24px)
    const paddingX = 24;
    const paddingY = 24;

    const usableWidth = containerRect.width - 2 * paddingX;
    const usableHeight = containerRect.height - 2 * paddingY;

    // Ensure button dimensions are not larger than usable area
    if (buttonRect.width > usableWidth || buttonRect.height > usableHeight) {
      // If the button is too large, we can't move it freely.
      // For now, we'll just log a warning.
      console.warn("No button is too large for the container's usable area.");
      return;
    }

    let newTop, newLeft;
    let attempts = 0;
    const maxAttempts = 50;

    do {
      newTop = paddingY + Math.random() * (usableHeight - buttonRect.height);
      newLeft = paddingX + Math.random() * (usableWidth - buttonRect.width);
      attempts++;
    } while (
      attempts < maxAttempts &&
      // Optional: ensure initial random position isn't too close to the center of the screen
      Math.sqrt(
        Math.pow((containerRect.width / 2) - (newLeft + buttonRect.width / 2), 2) +
        Math.pow((containerRect.height / 2) - (newTop + buttonRect.height / 2), 2)
      ) < 100 // Example check, adjust as needed
    );

    setNoButtonPosition({
      top: `${newTop}px`,
      left: `${newLeft}px`,
      right: 'auto',
      bottom: 'auto',
    });
  };

  useEffect(() => {
    // Set an initial random position when the component mounts
    setRandomPosition();
    // Also, re-position on window resize to stay within bounds
    const handleResize = () => setRandomPosition();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Run once on mount

  const handleYesClick = () => {
    router.push('/flower-animation');
  };

  const handleNoClick = () => {
    router.push('/wrong-answer');
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!noButtonRef.current || !containerRef.current) return;

    const buttonRect = noButtonRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate center of the button relative to the viewport
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const distance = Math.sqrt(
      Math.pow(mouseX - buttonCenterX, 2) + Math.pow(mouseY - buttonCenterY, 2)
    );

    const triggerDistance = 100; // Distance in pixels to trigger movement

    if (distance < triggerDistance) {
      // Define padding based on p-6 (1.5rem = 24px)
      const paddingX = 24;
      const paddingY = 24;

      const usableWidth = containerRect.width - 2 * paddingX;
      const usableHeight = containerRect.height - 2 * paddingY;

      if (buttonRect.width > usableWidth || buttonRect.height > usableHeight) {
        console.warn("No button is too large for the container's usable area during mouse move.");
        return;
      }

      let newTop, newLeft;
      let attempts = 0;
      const maxAttempts = 50; // Prevent infinite loops

      do {
        // Calculate new random position within container boundaries, respecting padding
        newTop = paddingY + Math.random() * (usableHeight - buttonRect.height);
        newLeft = paddingX + Math.random() * (usableWidth - buttonRect.width);
        attempts++;
      } while (
        attempts < maxAttempts &&
        // Ensure new position is not too close to the mouse
        Math.sqrt(
          Math.pow(mouseX - (containerRect.left + newLeft + buttonRect.width / 2), 2) +
          Math.pow(mouseY - (containerRect.top + newTop + buttonRect.height / 2), 2)
        ) < triggerDistance
      );

      setNoButtonPosition({
        top: `${newTop}px`,
        left: `${newLeft}px`,
        right: 'auto',
        bottom: 'auto',
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center text-valentine-text
                    bg-gradient-to-br from-valentine-gradient-start to-valentine-gradient-end overflow-hidden"
    >
      <FloatingHearts count={25} />

      <h1 className="text-5xl sm:text-7xl font-bold mb-12 leading-tight relative z-10 font-[family-name:var(--font-geist-sans)]">
        Will you be my Valentine? <span className="text-valentine-button">💘</span>
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 mb-8 relative z-10">
        <Button
          onClick={handleYesClick}
          className="w-48 h-20 sm:w-56 sm:h-24 rounded-full bg-valentine-button text-valentine-button-foreground text-3xl font-semibold shadow-xl
                     hover:scale-105 transition-transform duration-300 flex items-center justify-center group"
        >
          Yes <span className="ml-2 text-4xl">💕</span>
        </Button>
        <Button
          onClick={handleYesClick}
          className="w-48 h-20 sm:w-56 sm:h-24 rounded-full bg-valentine-button text-valentine-button-foreground text-3xl font-semibold shadow-xl
                     hover:scale-105 transition-transform duration-300 flex items-center justify-center group"
        >
          Yes <span className="ml-2 text-4xl">😍</span>
        </Button>
      </div>

      <Button
        ref={noButtonRef}
        onClick={handleNoClick}
        variant="ghost"
        className="absolute text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
                   px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800
                   transition-all duration-100 ease-out relative z-10"
        style={{
          top: noButtonPosition.top,
          left: noButtonPosition.left,
          right: noButtonPosition.right,
          bottom: noButtonPosition.bottom,
        }}
      >
        No (over my dead body)
      </Button>
    </div>
  );
};

export default AskValentinePage;