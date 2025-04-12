
import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  platform: string;
  rating: number;
  level: string;
  url: string;
}

const CourseCard = ({ title, platform, rating, level, url }: CourseCardProps) => {
  return (
    <div className="glass-card rounded-xl p-4 hover-scale shadow-glow">
      <div className="mb-2 flex justify-between items-start">
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-pathcraft-purple/10 text-pathcraft-purple">
          {platform}
        </span>
        
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{rating}/5</span>
        </div>
      </div>
      
      <h3 className="font-semibold mb-1">{title}</h3>
      
      <div className="flex justify-between items-center mt-3">
        <span className="text-xs text-foreground/70">{level}</span>
        <a 
          href={url}
          className="text-pathcraft-purple hover:text-pathcraft-purple-dark flex items-center gap-1 text-sm"
        >
          <span>View Course</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
