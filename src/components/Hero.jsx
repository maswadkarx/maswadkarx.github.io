import React from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

const Hero = () => {
  const { basicInfo } = profile;

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full blur-3xl opacity-50"></div>
      
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-2">
            {basicInfo.title}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {basicInfo.name}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
            {basicInfo.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              Contact Me <ArrowRight size={18} />
            </a>
            <a 
              href="#" 
              className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="flex gap-4 pt-4 text-slate-400">
            <a href={basicInfo.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href={basicInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="aspect-square rounded-2xl bg-slate-100 overflow-hidden relative z-10 border-2 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
             {/* Placeholder for headshot */}
             <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                <span className="text-lg">Photo Placeholder</span>
             </div>
             {/* <img src="/path-to-your-photo.jpg" alt={basicInfo.name} className="w-full h-full object-cover" /> */}
          </div>
          <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl -z-10 transform translate-x-4 translate-y-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
