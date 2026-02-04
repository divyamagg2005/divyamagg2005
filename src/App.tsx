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
  Palette,
  FileText
} from 'lucide-react';

import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import SmoothScroll from './components/SmoothScroll';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const projects = [
    {
      title: 'BrainRot Learning (Insta AI Agent)',
      description: 'Automated Instagram Reels creation pipeline transforming natural language prompts into viral educational content through multi-agent AI orchestration.',
      techStack: ['Python', 'Gemini 2.5 Flash', 'ElevenLabs', 'MoviePy'],
      githubUrl: 'https://github.com/divyamagg2005/Insta_ai_agent',
    },
    {
      title: 'Confession ADG',
      description: 'Secure, anonymous confession platform handling 200+ concurrent users with separated public/admin interfaces.',
      techStack: ['React', 'TypeScript', 'Supabase', 'TailwindCSS'],
      githubUrl: 'https://github.com/divyamagg2005/confession_adg',
      liveUrl: 'https://confession-adg.vercel.app/',
    },
    {
      title: 'TermiGenius',
      description: 'AI-powered CLI converting natural language to secure PowerShell commands with risk scoring and verification.',
      techStack: ['Python', 'Gemini API', 'PowerShell', 'Rich TUI'],
      githubUrl: 'https://github.com/divyamagg2005/TermiGenius',
    },
    {
      title: 'MailMind',
      description: 'Privacy-focused Chrome extension for Gmail summarization and reply drafting using local-first architecture.',
      techStack: ['JavaScript', 'Chrome Extension', 'Groq LLMs'],
      githubUrl: 'https://github.com/divyamagg2005/Smart-email-summariser',
    },
    {
      title: 'Web Gladiator',
      description: 'Immersive 3D FPS game with dynamic lighting, enemy AI, and responsive combat systems.',
      techStack: ['Next.js', 'Three.js', 'React', 'TypeScript'],
      githubUrl: 'https://github.com/divyamagg2005/web_gladiator',
      liveUrl: 'https://survivor-self.vercel.app/',
    },
    {
      title: 'HostelGrid',
      description: 'Comprehensive hostel management system with role-based access control and complaint tracking.',
      techStack: ['Django', 'Supabase', 'Bootstrap 5'],
      githubUrl: 'https://github.com/divyamagg2005/HostelGrid',
      liveUrl: 'https://hostelgrid-x2mo.onrender.com/',
    },
    {
      title: 'Heart Rate Monitor',
      description: 'Real-time heart monitoring system with Arduino data pipeline and AI-based health analysis.',
      techStack: ['C++', 'Python', 'Gemini API', 'Arduino'],
      githubUrl: 'https://github.com/divyamagg2005/heart-monitoring-with-data-storage-and-AI-analysis-.-',
    },
    {
      title: 'PDF Knowledge Assistant',
      description: 'Intelligent chatbot for PDF documents using vector similarity search and context-aware responses.',
      techStack: ['LangChain', 'Gemini API', 'Streamlit'],
      githubUrl: 'https://github.com/divyamagg2005/ai_chatbot',
      liveUrl: 'https://aipdfchatbotsystem.streamlit.app/',
    },
  ];

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'PowerShell', 'Java'],
    },
    {
      icon: Palette,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Three.js', 'TailwindCSS', 'Bootstrap', 'Shadow DOM'],
    },
    {
      icon: Database,
      title: 'Backend & DB',
      skills: ['Django', 'Node.js', 'Firebase', 'Supabase', 'PostgreSQL', 'MySQL'],
    },
    {
      icon: Brain,
      title: 'AI/ML',
      skills: ['LangChain', 'Gemini API', 'Groq API', 'TensorFlow', 'Scikit-learn'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['Vercel', 'Render', 'Git', 'GitHub Actions'],
    },
    {
      icon: Terminal,
      title: 'Tools & Security',
      skills: ['VS Code', 'Streamlit', 'Arduino', 'OAuth 2.0', 'FFmpeg', 'Chrome APIs'],
    },
  ];

  const educationData = [
    { year: '2023–2027', institution: 'VIT Vellore', score: 'CGPA: 8.81' },
    { year: '2023', institution: 'Mayo International School', score: '93.8%' },
    { year: '2021', institution: 'St. Mary\'s School', score: '93.8%' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <SmoothScroll />

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
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-all duration-300 hover:scale-110 border border-slate-600/50 hover:border-blue-400/50 group"
              title="GitHub"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-blue-400" />
            </a>
            <a
              href="https://drive.google.com/file/d/1j0KnUCFLyD47tS4vCUoi4Llhsu8d-6gy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-all duration-300 hover:scale-110 border border-slate-600/50 hover:border-blue-400/50 group"
              title="View Resume"
            >
              <FileText className="w-6 h-6 text-slate-300 group-hover:text-blue-400" />
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
              Computer Science student at VIT Vellore with a strong focus on AI-driven systems and real-world problem solving. Experienced in developing intelligent health diagnostics, natural language interfaces, and real-time applications. Passionate about transforming complex technologies into accessible, user-centric solutions.
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
              <h3 className="text-2xl font-bold text-white">ADGVIT - Finance Head (Board Member)</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>Led sponsorship strategy and negotiations, securing funding for flagship events like iOS Fusion 7.0.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>Successfully invited Pragya Muthuraman (Founder, The Internet Company) as keynote speaker for Yantra 2025.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>Managed speaker relations for iOS Fusion 8.0, interacting with industry leaders like Amrit Raj (Co-Founder, Women in Product India).</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span>Collaborated with cross-functional teams to plan budgets and allocate funds for community workshops.</span>
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

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <Award className="w-10 h-10 text-yellow-400" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">IBM Generative AI Specialization</h3>
                  <p className="text-slate-400">Score: 97/100 • Issued by IBM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://drive.google.com/file/d/1wvgG0pRaP422fNMEcPwCsOlU0Y4_6QFr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 rounded-lg transition-colors border border-yellow-500/50"
                >
                  Certificate
                </a>
              </div>
            </div>
          </motion.div>
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



      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800/50 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>"Learning until my knowledge turns into my capability."</p>
        </div>
      </footer>
    </div>
  );
}

export default App;