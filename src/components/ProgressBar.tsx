
import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="glass-card p-1 rounded-full shadow-glow">
      <div 
        className="h-4 rounded-full path-gradient relative overflow-hidden transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
