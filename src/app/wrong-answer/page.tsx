import React from 'react';
import Link from 'next/link';

const WrongAnswerPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-400 to-red-600 text-white p-6 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold mb-8 font-[family-name:var(--font-geist-sans)]">
        Wrong Answer! 😠
      </h1>
      <p className="text-lg sm:text-xl mb-8 font-[family-name:var(--font-geist-sans)]">
        You know there's only one right answer!
      </p>
      <Link href="/ask-valentine" className="text-white hover:underline text-lg">
        Try again?
      </Link>
    </div>
  );
};

export default WrongAnswerPage;