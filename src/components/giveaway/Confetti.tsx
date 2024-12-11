import React from 'react';

interface ConfettiProps {
  count?: number;
}

export const Confetti: React.FC<ConfettiProps> = ({ count = 50 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 opacity-20 animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            backgroundColor: ['#FF3A2F', '#FF6B5D', '#FFD700'][Math.floor(Math.random() * 3)],
          }}
        />
      ))}
    </div>
  );
};