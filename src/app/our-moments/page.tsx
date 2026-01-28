"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const OurMomentsPage: React.FC = () => {
  const router = useRouter();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Sample photo URLs - replace with your actual photos
  const photos = [
    'src/app/our-moments/IMG-20240208-WA0001.jpg',
    'src/app/our-moments/IMG_20240131_201839.jpg',
    'src/app/our-moments/20230819220337955.jpg',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  ];

  // Auto-advance slideshow with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsFading(false);
      }, 1000); // Fade duration
    }, 5000); // 5 seconds per photo

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
          <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-lg">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Our moment ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
                } ${isFading ? 'opacity-0' : ''}`}
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