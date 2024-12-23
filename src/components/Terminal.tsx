import React from 'react';
import { Terminal as TerminalIcon, Database, Server, Code2, Github, Linkedin, Mail } from 'lucide-react';

const Terminal: React.FC = () => {
  return (
    <div className="font-mono bg-black/90 text-green-400 p-4 rounded-lg shadow-xl w-full max-w-2xl">
      <div className="flex items-center gap-2 mb-4 border-b border-green-800 pb-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm ml-2">fresher-backend-dev@portfolio:~$</span>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-white">$ whoami</p>
          <p className="ml-4">Dev Patel</p>
          <p className="ml-4 text-gray-400">Full Stack Developer | Backend Focused</p>
        </div>
        <div>
          <p className="text-white">$ cat skills.txt</p>
          <div className="ml-4 grid grid-cols-2 gap-2">
            <div>• Node.js</div>
            <div>• Python</div>
            <div>• PostgreSQL</div>
            <div>• MongoDB</div>
            <div>• Docker</div>
            <div>• Redis</div>
            <div>• AWS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;