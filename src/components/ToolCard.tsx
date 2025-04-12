
import React from 'react';

interface ToolCardProps {
  name: string;
  category: string;
  url: string;
}

const ToolCard = ({ name, category, url }: ToolCardProps) => {
  return (
    <a 
      href={url}
      className="glass-card rounded-xl p-4 hover-scale flex flex-col justify-between h-full"
    >
      <h3 className="font-medium text-center">{name}</h3>
      <span className="text-xs text-center text-foreground/70 mt-2 block">{category}</span>
    </a>
  );
};

export default ToolCard;
