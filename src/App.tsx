import React from 'react';
import { Terminal as TerminalIcon, Database, Server, Code2, Github, Linkedin, Mail } from 'lucide-react';
import Terminal from './components/Terminal';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: 'Simple Gambling Platform',
      description: 'Created a web-based gambling game where users can register, log in, place virtual bets, and manage winnings in their wallet.',
      tech: ['Node.js', 'React.js', 'MongoDB', 'TailwindCSS', 'Express.js'],
      github: 'https://github.com/devpatel66/PERN-Projectts/tree/main/Gambling_Site',
    },
    {
      title: 'Local Service Finder',
      description: 'Built a web app for connecting users with local service providers, featuring authentication, service listing, booking, and multi-service profiles.',
      tech: ['Node.js', 'React.js', 'PostgreSQL', 'TailwindCSS', 'Express.js'],
      github: 'https://github.com/devpatel66/Local-Service-Finder.git',
    },
    {
      title: ' File Sharing Web App',
      description: 'Developed a secure file-sharing web app with features like file uploads, public and password-protected links, and controlled access. Used Clerk for user authentication and management, enabling seamless registration and profile handling.',
      tech: ['Node.js', 'React.js', 'MongoDB', 'TailwindCSS', 'Express.js'],
      github: '',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <TerminalIcon className="text-green-400" />
              <h1 className="text-4xl font-mono font-bold text-green-400">Dev Patel</h1>
            </div>
            <h2 className="text-2xl mb-4">Full Stack Developer | Backend Focused</h2>
            <p className="text-gray-400 mb-6">
              I am a passionate aspiring Full Stack Developer with a focus on backend development. I enjoy writing clean, efficient code, optimizing performance, and exploring DevOps practices. Eager to tackle challenges and grow with new technologies.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/devpatel66" className="text-green-400 hover:text-green-300">
                <Github />
              </a>
              <a href="https://linkedin.com/in/dev-patel-89858818a" className="text-green-400 hover:text-green-300">
                <Linkedin />
              </a>
              <a href="mailto:devpatel16@outlook.in" className="text-green-400 hover:text-green-300">
                <Mail />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Terminal />
          </div>
        </div>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Database className="text-green-400" />
            <h2 className="text-2xl font-mono text-green-400">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-green-400" />
            <h2 className="text-2xl font-mono text-green-400">Tech Stack</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-green-800">
              <h3 className="text-xl mb-4 text-green-400">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• HTML/CSS</li>
                <li>• JavaScript</li>
                <li>• ReactJS</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-green-800">
              <h3 className="text-xl mb-4 text-green-400">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js / Express</li>
                <li>• Python</li>
                <li>• REST APIs</li>
                <li>• Web Sockets</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-green-800">
              <h3 className="text-xl mb-4 text-green-400">Databases</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• PostgreSQL</li>
                <li>• MongoDB</li>
                <li>• Redis</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-green-800">
              <h3 className="text-xl mb-4 text-green-400">Other Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• TypeScript</li>
                <li>• pgAdmin</li>
                <li>• Github</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Mail className="text-green-400" />
            <h2 className="text-2xl font-mono text-green-400">Contact</h2>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-800">
            <p className="text-gray-300 mb-4">
              Interested in working together? Feel free to reach out through any of these channels:
            </p>
            <div className="space-y-2">
              <a href="mailto:devpatel16@outlook.in" className="flex items-center gap-2 text-green-400 hover:text-green-300">
                <Mail size={16} />
                <span>devpatel16@outlook.in</span>
              </a>
              <a href="www.linkedin.com/in/dev-patel-89858818a" className="flex items-center gap-2 text-green-400 hover:text-green-300">
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/devpatel66" className="flex items-center gap-2 text-green-400 hover:text-green-300">
                <Github size={16} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;