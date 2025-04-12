import React from 'react';
import { useState } from 'react';
import { LucideIcon, CheckCircle, BookOpen, Trophy, ArrowRight, Calendar, MapPin, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ProgressBar from '@/components/ProgressBar';
import { Card, CardContent } from '@/components/ui/card';

interface RoadmapItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  progress: number;
  isCompleted: boolean;
}

const RoadmapView = () => {
  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([
    {
      id: 1,
      title: 'Fundamentals of Web Development',
      description: 'Learn the basic building blocks of the web.',
      icon: BookOpen,
      category: 'Web Development',
      progress: 75,
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      description: 'Dive deep into JavaScript and its advanced features.',
      icon: Wrench,
      category: 'Web Development',
      progress: 30,
      isCompleted: false,
    },
    {
      id: 3,
      title: 'React.js Mastery',
      description: 'Become a React.js expert.',
      icon: Trophy,
      category: 'Web Development',
      progress: 0,
      isCompleted: false,
    },
  ]);

  return (
    <section id="roadmap" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Your Learning Roadmap</h2>
        <div className="space-y-6">
          {roadmap.map((item) => (
            <Card key={item.id} className="glass-card border-pathcraft-purple/20">
              <CardContent className="relative flex items-center space-x-4 p-6">
                <item.icon className="h-8 w-8 text-pathcraft-purple" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <Badge className="bg-secondary border-0 text-secondary-foreground">{item.category}</Badge>
                    <ProgressBar progress={item.progress} />
                  </div>
                </div>
                {item.isCompleted && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapView;
