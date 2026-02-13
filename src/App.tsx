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
import SkillCard from './components/SkillCard';
import HeroScene from './components/HeroScene';
// import Bookshelf from './components/Bookshelf'; // Replaced by HorizontalProjects
import HorizontalProjects from './components/HorizontalProjects';
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
    <div key="about" className="w-full h-full flex items-center justify-center pl-4 md:pl-8 lg:pl-12 pr-8 md:pr-16 lg:pr-24">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <img
            src="/assets/pictures/divyam.jpg"
            alt="Divyam Aggarwal"
            className="w-full max-w-[475px] rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Right Column: About Me Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-heading tracking-tight">
            Welcome to my digital space.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-body leading-relaxed font-sans font-light max-w-[680px]">
            <p>
              I’m <span className="text-heading font-medium">Divyam Aggarwal</span>, a <span className="text-heading font-medium">B.Tech engineering student at VIT Vellore</span> with a strong interest in building <span className="text-heading font-medium">practical, impact-driven software</span>. I enjoy working at the intersection of <span className="text-heading font-medium">computer science, AI, and system design</span>, where <span className="text-heading font-medium">ideas turn into tools people can actually use</span>.
            </p>
            <p>
              My work spans <span className="text-heading font-medium">AI-powered applications</span>, <span className="text-heading font-medium">developer tools</span>, and <span className="text-heading font-medium">web-based real-time systems</span>, with a strong focus on <span className="text-heading font-medium">clean architecture</span>, <span className="text-heading font-medium">performance</span>, and <span className="text-heading font-medium">usability</span>. I like <span className="text-heading font-medium">breaking down complex problems</span>, <span className="text-heading font-medium">experimenting with emerging technologies</span>, and <span className="text-heading font-medium">refining solutions</span> until they feel <span className="text-heading font-medium">intuitive and reliable</span>.
            </p>
            <p>
              Beyond coursework, I actively <span className="text-heading font-medium">build projects</span>, explore <span className="text-heading font-medium">research-oriented concepts</span>, and stay curious about how <span className="text-heading font-medium">technology scales from local systems to real-world deployments</span>. I believe in <span className="text-heading font-medium">learning by doing</span>, <span className="text-heading font-medium">iterating fast</span>, and <span className="text-heading font-medium">constantly raising my own bar</span>.
            </p>
            <p>
              This portfolio is a <span className="text-heading font-medium">snapshot of my journey</span>, <span className="text-heading font-medium">what I’m building</span>, <span className="text-heading font-medium">what I’m learning</span>, <span className="text-heading font-medium">where I’m headed</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>,

    // Page 2: Projects
    <HorizontalProjects key="projects" />,

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
