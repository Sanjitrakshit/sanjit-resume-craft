
import React from 'react';
import { Code, Monitor, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "C"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Web Technologies",
      icon: <Monitor className="w-5 h-5" />,
      skills: ["HTML", "CSS"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Core Concepts",
      icon: <Database className="w-5 h-5" />,
      skills: ["Data Structures"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 animate-in slide-in-from-right-4 duration-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl">
          <Code className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title}
            className="group hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`bg-gradient-to-r ${category.color} p-1 rounded-xl`}>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`bg-gradient-to-r ${category.color} p-2 rounded-lg text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
