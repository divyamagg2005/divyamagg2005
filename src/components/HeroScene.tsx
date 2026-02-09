import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const HeroScene: React.FC = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
            {/* Centered Content Group */}
            <div className="flex flex-col items-center z-10">
                {/* Main animated text */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, letterSpacing: "-0.1em" }}
                    animate={{ scale: 1, opacity: 1, letterSpacing: "-0.05em" }}
                    transition={{
                        duration: 1.5,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mb-8 origin-center will-change-transform backface-hidden"
                >
                    <h1 className="text-5xl md:text-8xl font-black text-hero py-2 text-center select-none transform-gpu text-rendering-optimize">
                        Divyam Aggarwal
                    </h1>
                </motion.div>

                {/* Subtext and Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="flex flex-col items-center"
                >
                    <p className="text-xl md:text-2xl text-body mb-8 max-w-2xl leading-relaxed text-center">
                        Software Engineer & AI Innovator
                    </p>

                    <div className="flex gap-6">
                        <SocialLink href="https://github.com/divyamagg2005" icon={<Github />} title="GitHub" />
                        <SocialLink href="https://drive.google.com/file/d/1j0KnUCFLyD47tS4vCUoi4Llhsu8d-6gy/view?usp=sharing" icon={<FileText />} title="Resume" />
                        <SocialLink href="https://www.linkedin.com/in/divyam-aggarwal-51b52328a/" icon={<Linkedin />} title="LinkedIn" />
                        <SocialLink href="mailto:divyamagg2005@gmail.com" icon={<Mail />} title="Email" />
                    </div>
                </motion.div>
            </div>

            {/* Floating Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown className="w-8 h-8 text-muted" />
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
        className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-full transition-all duration-300 hover:scale-110 border border-slate-600/50 hover:border-link/50 group"
        title={title}
    >
        <div className="w-6 h-6 text-body group-hover:text-link">
            {icon}
        </div>
    </a>
);

export default HeroScene;
