import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './ui/Modal';

const PROJECTS_DATA = [
    {
        id: "p1",
        title: "AI-Powered Code Assistant",
        shortDescription: "An intelligent code completion tool using machine learning to understand context and suggest improvements.",
        longDescription: "This project leverages advanced natural language processing and machine learning algorithms to provide context-aware code suggestions. It analyzes your coding patterns, understands the project structure, and offers intelligent completions that go beyond simple syntax matching. The system learns from your preferences and adapts over time.",
        techStack: ["React", "Python", "TensorFlow", "FastAPI"],
        liveUrl: "#",
        githubUrl: "#",
        minHeight: "240px",
    },
    {
        id: "p2",
        title: "Real-Time Collaboration Platform",
        shortDescription: "A seamless workspace for teams to collaborate on documents, code, and designs simultaneously.",
        longDescription: "Built with modern web technologies, this platform enables real-time collaboration across multiple users. Features include live cursor tracking, conflict-free editing with operational transformation, integrated video chat, and comprehensive version control. The architecture supports thousands of concurrent users with minimal latency.",
        techStack: ["Next.js", "WebSocket", "Redis", "PostgreSQL"],
        liveUrl: "#",
        githubUrl: "#",
        minHeight: "280px",
    },
    {
        id: "p3",
        title: "Smart Home Dashboard",
        shortDescription: "Unified control interface for IoT devices with energy monitoring and automation.",
        longDescription: "A comprehensive dashboard that aggregates data from various IoT devices and presents it through an intuitive interface. Features include real-time energy consumption tracking, automated scheduling based on usage patterns, and intelligent alerts for anomalies. The system is extensible and supports a wide range of smart home protocols.",
        techStack: ["Vue.js", "Node.js", "MQTT", "InfluxDB"],
        liveUrl: "#",
        githubUrl: "#",
        minHeight: "260px",
    },
    {
        id: "p4",
        title: "E-Commerce Analytics Engine",
        shortDescription: "Advanced analytics platform providing actionable insights from sales data.",
        longDescription: "This engine processes millions of transactions to generate meaningful insights about customer behavior, product performance, and market trends. It includes predictive analytics for inventory management, customer segmentation using clustering algorithms, and automated reporting with customizable dashboards.",
        techStack: ["React", "Django", "Apache Spark", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
        minHeight: "220px",
    },
    {
        id: "p5",
        title: "Blockchain Voting System",
        shortDescription: "Secure and transparent voting platform leveraging blockchain technology.",
        longDescription: "A decentralized voting system that ensures transparency, immutability, and voter anonymity. Each vote is recorded as a transaction on the blockchain, making the process verifiable yet maintaining voter privacy through zero-knowledge proofs. The system includes identity verification and comprehensive audit trails.",
        techStack: ["Solidity", "Ethers.js", "React", "IPFS"],
        liveUrl: "#",
        githubUrl: "#",
        minHeight: "300px",
    },
    {
        id: "p6",
        title: "Fitness Tracking Mobile App",
        shortDescription: "Cross-platform app for tracking workouts, nutrition, and health metrics.",
        longDescription: "A comprehensive fitness companion that syncs with wearable devices and provides personalized workout recommendations. Features include meal planning with nutritional analysis, progress visualization, social challenges, and integration with popular health platforms. The app uses machine learning to adapt recommendations based on user progress.",
        techStack: ["React Native", "Firebase", "TensorFlow Lite"],
        liveUrl: "#",
        githubUrl: "#",
        minHeight: "270px",
    },
    {
        id: "p7",
        title: "Content Recommendation Engine",
        shortDescription: "Personalized content discovery using collaborative filtering and deep learning.",
        longDescription: "An advanced recommendation system that combines collaborative filtering with deep learning models to suggest relevant content. The engine analyzes user behavior, content metadata, and contextual signals to provide highly personalized recommendations. It supports A/B testing and continuously improves through user feedback.",
        techStack: ["Python", "PyTorch", "Redis", "Elasticsearch"],
        liveUrl: "#",
        githubUrl: "#",
        minHeight: "250px",
    },
    {
        id: "p8",
        title: "Cloud Infrastructure Monitor",
        shortDescription: "Real-time monitoring and alerting system for cloud infrastructure.",
        longDescription: "A comprehensive monitoring solution that tracks metrics across multiple cloud providers. Features include customizable dashboards, intelligent alerting with anomaly detection, automated incident response, and cost optimization recommendations. The system scales horizontally and processes millions of metrics per minute.",
        techStack: ["Go", "Prometheus", "Grafana", "Kubernetes"],
        liveUrl: "#",
        githubUrl: "#",
        minHeight: "230px",
    },
    {
        id: "p9",
        title: "Natural Language Query Interface",
        shortDescription: "Convert natural language questions into database queries with high accuracy.",
        longDescription: "This system uses transformer models to translate natural language questions into SQL queries. It understands context, handles complex joins, and supports multiple database dialects. The interface includes query explanation, result visualization, and learning from corrections to improve accuracy over time.",
        techStack: ["Python", "Transformers", "FastAPI", "PostgreSQL"],
        liveUrl: "#",
        githubUrl: "#",
        minHeight: "290px",
    },
    {
        id: "p10",
        title: "Video Streaming Platform",
        shortDescription: "Scalable video streaming service with adaptive bitrate and live streaming.",
        longDescription: "A complete video streaming solution supporting both on-demand and live content. Features include adaptive bitrate streaming, CDN integration, DRM support, and AI-powered content moderation. The platform handles encoding, transcoding, and delivery optimization for millions of concurrent viewers.",
        techStack: ["React", "Node.js", "FFmpeg", "AWS MediaLive"],
        liveUrl: "#",
        githubUrl: "#",
        minHeight: "260px",
    },
    {
        id: "p11",
        title: "Automated Testing Framework",
        shortDescription: "Intelligent test generation and execution framework for web applications.",
        longDescription: "This framework uses machine learning to automatically generate test cases based on application behavior. It includes visual regression testing, cross-browser compatibility checks, and intelligent test prioritization. The system learns from failures and adapts test strategies to maximize coverage while minimizing execution time.",
        techStack: ["TypeScript", "Playwright", "Jest", "Docker"],
        liveUrl: "#",
        githubUrl: "#",
        minHeight: "240px",
    },
];

const ProjectsSection: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<typeof PROJECTS_DATA[0] | null>(null);

    // Filter to top 6 projects to ensure scroll-free fit
    const visibleProjects = PROJECTS_DATA.slice(0, 6);
    const leftColumnProjects = visibleProjects.slice(0, 3);
    const rightColumnProjects = visibleProjects.slice(3, 6);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden px-4 py-8 relative">

            {/* Grid Container - Scroll Free */}
            <div className="w-full max-w-7xl h-full flex flex-col lg:grid lg:grid-cols-3 gap-8 items-center justify-center relative z-10">

                {/* Mobile Title (Visible < lg) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex lg:hidden flex-col items-center justify-center mb-4 text-center shrink-0"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-heading tracking-tight uppercase drop-shadow-2xl">
                        Projects
                    </h2>
                    <div className="w-16 h-1 bg-link mt-4 rounded-full opacity-80" />
                </motion.div>

                {/* Left Column (Desktop: 3 Cards, Mobile: Stack of cards) */}
                <div className="flex flex-col gap-4 w-full h-full lg:h-auto justify-center overflow-visible">
                    {leftColumnProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="
                                group 
                                relative
                                bg-gradient-to-br from-slate-900/80 to-slate-800/40 
                                backdrop-blur-md 
                                border border-slate-700/50 
                                rounded-xl 
                                p-5
                                cursor-pointer 
                                transition-all 
                                duration-300 
                                hover:-translate-y-1 
                                hover:translate-x-1
                                hover:shadow-2xl 
                                hover:shadow-link/10
                                hover:border-link/50 
                            "
                        >
                            <h3 className="text-lg font-bold text-heading mb-1 group-hover:text-link transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-xs text-body line-clamp-2">
                                {project.shortDescription}
                            </p>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-link">
                                →
                            </div>
                        </motion.div>
                    ))}
                    {/* Mobile Only: Render Right column items here too if stacked, 
                        or just keep to top 3 for mobile simplicity? 
                        Let's render them all in one col for mobile if space permits, 
                        or hide overflow. Constraints say "Responsive behavior can stack".
                        I'll add the right column items below for mobile only so they aren't lost.
                    */}
                    <div className="flex lg:hidden flex-col gap-4 w-full">
                        {rightColumnProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                                onClick={() => setSelectedProject(project)}
                                className="
                                    group 
                                    bg-gradient-to-br from-slate-900/80 to-slate-800/40 
                                    backdrop-blur-md 
                                    border border-slate-700/50 
                                    rounded-xl 
                                    p-5
                                    cursor-pointer 
                                "
                            >
                                <h3 className="text-lg font-bold text-heading mb-1">
                                    {project.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Center Column: TITLE (Desktop Only) - The Anchor */}
                <div className="hidden lg:flex flex-col items-center justify-center h-full text-center relative pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-20"
                    >
                        <h2 className="text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-heading via-heading to-slate-500 tracking-tighter uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
                            Projects
                        </h2>
                        <div className="w-1 h-24 bg-gradient-to-b from-link to-transparent mx-auto mt-8 rounded-full" />
                    </motion.div>
                </div>

                {/* Right Column (Desktop: 3 Cards) */}
                <div className="hidden lg:flex flex-col gap-4 w-full h-full lg:h-auto justify-center">
                    {rightColumnProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="
                                group 
                                relative
                                bg-gradient-to-br from-slate-900/80 to-slate-800/40 
                                backdrop-blur-md 
                                border border-slate-700/50 
                                rounded-xl 
                                p-5
                                text-right
                                cursor-pointer 
                                transition-all 
                                duration-300 
                                hover:-translate-y-1 
                                hover:-translate-x-1
                                hover:shadow-2xl 
                                hover:shadow-link/10
                                hover:border-link/50 
                            "
                        >
                            <h3 className="text-lg font-bold text-heading mb-1 group-hover:text-link transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-xs text-body line-clamp-2">
                                {project.shortDescription}
                            </p>
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-link">
                                ←
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Modal Overlay */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title || ""}
                longDescription={selectedProject?.longDescription || ""}
                techStack={selectedProject?.techStack || []}
                liveUrl={selectedProject?.liveUrl || "#"}
                githubUrl={selectedProject?.githubUrl || "#"}
            />
        </div>
    );
};

export default ProjectsSection;
