import React from 'react';

interface FloatingPizzaProps {
  index: number;
}

export const FloatingPizza: React.FC<FloatingPizzaProps> = ({ index }) => {
  const randomPosition = {
    left: `${Math.random() * 80 + 10}%`,
    animationDelay: `${index * 0.5}s`,
    animationDuration: `${Math.random() * 3 + 4}s`,
  };

  return (
    <div
      className="absolute w-8 h-8 opacity-30 pointer-events-none"
      style={randomPosition}
    >
      <div className="animate-float">🍕</div>
    </div>
  );
};