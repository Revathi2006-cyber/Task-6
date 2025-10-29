import React from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="space-y-6">
          {/* Greeting */}
          <p className="text-cyan-400 text-lg font-light animate-fade-in">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold text-white animate-fade-in-up">
            {personalInfo.name.split(' ')[0]}
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {personalInfo.name.split(' ')[1]}
            </span>
          </h1>
          
          {/* Title */}
          <p className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in-up animation-delay-200">
            {personalInfo.title}
          </p>
          
          {/* Bio */}
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Passionate about exploring data to derive insights and build meaningful analytical solutions
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up animation-delay-600">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ArrowDown className="text-gray-400" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;