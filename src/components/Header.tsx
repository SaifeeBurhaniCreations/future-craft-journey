
import React from 'react';
import { RocketIcon, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-pathcraft-purple/20 px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <div className="flex items-center gap-2">
              <RocketIcon className="h-6 w-6 text-pathcraft-purple" />
              <span className="font-bold text-xl">PathCraft</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <a href="#features" className="text-foreground/80 hover:text-pathcraft-purple transition-colors">Features</a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-pathcraft-purple transition-colors">How It Works</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-pathcraft-purple transition-colors">Testimonials</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" className="hidden md:flex">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-pathcraft-purple hover:bg-pathcraft-purple/90 text-white">Get Started</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
