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
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4" 
            alt="Data Science Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>

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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-400" />
        </div>

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
            {portfolioData.projects.map((project) => (
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-blue-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Tools and technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Programming Languages</h3>
              </div>
              <div className="space-y-6">
                {portfolioData.skills.programming.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Science Tools */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <Database className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Data Science Tools</h3>
              </div>
              <div className="space-y-6">
                {portfolioData.skills.dataScience.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Core Competencies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.coreCompetencies.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-lg text-sm border border-purple-500/30 hover:bg-purple-500/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-500/10 rounded-lg">
                  <Wrench className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Development Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.tools.map((tool, idx) => (
                  <span key={idx} className="px-4 py-2 bg-amber-500/10 text-amber-300 rounded-lg text-sm border border-amber-500/30 hover:bg-amber-500/20 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-blue-400">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Academic background and qualifications</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 p-8 md:p-12 rounded-xl hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full">
                    <GraduationCap className="h-12 w-12 text-white" />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{portfolioData.education.degree}</h3>
                  <p className="text-xl text-blue-400 font-semibold">{portfolioData.education.field}</p>
                  <p className="text-lg text-emerald-400 mt-2">Specialization: {portfolioData.education.specialization}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-3 bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Institution</p>
                      <p className="text-white font-medium">{portfolioData.education.institution}</p>
                      <p className="text-gray-400 text-sm">{portfolioData.education.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20">
                    <Calendar className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Expected Graduation</p>
                      <p className="text-white font-medium text-2xl">{portfolioData.education.expectedGraduation}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-400 italic">Currently pursuing technical learning and online training in programming and data science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-gray-400 mb-8">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div className="bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-500/30 p-6 rounded-xl hover:border-blue-500 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a href={`mailto:${portfolioData.email}`} className="text-white hover:text-blue-400 transition-colors">
                        {portfolioData.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gradient-to-br from-emerald-600/10 to-emerald-600/5 border border-emerald-500/30 p-6 rounded-xl hover:border-emerald-500 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                      <Phone className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a href={`tel:${portfolioData.phone}`} className="text-white hover:text-emerald-400 transition-colors">
                        {portfolioData.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* GitHub */}
                <div className="bg-gradient-to-br from-purple-600/10 to-purple-600/5 border border-purple-500/30 p-6 rounded-xl hover:border-purple-500 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                      <Github className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
                        View My Work
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-2 block">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2 block">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2 block">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-3 rounded-md font-medium shadow transition-all duration-300 hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default Portfolio;
