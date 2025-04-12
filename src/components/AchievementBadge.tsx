
import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: string;
}

const AchievementBadge = ({ title, description, icon }: AchievementBadgeProps) => {
  const renderIcon = () => {
    switch (icon) {
      case 'Award':
        return <Award className="h-5 w-5" />;
      case 'Trophy':
        return <Trophy className="h-5 w-5" />;
      case 'Star':
        return <Star className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full shadow-glow flex items-center justify-center bg-gradient-to-br from-pathcraft-purple to-pathcraft-pink text-white badge-shine mb-2 animate-float">
        {renderIcon()}
      </div>
      <h4 className="text-xs font-medium">{title}</h4>
      <p className="text-xs text-foreground/60 mt-1">{description}</p>
    </div>
  );
};

export default AchievementBadge;
