"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface Heart3DProps {
  size?: string; // e.g., '30px'
  rotationSpeed?: string; // e.g., '10s'
  className?: string; // For additional positioning/animation from parent
}

const Heart3D: React.FC<Heart3DProps> = ({ size = '30px', rotationSpeed = '10s', className }) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        className
      )}
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className="heart-shape w-full h-full relative animate-spin-3d"
        style={{
          '--rotation-speed': rotationSpeed,
        } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default Heart3D;