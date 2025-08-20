import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown, 
  Award, 
  GraduationCap,
  Code,
  Database,
  Brain,
  Cloud,
  Terminal,
  Palette
} from 'lucide-react';

import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const projects = [
    {
      title: 'TermiGenius',
      description: 'Converts natural language to secure terminal commands',
      techStack: ['Python', 'Gemini API'],
      githubUrl: 'https://github.com/divyamagg2005/TermiGenius',
    },
    {
      title: 'AnonBoard',
      description: 'Real-time anonymous message board for communities',
      techStack: ['React', 'Supabase'],
      githubUrl: 'https://github.com/divyamagg2005/anonboard',
      liveUrl: 'https://anonboard-liard.vercel.app/',
    },
    {
      title: 'PDF Knowledge Assistant',
      description: 'Chat with documents using AI & semantic search',
      techStack: ['LangChain', 'Gemini API'],
      githubUrl: 'https://github.com/divyamagg2005/ai_chatbot',
      liveUrl: 'https://aipdfchatbotsystem.streamlit.app/',
    },
    {
      title: 'Health Monitor',
      description: 'AI-based heart data analysis from real-time sensors',
      techStack: ['C++', 'Python', 'Gemini API'],
      githubUrl: 'https://github.com/divyamagg2005/heart-monitoring-with-data-storage-and-AI-analysis-.-',
    },
    {
      title: 'Web Gladiator',
      description: '3D FPS browser game with AI enemies and day-night cycle',
      techStack: ['Next.js', 'Three.js'],
      githubUrl: 'https://github.com/divyamagg2005/web_gladiator',
      liveUrl: 'https://survivor-self.vercel.app/',
    },
  ];

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'PowerShell'],
    },
    {
      icon: Palette,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Three.js', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      icon: Database,
      title: 'Backend & DB',
      skills: ['Node.js', 'Firebase', 'Supabase', 'MySQL'],
    },
    {
      icon: Brain,
      title: 'AI/ML',
      skills: ['LangChain', 'Gemini API', 'IBM Watson', 'TensorFlow'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['IBM Cloud', 'Firebase Hosting'],
    },
    {
      icon: Terminal,
      title: 'Tools',
      skills: ['Git', 'Streamlit', 'Embedded Programming'],
    },
  ];

  const educationData = [
    { year: '2023–2027', institution: 'VIT Vellore', score: 'CGPA: 8.84' },
    { year: '12th', institution: 'Mayo International School', score: '93.8%' },
    { year: '10th', institution: 'St. Mary\'s School', score: '93.8%' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <ParticleBackground />
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center z-10"
        >
          <motion.div
            style={{ y }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent min-h-[120px]">
              Divyam Aggarwal
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Software Engineer & AI Innovator building cutting-edge systems that make technology intuitive and useful
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href="https://github.com/divyamagg2005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-all duration-300 hover:scale-110 border border-slate-600/50 hover:border-blue-400/50"
            >
              <Github className="w-6 h-6 text-slate-300 hover:text-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/divyam-aggarwal-51b52328a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-all duration-300 hover:scale-110 border border-slate-600/50 hover:border-blue-400/50"
            >
              <Linkedin className="w-6 h-6 text-slate-300 hover:text-blue-400" />
            </a>
            <a
              href="mailto:divyamagg2005@gmail.com"
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-all duration-300 hover:scale-110 border border-slate-600/50 hover:border-blue-400/50"
            >
              <Mail className="w-6 h-6 text-slate-300 hover:text-blue-400" />
            </a>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8 text-slate-400 hover:text-blue-400 transition-colors" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              I'm a Computer Science student at VIT Vellore, passionate about building AI-driven systems that bridge the gap between cutting-edge technology and practical applications. My work spans from intelligent health diagnostics to natural language interfaces for terminal automation, always focusing on making complex technology accessible and useful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} delay={index * 100} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">ADGVIT - Senior Core Member & Collaboration Executive</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>Secured sponsorships from Kandola Networks, enhancing event capabilities and community reach</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>Successfully invited Pragya Muthuraman as guest speaker for SharkTech, bringing industry expertise to the community</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex items-center justify-between hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center">
                  <GraduationCap className="w-6 h-6 text-green-400 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
                    <p className="text-slate-400 text-sm">{edu.year}</p>
                  </div>
                </div>
                <div className="text-green-400 font-semibold">
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard {...category} delay={index * 100} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-300 mb-12">
              Let's connect and build something amazing together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="https://github.com/divyamagg2005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 rounded-xl transition-all duration-300 border border-slate-600/50 hover:border-blue-400/50 transform hover:scale-105"
            >
              <Github className="w-6 h-6 text-blue-400" />
              <span className="text-white font-medium">divyamagg2005</span>
            </a>
            
            <a
              href="https://linkedin.com/in/divyam-aggarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-700 hover:to-blue-600 rounded-xl transition-all duration-300 border border-blue-600/50 hover:border-blue-400/50 transform hover:scale-105"
            >
              <Linkedin className="w-6 h-6 text-blue-300" />
              <span className="text-white font-medium">Divyam Aggarwal</span>
            </a>
            
            <a
              href="mailto:divyamagg2005@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-800 to-purple-700 hover:from-purple-700 hover:to-purple-600 rounded-xl transition-all duration-300 border border-purple-600/50 hover:border-purple-400/50 transform hover:scale-105"
            >
              <Mail className="w-6 h-6 text-purple-300" />
              <span className="text-white font-medium">divyamagg2005@gmail.com</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800/50 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Divyam Aggarwal. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;