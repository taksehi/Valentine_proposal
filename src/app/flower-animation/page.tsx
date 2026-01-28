"use client";

import React from 'react';
import Link from 'next/link';
import FloatingHearts from '@/components/floating-hearts';

const FlowerAnimationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-valentine-gradient-start to-valentine-gradient-end text-valentine-text p-6 text-center relative overflow-hidden">
      <FloatingHearts count={30} />

      <div className="relative z-10">
        <h1 className="text-5xl sm:text-7xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] animate-bounce">
          YAY!! I knew you'd say yes 💖🌸
        </h1>

        <div className="mb-8">
          <img
            src="https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif"
            alt="Beautiful blooming flowers animation"
            className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-lg shadow-2xl"
          />
        </div>

        <p className="text-xl sm:text-2xl mb-12 font-[family-name:var(--font-geist-sans)] max-w-2xl text-center mx-auto">
          You make my heart bloom with happiness! I'm so excited to celebrate this special day with you, my love. 💘✨
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-valentine-button text-valentine-button-foreground text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 group"
        >
          Back to start <span className="ml-2">💕</span>
        </Link>
      </div>
    </div>
  );
};

export default FlowerAnimationPage;