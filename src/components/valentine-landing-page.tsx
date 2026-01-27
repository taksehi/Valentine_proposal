"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ValentineLandingPage: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/ask-valentine');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center text-valentine-text relative z-10">
      <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight font-[family-name:var(--font-geist-sans)]">
        Hey my love <span className="text-valentine-button">❤️</span>
        <br />
        I made this just for you.
      </h1>

      <p className="text-lg sm:text-xl mb-8 max-w-md font-[family-name:var(--font-geist-sans)]">
        You're the sweetest,
        <br />
        the kindest,
        <br />
        and simply the best.
      </p>

      <Button
        onClick={handleButtonClick}
        className="relative w-40 h-40 rounded-full bg-valentine-button text-valentine-button-foreground text-2xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center group"
      >
        Click Me <Heart className="ml-2 w-6 h-6 group-hover:animate-pulse" />
      </Button>
    </div>
  );
};

export default ValentineLandingPage;