
import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const JobSearch = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSearch = () => {
    if (!jobTitle.trim()) {
      toast({
        title: "Please enter a job title",
        description: "Enter your dream job to generate a career path",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      window.location.hash = 'roadmap';
      toast({
        title: "Career path generated!",
        description: `Your personalized path for ${jobTitle} is ready to explore`,
      });
    }, 1500);
  };
  
  return (
    <div className="max-w-lg mx-auto relative">
      <div className="glass-card flex items-center gap-2 p-2 rounded-full animate-pulse-glow">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 h-5 w-5" />
          <Input 
            type="text"
            placeholder="Enter your dream job title..."
            className="pl-10 bg-transparent border-none shadow-none focus-visible:ring-0"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <Button 
          onClick={handleSearch}
          className="rounded-full bg-pathcraft-purple hover:bg-pathcraft-purple-dark gap-2"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Path'}
          <Sparkles className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default JobSearch;
