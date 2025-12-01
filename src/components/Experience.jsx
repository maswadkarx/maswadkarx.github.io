import React from 'react';
import { Briefcase } from 'lucide-react';
import { profile } from '../data/profile';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {profile.experience.map((role, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
              
              <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10"></div>

                {/* Date (Desktop) */}
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className="text-sm font-semibold text-accent tracking-wider uppercase">{role.duration}</span>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-accent/30 transition-colors">
                    <div className="md:hidden text-sm font-semibold text-accent mb-2">{role.duration}</div>
                    <h3 className="text-xl font-bold text-primary">{role.role}</h3>
                    <div className="text-slate-600 font-medium mb-4 flex items-center gap-2">
                      <Briefcase size={16} />
                      {role.company}
                    </div>
                    <ul className="space-y-2">
                      {role.highlights.map((highlight, i) => (
                        <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
