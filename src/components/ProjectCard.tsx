import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  delay,
}) => {
  return (
    <div
      className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-link/50 transition-all duration-500 transform-gpu hover:scale-105 hover:-translate-y-2 backface-hidden"
      style={{
        animationDelay: `${delay}ms`,
        perspective: '1000px',
      }}
    >
      {/* 3D Card Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-link/10 to-heading/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-link/20 to-heading/20 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-link transition-colors duration-300">
          {title}
        </h3>

        <p className="text-body text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-800/50 text-muted text-xs font-medium rounded-full border border-slate-600/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-body hover:text-hero rounded-lg transition-all duration-300 text-sm font-medium border border-slate-600/50 hover:border-link/50"
          >
            <Github size={16} />
            Code
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-link text-slate-950 hover:bg-link/90 rounded-lg transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-link/25"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;