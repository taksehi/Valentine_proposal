"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Heart3D from './heart-3d'; // Import the new 3D heart component

interface FloatingHeartsProps {
  count?: number;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count = 15 }) => {
  const [hearts, setHearts] = useState<
    { id: number; left: string; delay: string; duration: string; size: string; rotationSpeed: string }[]
  >([]);

  useEffect(() => {
    const newHearts = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`, // Random delay up to 5 seconds
      duration: `${5 + Math.random() * 5}s`, // Random duration between 5 and 10 seconds
      size: `${20 + Math.random() * 30}px`, // Random size between 20px and 50px
      rotationSpeed: `${5 + Math.random() * 10}s`, // Random rotation speed for 3D effect
    }));
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <Heart3D
          key={heart.id}
          size={heart.size}
          rotationSpeed={heart.rotationSpeed}
          className={cn(
            "absolute opacity-70 animate-float-heart"
          )}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            bottom: '-50px', // Start slightly below the viewport
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;