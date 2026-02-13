import React, { useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import Modal from './ui/Modal';

gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    techStack: string[];
    github: string;
    deployed: string | null;
}

const PROJECTS: Project[] = [
    {
        id: 'p1',
        name: 'Smart Email',
        description: 'AI-driven email classification and response system.',
        longDescription: 'Smart Email leverages natural language processing to categorize incoming emails and suggest context-aware responses. It integrates with major email providers to streamline inbox management and improve productivity.',
        techStack: ['Python', 'NLP', 'React', 'FastAPI'],
        github: 'https://github.com/divyamagg2005/smart-email', // Placeholder pattern
        deployed: null,
    },
    {
        id: 'p2',
        name: 'Web Gladiator',
        description: 'Interactive coding competition platform.',
        longDescription: 'Web Gladiator is a real-time coding battle arena where developers compete in algorithmic challenges. Features include live leaderboards, code execution sandbox, and spectator mode.',
        techStack: ['Node.js', 'Socket.io', 'Docker', 'React'],
        github: 'https://github.com/divyamagg2005/web-gladiator',
        deployed: 'https://web-gladiator.demo', // Placeholder
    },
    {
        id: 'p3',
        name: 'Heart Rate',
        description: 'Non-invasive heart rate monitoring via webcam.',
        longDescription: 'A computer vision application that estimates heart rate by analyzing subtle color changes in facial skin caused by blood flow, using standard webcams without additional hardware.',
        techStack: ['Python', 'OpenCV', 'Face Mesh', 'NumPy'],
        github: 'https://github.com/divyamagg2005/heart-rate',
        deployed: null,
    },
    {
        id: 'p4',
        name: 'Insta AI Agent',
        description: 'Automated social media engagement bot.',
        longDescription: 'An AI agent designed to manage Instagram interactions, including automated replies, content scheduling, and engagement analysis using computer vision for image content understanding.',
        techStack: ['Python', 'Selenium', 'OpenAI API', 'Flask'],
        github: 'https://github.com/divyamagg2005/insta-ai-agent',
        deployed: null,
    },
    {
        id: 'p5',
        name: 'AI Chatbot',
        description: 'Context-aware conversational AI assistant.',
        longDescription: 'A sophisticated chatbot capable of maintaining context over long conversations, understanding intent, and performing specific tasks. Built with a modular architecture for easy integration.',
        techStack: ['LLM', 'LangChain', 'Vector DB', 'Next.js'],
        github: 'https://github.com/divyamagg2005/ai-chatbot',
        deployed: 'https://chatbot.demo',
    },
    {
        id: 'p6',
        name: 'Confession ADG',
        description: 'Anonymous community sharing platform.',
        longDescription: 'A secure, anonymous platform for community members to share thoughts and confessions. Includes moderation tools, keyword filtering, and engagement features.',
        techStack: ['React', 'Firebase', 'TailwindCSS'],
        github: 'https://github.com/divyamagg2005/confession-adg',
        deployed: 'https://confession-adg.vercel.app',
    },
    {
        id: 'p7',
        name: 'Hostel Grid',
        description: 'Comprehensive hostel management solution.',
        longDescription: 'A complete management system for hostels, handling room allocation, automated billing, complaint tracking, and student attendance with a user-friendly dashboard.',
        techStack: ['MERN', 'Redux', 'Material UI'],
        github: 'https://github.com/divyamagg2005/hostel-grid',
        deployed: 'https://hostel-grid.demo',
    },
    {
        id: 'p8',
        name: 'Pinspire',
        description: 'Visual discovery and curation engine.',
        longDescription: 'A visually rich platform for discovering and organizing creative ideas. Users can create boards, pin images, and explore trending content with a masonry layout interface.',
        techStack: ['Vue.js', 'Masonry', 'GraphQL', 'AWS S3'],
        github: 'https://github.com/divyamagg2005/pinspire',
        deployed: 'https://pinspire.demo',
    },
    {
        id: 'p9',
        name: 'Termigenius',
        description: 'Terminal-based developer productivity suite.',
        longDescription: 'A CLI tool that bundles various developer utilities, including file manipulation, git enhancements, and system monitoring, all accessible via a unified terminal interface.',
        techStack: ['Rust', 'CLI', 'Terminal UI'],
        github: 'https://github.com/divyamagg2005/termigenius',
        deployed: null,
    },
    {
        id: 'p10',
        name: 'Knowanything',
        description: 'Knowledge graph generation from text.',
        longDescription: 'An educational tool that converts uploaded documents or text into interactive knowledge graphs, helping users visualize connections between concepts.',
        techStack: ['Python', 'Neo4j', 'Spacy', 'D3.js'],
        github: 'https://github.com/divyamagg2005/knowanything',
        deployed: 'https://knowanything.demo',
    },
    {
        id: 'p11',
        name: 'Devsphere',
        description: 'Social network for developers.',
        longDescription: 'A niche social platform for developers to share code snippets, write technical blogs, and find collaborators for side projects. Features syntax highlighting and GitHub integration.',
        techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
        github: 'https://github.com/divyamagg2005/devsphere',
        deployed: 'https://devsphere.demo',
    },
];

