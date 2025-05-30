
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 animate-in slide-in-from-left-4 duration-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Education</h2>
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Bachelor of Technology in Computer Science & Information Technology (CSIT)
        </h3>
        <p className="text-green-600 font-medium mb-2">Dronacharya College of Engineering, Gurugram, Haryana</p>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>2024 – 2028</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
