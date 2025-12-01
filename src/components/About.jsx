import React from 'react';
import { profile } from '../data/profile';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {profile.basicInfo.summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
