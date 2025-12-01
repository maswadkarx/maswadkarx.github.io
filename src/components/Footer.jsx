import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-500 py-8 border-t border-slate-800">
      <div className="container-custom text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Vivek Maswadkar. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind CSS & Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;