const HorizontalProjects: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;
            const trigger = triggerRef.current;
            const container = containerRef.current;

            if (!track || !trigger || !container) return;

            // Calculate total scroll distance needed
            const totalWidth = track.scrollWidth;
            const viewportWidth = container.clientWidth;
            const scrollDist = totalWidth - viewportWidth;

            // Horizontal Scroll Animation
            gsap.to(track, {
                x: -scrollDist,
                ease: 'none',
                scrollTrigger: {
                    trigger: trigger, // The tall container driving the scroll
                    scroller: container, // The scrollable wrapper
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                    pin: false, // We use sticky positioning instead of pin for better control in nested scrollers
                    invalidateOnRefresh: true,
                },
            });
        }, containerRef); // Scope to container

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full overflow-y-auto overflow-x-hidden bg-transparent relative custom-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
        >
            {/* Tall trigger container to create scroll space */}
            <div ref={triggerRef} className="h-[500vh] relative">

                {/* Sticky Viewport */}
                <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">

                    {/* Header - Flow Content */}
                    <div className="relative z-20 mb-12 md:mb-20 text-center w-full -translate-y-12 md:-translate-y-15">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 tracking-tighter uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
                                PROJECTS
                            </h2>
                        </motion.div>
                    </div>

                    {/* Horizontal Track */}
                    <div
                        ref={trackRef}
                        className="flex items-center gap-12 md:gap-24 px-[15vw] md:px-[35vw] lg:px-[39vw] w-max"
                    >
                        {PROJECTS.map((project, index) => {
                            // Wave Animation Logic
                            const isEven = index % 2 === 0;
                            // Projects 1 (index 0) is Odd visually -> Up (-translate-y-12)
                            // Projects 2 (index 1) is Even visually -> Down (translate-y-12)
                            // Wait, index 0 is first item. Request says:
                            // "Odd projects (1st, 3rd...): Slightly up"
                            // "Even projects (2nd, 4th...): Slightly down"
                            // Index 0 is 1st project (Odd) -> Up
                            const yOffset = isEven ? '-translate-y-12' : 'translate-y-12';

                            return (
                                <div
                                    key={project.id}
                                    className={`
                    relative group w-[70vw] md:w-[30vw] lg:w-[22vw] shrink-0
                    ${yOffset} transition-transform duration-500 ease-out
                  `}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Card Content - Borderless, Minimal */}
                                    <div className="
                    relative
                    bg-white/5 md:bg-white/10
                    backdrop-blur-md
                    rounded-3xl
                    p-6 md:p-8
                    shadow-2xl shadow-black/50
                    hover:shadow-blue-500/20
                    transition-all duration-500
                    cursor-pointer
                    h-[320px] flex flex-col justify-center items-center text-center
                    group-hover:-translate-y-2
                  ">
                                        {/* Content Centered */}
                                        <div className="space-y-4">
                                            <div className="inline-flex justify-center items-center p-3 bg-slate-800/50 rounded-2xl text-blue-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                                                <Layers size={24} />
                                            </div>

                                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                                                {project.name}
                                            </h3>

                                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 px-2">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                                                {project.techStack.slice(0, 3).map((tech) => (
                                                    <span key={tech} className="text-[10px] font-medium text-slate-300 bg-slate-800/80 px-2 py-1 rounded-full">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.techStack.length > 3 && (
                                                    <span className="text-[10px] font-medium text-slate-500 bg-slate-800/30 px-2 py-1 rounded-full">
                                                        +{project.techStack.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Hover Overlay/Indicator */}
                                        <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-blue-500/30 transition-colors duration-500 pointer-events-none" />

                                        <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-blue-400 font-medium flex items-center gap-2">
                                            View Project <ExternalLink size={16} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.name || ''}
                longDescription={selectedProject?.longDescription || ''}
                techStack={selectedProject?.techStack || []}
                liveUrl={selectedProject?.deployed || undefined}
                githubUrl={selectedProject?.github}
            />
        </div>
    );
};

export default HorizontalProjects;
