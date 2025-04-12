
import React from 'react';
import { Milestone, Book, Target, Award, Tool } from 'lucide-react';
import ProgressBar from './ProgressBar';
import CourseCard from './CourseCard';
import ToolCard from './ToolCard';
import AchievementBadge from './AchievementBadge';

interface RoadmapViewProps {
  jobTitle: string;
}

const RoadmapView = ({ jobTitle = "Full-Stack Developer" }: RoadmapViewProps) => {
  const milestones = [
    { id: 1, title: "Learn the Fundamentals", completed: true, description: "Master HTML, CSS, and JavaScript basics" },
    { id: 2, title: "Build First Projects", completed: true, description: "Create simple websites and applications" },
    { id: 3, title: "Learn a Framework", completed: false, description: "Master React.js or Vue.js for frontend development" },
    { id: 4, title: "Backend Development", completed: false, description: "Learn Node.js, Express, and database management" },
    { id: 5, title: "DevOps Basics", completed: false, description: "Learn deployment, CI/CD, and cloud services" },
  ];
  
  const courses = [
    { id: 1, title: "The Complete Web Developer Bootcamp", platform: "Udemy", rating: 4.8, level: "Beginner", url: "#" },
    { id: 2, title: "React - The Complete Guide", platform: "Udemy", rating: 4.9, level: "Intermediate", url: "#" },
    { id: 3, title: "Node.js, Express, MongoDB & More", platform: "Coursera", rating: 4.7, level: "Intermediate", url: "#" },
  ];
  
  const tools = [
    { id: 1, name: "Visual Studio Code", category: "IDE", url: "#" },
    { id: 2, name: "Git & GitHub", category: "Version Control", url: "#" },
    { id: 3, name: "Chrome DevTools", category: "Debugging", url: "#" },
    { id: 4, name: "Postman", category: "API Testing", url: "#" },
  ];
  
  const achievements = [
    { id: 1, title: "Coding Novice", description: "Completed first milestone", icon: "Award" },
    { id: 2, title: "Project Builder", description: "Built first portfolio project", icon: "Trophy" },
    { id: 3, title: "Framework Master", description: "Mastered a frontend framework", icon: "Star" },
  ];
  
  const completedMilestones = milestones.filter(m => m.completed).length;
  const progress = (completedMilestones / milestones.length) * 100;
  
  return (
    <section id="roadmap" className="py-16 relative">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pathcraft-purple/10 blur-3xl"></div>
      <div className="absolute bottom-24 -left-24 w-72 h-72 rounded-full bg-pathcraft-pink/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-2">Your Path to: <span className="text-gradient">{jobTitle}</span></h2>
          <p className="text-lg text-foreground/70">Follow this roadmap to achieve your career goals</p>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-pathcraft-purple" />
              <h3 className="text-xl font-semibold">Progress</h3>
            </div>
            <span className="text-sm font-medium">{completedMilestones} of {milestones.length} milestones completed</span>
          </div>
          
          <ProgressBar progress={progress} />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Milestone className="h-5 w-5 text-pathcraft-purple" />
              <h3 className="text-xl font-semibold">Milestones</h3>
            </div>
            
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={milestone.id} className="relative">
                  {index !== milestones.length - 1 && (
                    <div className={`absolute left-5 top-12 bottom-0 w-0.5 ${milestone.completed ? 'bg-pathcraft-purple' : 'bg-gray-200'}`}></div>
                  )}
                  
                  <div className="flex gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${milestone.completed ? 'bg-pathcraft-purple text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {milestone.id}
                    </div>
                    
                    <div className="glass-card p-4 rounded-xl flex-1">
                      <h4 className="font-medium flex justify-between">
                        {milestone.title}
                        {milestone.completed && <span className="text-green-500 text-sm">Completed</span>}
                      </h4>
                      <p className="text-sm text-foreground/70">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-pathcraft-purple" />
              <h3 className="text-xl font-semibold">Achievements</h3>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <div className="grid grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <AchievementBadge key={achievement.id} {...achievement} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Book className="h-5 w-5 text-pathcraft-purple" />
            <h3 className="text-xl font-semibold">Recommended Courses</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Tool className="h-5 w-5 text-pathcraft-purple" />
            <h3 className="text-xl font-semibold">Recommended Tools</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapView;
