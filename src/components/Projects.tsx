
import React from 'react';
import { Brain, Globe, Lightbulb } from 'lucide-react';

const Projects = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 animate-in slide-in-from-left-4 duration-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-3 rounded-xl">
          <Lightbulb className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-3 rounded-xl flex-shrink-0">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">FredMed – AI-Powered Symptom Checker</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Developed an intelligent web tool for analyzing user-reported symptoms and offering potential diagnosis suggestions.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Implemented AI logic to interpret health-related input and provide condition-based responses.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Designed a user-friendly interface using HTML and CSS.</span>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">AI</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Healthcare</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Web Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
