"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const OurMomentsPage: React.FC = () => {
  const router = useRouter();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  // Removed isFading state for debugging purposes
  // const [isFading, setIsFading] = useState(false);

  // Define photos array here, before it's used in useEffect
  const photos = [
    '/IMG_20240131_201839.jpg',
    '/IMG-20240208-WA0001.jpg',
    '/20230819220337955.jpg',
    ,
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Shorter interval for quicker debugging

    return () => clearInterval(interval);
  }, [photos.length]);

  const handleContinue = () => {
    router.push('/ask-valentine');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-valentine-gradient-start to-valentine-gradient-end p-6 flex flex-col items-center justify-center text-valentine-text">
      <div className="max-w-md w-full">
        <h1 className="text-3xl sm:text-4xl font-light mb-12 text-center font-[family-name:var(--font-geist-sans)]">
          Before I ask you something…
        </h1>

        <div className="relative mb-12">
          <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-lg border-4 border-blue-500"> {/* Added border for visibility */}
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Our moment ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover ${ // Removed transition and isFading logic
                  index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center space-y-6 mb-12">
          <p className="text-lg sm:text-xl font-light italic font-[family-name:var(--font-geist-sans)]">
            From random conversations…
          </p>
          <p className="text-lg sm:text-xl font-light italic font-[family-name:var(--font-geist-sans)]">
            To moments that quietly became everything.
          </p>
        </div>

        <Button
          onClick={handleContinue}
          className="w-full sm:w-64 mx-auto rounded-full bg-valentine-button text-valentine-button-foreground text-lg font-medium shadow-md hover:scale-105 transition-transform duration-300 group"
        >
          Continue <Heart className="ml-2 w-5 h-5 group-hover:animate-pulse" />
        </Button>
      </div>
    </div>
  );
};

export default OurMomentsPage;