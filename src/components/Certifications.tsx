
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Data Structure Using C Programming",
      provider: "SWAYAM - IGNOU",
      score: "82% marks",
      date: "May 2025",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100"
    },
    {
      title: "Web Development",
      provider: "SimpliLearn",
      url: "https://simpli-web.app.link/e/Sh6SUR915Sb",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-100"
    },
    {
      title: "GDSC Participation",
      provider: "Hack2Skill",
      url: "https://certificate.hack2skill.com/user/gdgscparticipation/2025H2S01GSC-P43962",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-3 rounded-xl">
          <Award className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
      </div>
      
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div 
            key={cert.title}
            className={`bg-gradient-to-r ${cert.bgColor} p-6 rounded-xl border ${cert.borderColor}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className={`bg-gradient-to-r ${cert.color} p-3 rounded-xl flex-shrink-0`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <p className={`font-medium ${cert.color.includes('blue') ? 'text-blue-600' : cert.color.includes('teal') ? 'text-teal-600' : 'text-purple-600'}`}>
                    {cert.provider}
                  </p>
                  {cert.score && (
                    <p className="text-sm text-gray-600 mt-1">Score: {cert.score}</p>
                  )}
                  {cert.date && (
                    <p className="text-sm text-gray-600 mt-1">{cert.date}</p>
                  )}
                </div>
              </div>
              {cert.url && (
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 bg-gradient-to-r ${cert.color} text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300`}
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
