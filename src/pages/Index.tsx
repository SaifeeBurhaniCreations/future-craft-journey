
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RoadmapView from '@/components/RoadmapView';
import Footer from '@/components/Footer';
import { RocketIcon, Lightbulb, Clock, Users } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [jobTitle, setJobTitle] = useState("Full-Stack Developer");

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Features Section */}
        <section id="features" className="py-16 bg-foreground/5 relative overflow-hidden">
          <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-pathcraft-purple/5 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Why Choose PathCraft?</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Our platform offers unique features to guide your career journey from start to finish
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card rounded-xl p-6 hover-scale">
                <div className="h-12 w-12 rounded-full bg-pathcraft-purple/10 flex items-center justify-center mb-4 mx-auto">
                  <RocketIcon className="h-6 w-6 text-pathcraft-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Personalized Roadmaps</h3>
                <p className="text-foreground/70 text-center">
                  AI-generated career paths tailored to your specific goals and current skills
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6 hover-scale">
                <div className="h-12 w-12 rounded-full bg-pathcraft-purple/10 flex items-center justify-center mb-4 mx-auto">
                  <Lightbulb className="h-6 w-6 text-pathcraft-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Smart Recommendations</h3>
                <p className="text-foreground/70 text-center">
                  Relevant courses, tools, and resources recommended based on your career path
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6 hover-scale">
                <div className="h-12 w-12 rounded-full bg-pathcraft-purple/10 flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-6 w-6 text-pathcraft-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Progress Tracking</h3>
                <p className="text-foreground/70 text-center">
                  Track your journey with interactive milestones and achievement badges
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-pathcraft-pink/10 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">How PathCraft Works</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Creating your personalized career path is simple and interactive
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-10">
              <div className="text-center relative">
                <div className="h-16 w-16 rounded-full bg-pathcraft-purple shadow-glow flex items-center justify-center mb-4 mx-auto text-white font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Enter Your Dream Job</h3>
                <p className="text-sm text-foreground/70">
                  Tell us what position you want to achieve in your career
                </p>
                
                {/* Connector */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-pathcraft-purple/30 -z-10"></div>
              </div>
              
              <div className="text-center relative">
                <div className="h-16 w-16 rounded-full bg-pathcraft-purple shadow-glow flex items-center justify-center mb-4 mx-auto text-white font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Generates Your Path</h3>
                <p className="text-sm text-foreground/70">
                  Our AI creates a custom roadmap based on industry best practices
                </p>
                
                {/* Connector */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-pathcraft-purple/30 -z-10"></div>
              </div>
              
              <div className="text-center relative">
                <div className="h-16 w-16 rounded-full bg-pathcraft-purple shadow-glow flex items-center justify-center mb-4 mx-auto text-white font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Follow Your Roadmap</h3>
                <p className="text-sm text-foreground/70">
                  Complete courses and milestones at your own pace
                </p>
                
                {/* Connector */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-pathcraft-purple/30 -z-10"></div>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-pathcraft-purple shadow-glow flex items-center justify-center mb-4 mx-auto text-white font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Achieve Your Goals</h3>
                <p className="text-sm text-foreground/70">
                  Track progress and earn badges as you advance toward your dream job
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-foreground/5 relative overflow-hidden">
          <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-pathcraft-purple/5 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">What Our Users Say</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Join thousands of professionals who have accelerated their careers with PathCraft
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-pathcraft-purple flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="font-semibold">Jane Doe</h3>
                    <p className="text-xs text-foreground/70">UX Designer at Google</p>
                  </div>
                </div>
                <p className="text-foreground/70">
                  "PathCraft helped me transition from graphic design to UX design in just 8 months. The roadmap was incredibly detailed and practical."
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-pathcraft-pink flex items-center justify-center text-white font-bold">
                    MS
                  </div>
                  <div>
                    <h3 className="font-semibold">Mike Smith</h3>
                    <p className="text-xs text-foreground/70">Data Scientist at Netflix</p>
                  </div>
                </div>
                <p className="text-foreground/70">
                  "I used PathCraft to guide my journey from business analyst to data scientist. The course recommendations were spot-on!"
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-pathcraft-blue flex items-center justify-center text-white font-bold">
                    AK
                  </div>
                  <div>
                    <h3 className="font-semibold">Ava Kim</h3>
                    <p className="text-xs text-foreground/70">Full-Stack Developer at Spotify</p>
                  </div>
                </div>
                <p className="text-foreground/70">
                  "The milestone-based approach kept me motivated throughout my journey. I landed my dream job as a full-stack developer!"
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-pathcraft-purple" />
                <p className="font-medium">Join 20,000+ users building their dream careers</p>
              </div>
              <button 
                onClick={() => {
                  toast({
                    title: "Get early access",
                    description: "Thanks for your interest! We'll notify you when we launch.",
                  });
                }}
                className="text-pathcraft-purple hover:text-pathcraft-purple-dark underline text-sm"
              >
                Get Early Access
              </button>
            </div>
          </div>
        </section>
        
        {/* Roadmap Demo */}
        <RoadmapView jobTitle={jobTitle} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
