import React from 'react';
import { MapPin, User, Heart } from 'lucide-react';
import { personalInfo, interests, stats } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="relative rounded-lg w-full max-w-md h-auto object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <User className="text-cyan-400" size={24} />
              <h3 className="text-2xl font-semibold">{personalInfo.name}</h3>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="text-cyan-400" size={20} />
              <p>{personalInfo.location}</p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Interests */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Heart className="text-cyan-400" size={20} />
                <h4 className="text-white font-semibold">Interests</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 text-cyan-400 rounded-full text-sm hover:bg-gray-700/50 transition-colors duration-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4 text-center hover:border-blue-500/40 transition-colors duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  2027
                </div>
                <div className="text-gray-400 text-sm mt-1">Expected Graduation</div>
              </div>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-lg p-4 text-center hover:border-gray-600 transition-colors duration-300"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;