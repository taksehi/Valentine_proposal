"use client";

import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingHeartsProps {
  count?: number;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count = 15 }) => {
  const [hearts, setHearts] = useState<
    { id: number; left: string; delay: string; duration: string; size: string }[]
  >([]);

  useEffect(() => {
    const newHearts = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`, // Random delay up to 5 seconds
      duration: `${5 + Math.random() * 5}s`, // Random duration between 5 and 10 seconds
      size: `${20 + Math.random() * 30}px`, // Random size between 20px and 50px
    }));
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className={cn(
            "absolute text-valentine-button opacity-70 animate-float-heart"
          )}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            width: heart.size,
            height: heart.size,
            bottom: '-50px', // Start slightly below the viewport
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;