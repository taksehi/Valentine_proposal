import React from 'react';

const AskValentinePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-valentine-background text-valentine-text p-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-geist-sans)]">
        Will you be my Valentine?
      </h1>
    </div>
  );
};

export default AskValentinePage;