import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Selected Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{project.name}</h3>
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary">
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-sm font-medium text-slate-500 mb-4">{project.tagline}</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
