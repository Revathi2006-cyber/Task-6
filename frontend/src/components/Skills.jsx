import React from 'react';
import { Code2, Database, Lightbulb, Wrench } from 'lucide-react';
import { skills } from '../data/mock';

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-cyan-400 font-semibold">{level}%</span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, icon: Icon, children, iconColor }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg ${iconColor}`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Programming Languages */}
          <SkillCard
            title="Programming Languages"
            icon={Code2}
            iconColor="bg-blue-500/20"
          >
            {skills.programmingLanguages.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </SkillCard>

          {/* Data Science Tools */}
          <SkillCard
            title="Data Science Tools"
            icon={Database}
            iconColor="bg-cyan-500/20"
          >
            {skills.dataScienceTools.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </SkillCard>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Core Competencies */}
          <SkillCard
            title="Core Competencies"
            icon={Lightbulb}
            iconColor="bg-purple-500/20"
          >
            <div className="flex flex-wrap gap-3">
              {skills.coreCompetencies.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg text-sm hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </SkillCard>

          {/* Development Tools */}
          <SkillCard
            title="Development Tools"
            icon={Wrench}
            iconColor="bg-emerald-500/20"
          >
            <div className="flex flex-wrap gap-3">
              {skills.developmentTools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg text-sm hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </SkillCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;