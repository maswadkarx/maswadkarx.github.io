import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-12">
          I'm currently open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href={`mailto:${profile.basicInfo.email}`}
            className="px-8 py-4 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-colors flex items-center gap-2"
          >
            <Mail size={20} />
            Say Hello
          </a>
          
          <div className="flex gap-4">
            <a 
              href={profile.basicInfo.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href={profile.basicInfo.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
