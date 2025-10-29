import React from 'react';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic journey and qualifications
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block"></div>

            {/* Education Item */}
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              {/* Timeline dot */}
              <div className="absolute -left-0 top-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hidden md:flex items-center justify-center">
                <GraduationCap size={32} className="text-white" />
              </div>

              <div className="md:ml-20">
                {/* Degree */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {education.degree}
                </h3>
                
                {/* Major and Specialization */}
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-cyan-400" size={20} />
                  <p className="text-xl text-cyan-400 font-medium">
                    {education.major}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-blue-400" size={20} />
                  <p className="text-gray-300">
                    Specialization: <span className="text-white font-semibold">{education.specialization}</span>
                  </p>
                </div>

                {/* Institution */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {education.institution}
                </p>

                {/* Expected Graduation */}
                <div className="flex items-center gap-2">
                  <Calendar className="text-cyan-400" size={20} />
                  <p className="text-gray-400">
                    Expected Graduation: <span className="text-cyan-400 font-semibold">{education.expectedGraduation}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;