
import React from 'react';
import { Trophy, Wind } from 'lucide-react';

const Achievements = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 animate-in slide-in-from-right-4 duration-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-3 rounded-xl">
          <Trophy className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Achievements</h2>
      </div>
      
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-3 rounded-xl flex-shrink-0">
            <Wind className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">National Science Day – Paper Presentation Competition</h3>
            <p className="text-orange-600 font-medium mb-3">Dronacharya College of Engineering</p>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-2 rounded-lg">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-yellow-700">3rd Prize Winner</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <p className="text-gray-700">
                <span className="font-semibold">Idea:</span> "Sustainable Use of Small Wind Turbine"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
