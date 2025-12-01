import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { profile } from '../data/profile';

const Education = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-12">
        
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="text-accent" /> Education
          </h3>
          <div className="space-y-6">
            {profile.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-slate-200 pl-4">
                <h4 className="text-lg font-bold text-primary">{edu.degree}</h4>
                <p className="text-slate-700">{edu.institution}</p>
                <p className="text-sm text-slate-500 mt-1">{edu.duration}</p>
                {edu.notes && <p className="text-sm text-slate-500 mt-1 italic">{edu.notes}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="text-accent" /> Certifications
          </h3>
          <div className="space-y-4">
            {profile.certifications.map((cert, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="font-semibold text-primary">{cert.name}</h4>
                <div className="flex justify-between text-sm text-slate-600 mt-1">
                  <span>{cert.provider}</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
