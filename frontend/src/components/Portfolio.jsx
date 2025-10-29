import React, { useState } from 'react';
import { Mail, Github, ChevronDown, Code, Database, Lightbulb, Wrench, GraduationCap, MapPin, Calendar, User, Heart, ChevronRight, Phone, Send, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useToast } from '../hooks/use-toast';

const Portfolio = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4" 
            alt="Data Science Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-blue-400 text-lg font-medium tracking-wide">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{portfolioData.name}</h1>
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {portfolioData.title}
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6">
              {portfolioData.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium shadow transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                Get In Touch
              </button>
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-md text-lg font-medium shadow-sm transition-all duration-300 hover:scale-105"
              >
                <Github className="h-5 w-5" />
                View GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-400" />
        </div>

        {/* Decorative Blur Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1617240016072-d92174e44171" 
                  alt="About Me"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-emerald-600 p-6 rounded-xl shadow-2xl text-white">
                <p className="text-4xl font-bold">{portfolioData.expectedGraduation}</p>
                <p className="text-sm">Expected Graduation</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <User className="h-5 w-5 text-blue-400" />
                  <span className="text-lg">{portfolioData.name}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-lg">{portfolioData.location}</span>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Aspiring Data Analyst with strong Python and data science fundamentals. Passionate about exploring data to derive insights and build meaningful analytical solutions. Currently pursuing B.Tech in Computer Science with a specialization in Data Science.
              </p>

              {/* Interests */}
              <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-blue-400" />
                  Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.interests.map((interest, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {portfolioData.stats.map((stat, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-500/30 p-4 rounded-xl text-center">
                    <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-blue-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Showcasing my journey in building meaningful solutions</p>
          </div>

          <div className="space-y-12">
            {portfolioData.projects.map((project, idx) => (
              <div key={project.id} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <p className="text-emerald-400 font-medium">{project.subtitle}</p>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-2 text-gray-400">
                            <ChevronRight className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tidx) => (
                        <span key={tidx} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow transition-all duration-300 hover:scale-105"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                      <button className="inline-flex items-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">
                        <ExternalLink className="h-4 w-4" />
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Skills Section - Continuing in next message due to length... */}