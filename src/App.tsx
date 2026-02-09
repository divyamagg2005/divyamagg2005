import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Database,
  Brain,
  Cloud,
  Terminal,
  Palette,
  Award,
  GraduationCap
} from 'lucide-react';

import LoadingScreen from './components/LoadingScreen';
import Meteors from './components/Meteors';
import Navigation from './components/Navigation';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import HeroScene from './components/HeroScene';
import { usePageNavigation } from './hooks/usePageNavigation';

// Page wrapper component for consistent transitions
const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }} // Slowed for dev visibility
      className="fixed inset-0 w-full h-screen overflow-hidden"
    >
      {/* Full-width, full-height container - no max-width constraint */}
      <div className="h-full w-full relative" style={{ zIndex: 10 }}>
        {children}
      </div>
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

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

  // Define all pages
  const pages = [
    // Page 0: Hero
    <HeroScene key="hero" />,

    // Page 1: About
    <div key="about" className="w-full h-full flex items-center justify-center px-8">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-heading">
          About Me
        </h2>
        <p className="text-lg md:text-2xl text-body leading-relaxed font-light">
          Computer Science student at VIT Vellore. I build <span className="text-link font-semibold">systems</span>, not just websites. From AI-driven diagnostics to real-time collaboration tools, my work bridges the gap between complex tech and human intuition.
        </p>
      </motion.div>
    </div>,

    // Page 2: Projects
    <div key="projects" className="w-full h-full flex flex-col py-12 overflow-y-auto">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8 shrink-0"
      >
        <h2 className="text-4xl font-bold text-heading">
          Selected Works
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} delay={index * 50} />
        ))}
      </div>
    </div>,

    // Page 3: Leadership
    <div key="leadership" className="w-full h-full flex items-center justify-center px-8">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-6 text-heading">
          Leadership
        </h2>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8"
      >
        <div className="flex items-center mb-6">
          <Award className="w-8 h-8 text-link mr-4" />
          <h3 className="text-2xl font-bold text-heading">ADGVIT - Finance Head (Board Member)</h3>
        </div>
        <ul className="space-y-4 text-body">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-link rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <span>Led sponsorship strategy and negotiations, securing funding for flagship events like iOS Fusion 7.0.</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-link rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <span>Successfully invited Pragya Muthuraman (Founder, The Internet Company) as keynote speaker for Yantra 2025.</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-link rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <span>Managed speaker relations for iOS Fusion 8.0, interacting with industry leaders like Amrit Raj (Co-Founder, Women in Product India).</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-link rounded-full mt-2 mr-4 flex-shrink-0"></div>
            <span>Collaborated with cross-functional teams to plan budgets and allocate funds for community workshops.</span>
          </li>
        </ul>
      </motion.div>
    </div>,

    // Page 4: Education
    <div key="education" className="w-full h-full flex items-center justify-center px-8">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-6 text-heading">
          Education
        </h2>
      </motion.div>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex items-center justify-between hover:border-link/50 transition-all duration-300"
          >
            <div className="flex items-center">
              <GraduationCap className="w-6 h-6 text-link mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-heading">{edu.institution}</h3>
                <p className="text-body text-sm">{edu.year}</p>
              </div>
            </div>
            <div className="text-link font-semibold">
              {edu.score}
            </div>
          </motion.div>
        ))}
      </div>
    </div>,

    // Page 5: Certifications
    <div key="certifications" className="w-full h-full flex items-center justify-center px-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-6 text-heading">
          Certifications
        </h2>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Award className="w-10 h-10 text-link" />
            <div className="text-left">
              <h3 className="text-xl font-bold text-heading">IBM Generative AI Specialization</h3>
              <p className="text-body">Score: 97/100 • Issued by IBM</p>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1wvgG0pRaP422fNMEcPwCsOlU0Y4_6QFr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-link/10 hover:bg-link/20 text-link rounded-lg transition-colors border border-link/50"
          >
            Certificate
          </a>
        </div>
      </motion.div>
    </div>,

    // Page 6: Skills
    <div key="skills" className="w-full h-full flex items-center justify-center px-8">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-heading">
          Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} {...category} delay={index * 50} />
          ))}
        </div>
      </motion.div>
    </div>,

    // Page 7: Contact
    <div key="contact" className="w-full h-full flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-hero">Let's Build.</h2>
        <p className="text-body mb-8 max-w-xl mx-auto">
          Open for collaborations and opportunities.
        </p>
        <a
          href="mailto:divyamagg2005@gmail.com"
          className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-colors"
        >
          Get in Touch
        </a>
        <footer className="mt-20 text-muted text-sm">
          © {new Date().getFullYear()} Divyam Aggarwal. Crafted with React & Motion.
        </footer>
      </motion.div>
    </div>,
  ];

  const { currentPage } = usePageNavigation(pages.length);

  return (
    <div className="bg-black text-white h-screen overflow-hidden">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Background layer - always visible, never unmounts */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Meteors count={30} />
      </div>

      {/* Navigation - stays on top */}
      <div style={{ zIndex: 100 }}>
        <Navigation />
      </div>

      {/* Page content layer */}
      <div style={{ zIndex: 10 }}>
        <AnimatePresence mode="wait">
          <Page key={currentPage}>
            {pages[currentPage]}
          </Page>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
