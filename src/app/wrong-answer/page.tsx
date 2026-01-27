import React from 'react';
import Link from 'next/link';

const WrongAnswerPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-400 to-red-600 text-white p-6 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold mb-8 font-[family-name:var(--font-geist-sans)]">
        Oops 😌
        <br />
        Wrong answer.
      </h1>
      <p className="text-lg sm:text-xl mb-8 font-[family-name:var(--font-geist-sans)]">
        You're stuck with me ❤️
      </p>
      <Link href="/ask-valentine" className="text-white hover:underline text-lg">
        Try Again 🔁
      </Link>
    </div>
  );
};

export default WrongAnswerPage;