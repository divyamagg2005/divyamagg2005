import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const HeroScene: React.FC = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Main animated text - Entry animation */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0, letterSpacing: "-0.1em" }}
                animate={{ scale: 1, opacity: 1, letterSpacing: "-0.05em" }}
                transition={{
                    duration: 1.5,
                    ease: [0.16, 1, 0.3, 1], // Custom easing for smooth entry
                }}
                className="z-10 origin-center will-change-transform backface-hidden"
            >
                <h1 className="text-5xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent px-4 py-2 text-center select-none transform-gpu text-rendering-optimize">
                    Divyam Aggarwal
                </h1>
            </motion.div>

            {/* Subtext and Socials */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-20 left-0 w-full flex flex-col items-center z-20"
            >
                <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed text-center px-4">
                    Software Engineer & AI Innovator
                </p>

                <div className="flex gap-6 mb-8">
                    <SocialLink href="https://github.com/divyamagg2005" icon={<Github />} title="GitHub" />
                    <SocialLink href="https://drive.google.com/file/d/1j0KnUCFLyD47tS4vCUoi4Llhsu8d-6gy/view?usp=sharing" icon={<FileText />} title="Resume" />
                    <SocialLink href="https://www.linkedin.com/in/divyam-aggarwal-51b52328a/" icon={<Linkedin />} title="LinkedIn" />
                    <SocialLink href="mailto:divyamagg2005@gmail.com" icon={<Mail />} title="Email" />
                </div>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown className="w-8 h-8 text-slate-400" />
                </motion.div>
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon, title }: { href: string; icon: React.ReactNode; title: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-all duration-300 hover:scale-110 border border-slate-600/50 hover:border-blue-400/50 group"
        title={title}
    >
        <div className="w-6 h-6 text-slate-300 group-hover:text-blue-400">
            {icon}
        </div>
    </a>
);

export default HeroScene;
