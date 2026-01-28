"use client";

import React, { useEffect, useState } from 'react';
import { Flower } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FallingFlowersProps {
  count?: number;
}

const FallingFlowers: React.FC<FallingFlowersProps> = ({ count = 20 }) => {
  const [flowers, setFlowers] = useState<
    { id: number; left: string; delay: string; duration: string; size: string; color: string }[]
  >([]);

  const flowerColors = [
    'text-pink-300', // Light pink
    'text-rose-300', // Rosy pink
    'text-purple-300', // Light purple
    'text-red-300', // Light red
  ];

  useEffect(() => {
    const newFlowers = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`, // Random delay up to 8 seconds
      duration: `${8 + Math.random() * 7}s`, // Random duration between 8 and 15 seconds
      size: `${16 + Math.random() * 24}px`, // Random size between 16px and 40px
      color: flowerColors[Math.floor(Math.random() * flowerColors.length)],
    }));
    setFlowers(newFlowers);
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {flowers.map((flower) => (
        <Flower
          key={flower.id}
          className={cn(
            "absolute opacity-70 animate-fall-flower",
            flower.color
          )}
          style={{
            left: flower.left,
            animationDelay: flower.delay,
            animationDuration: flower.duration,
            width: flower.size,
            height: flower.size,
            top: '-50px', // Start slightly above the viewport
          }}
        />
      ))}
    </div>
  );
};

export default FallingFlowers;