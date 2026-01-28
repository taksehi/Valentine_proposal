"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const OurMomentsPage: React.FC = () => {
  const router = useRouter();

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
          <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-lg border-4 border-blue-500">
            <video
              src="/our-moments-video.mp4" // Replace with your video file path
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
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