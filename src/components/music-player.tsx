"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Initialize audio element
    if (!audioRef.current) {
      audioRef.current = new Audio('/romantic-music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // Low volume
    }

    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.log("Audio play failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="sm"
        className="rounded-full px-4 py-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
      >
        {isPlaying ? '⏸ Pause' : '🎵 Play Music'}
      </Button>
    </div>
  );
};

export default MusicPlayer;