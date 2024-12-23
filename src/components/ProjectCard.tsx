import React from 'react';
import { Server, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, github }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-green-800 hover:border-green-400 transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <Server className="text-green-400" size={20} />
        <h3 className="text-xl font-mono text-green-400">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-gray-800 text-green-400 rounded text-sm">
            {t}
          </span>
        ))}
      </div>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-green-400 hover:text-green-300"
      >
        <Github size={16} />
        <span>View Source</span>
      </a>
    </div>
  );
};

export default ProjectCard;