import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills, delay }) => {
  return (
    <div
      className="group bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-500 transform-gpu hover:scale-105 backface-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mr-4 group-hover:from-purple-400/30 group-hover:to-blue-400/30 transition-all duration-300">
          <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-600/50 hover:border-purple-400/50 hover:text-purple-300 transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;