
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-3 rounded-xl">
          <Award className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
      </div>
      
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-3 rounded-xl flex-shrink-0">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-teal-600 font-medium">SimpliLearn</p>
            </div>
          </div>
          <a 
            href="https://simpli-web.app.link/e/Sh6SUR915Sb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105"
          >
            <span>View Certificate</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
