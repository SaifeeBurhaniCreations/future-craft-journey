
import React from 'react';
import { RocketIcon, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <RocketIcon className="h-5 w-5 text-pathcraft-purple" />
              <span className="font-bold text-lg">PathCraft</span>
            </div>
            <p className="text-sm text-foreground/70">
              Personalized career roadmaps powered by AI. Plan your path to success.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-pathcraft-purple">Features</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-pathcraft-purple">Pricing</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-pathcraft-purple">Testimonials</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-pathcraft-purple">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-pathcraft-purple">About</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-pathcraft-purple">Blog</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-pathcraft-purple">Careers</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-pathcraft-purple">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-pathcraft-purple">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-pathcraft-purple">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-pathcraft-purple">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-sm text-foreground/60">
            © 2025 PathCraft. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-foreground/60 hover:text-pathcraft-purple">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-pathcraft-purple">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-pathcraft-purple">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
