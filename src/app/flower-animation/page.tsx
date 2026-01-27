import React from 'react';
import Link from 'next/link';

const FlowerAnimationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-valentine-gradient-start to-valentine-gradient-end text-valentine-text p-6 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold mb-8 font-[family-name:var(--font-geist-sans)]">
        Yay! You said Yes! 🎉
      </h1>
      <p className="text-lg sm:text-xl mb-8 font-[family-name:var(--font-geist-sans)]">
        (Imagine beautiful flowers blooming here!)
      </p>
      <Link href="/" className="text-valentine-button hover:underline text-lg">
        Back to start
      </Link>
    </div>
  );
};

export default FlowerAnimationPage;