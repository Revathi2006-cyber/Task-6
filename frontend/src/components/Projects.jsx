import React from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center mb-16 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Project Image */}
      <div className={`${!isEven ? 'md:order-2' : ''}`}>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <img
            src={project.image}
            alt={project.title}
            className="relative rounded-lg w-full h-80 object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* Project Content */}
      <div className={`space-y-4 ${!isEven ? 'md:order-1' : ''}`}>
        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
        <p className="text-cyan-400 font-medium">{project.category}</p>
        <p className="text-gray-300 leading-relaxed">{project.description}</p>

        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold">Key Features:</h4>
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-400 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <Github size={18} />
            View Code
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 border border-gray-600 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              <ExternalLink size={18} />
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my journey in building meaningful solutions
          </p>
        </div>

        {/* Projects List */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;