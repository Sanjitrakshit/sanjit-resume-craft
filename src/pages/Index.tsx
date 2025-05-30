
import React from 'react';
import Header from '../components/Header';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Header />
          <div className="space-y-8 mt-8">
            <Education />
            <Skills />
            <Projects />
            <Achievements />
            <Certifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
