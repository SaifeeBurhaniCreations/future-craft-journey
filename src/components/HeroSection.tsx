
import React from 'react';
import { ArrowRight } from 'lucide-react';
import JobSearch from './JobSearch';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pathcraft-purple/10 blur-3xl"></div>
      <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-pathcraft-pink/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Craft Your <span className="text-gradient">Dream Career</span> Path
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Tell us your dream job, and our AI will generate a personalized roadmap with courses, milestones, and tools to get you there.
          </p>
          
          <JobSearch />
          
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-foreground/60">
            <p>Popular searches:</p>
            <button className="hover:text-pathcraft-purple transition-colors">Data Scientist</button>
            <button className="hover:text-pathcraft-purple transition-colors">UX Designer</button>
            <button className="hover:text-pathcraft-purple transition-colors">Full-Stack Developer</button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="#how-it-works" 
            className="flex items-center gap-2 text-pathcraft-purple hover:text-pathcraft-purple-dark transition-colors"
          >
            <span>See how it works</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
