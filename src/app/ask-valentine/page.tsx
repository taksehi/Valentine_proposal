"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import FloatingHearts from '@/components/floating-hearts';

const AskValentinePage: React.FC = () => {
  const router = useRouter();

  const handleYesClick = () => {
    router.push('/flower-animation');
  };

  const handleNoClick = () => {
    router.push('/wrong-answer');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center text-valentine-text
                    bg-gradient-to-br from-valentine-gradient-start to-valentine-gradient-end overflow-hidden">
      <FloatingHearts count={25} /> {/* More hearts for this special page */}

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
        onClick={handleNoClick}
        variant="ghost"
        className="absolute bottom-6 right-6 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
                   px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800
                   transition-colors duration-200 relative z-10"
      >
        No (over my dead body)
      </Button>
    </div>
  );
};

export default AskValentinePage;