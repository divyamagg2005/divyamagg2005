import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Book from './Book';
import Modal from './ui/Modal';

const BOOKS_DATA = [
    {
        id: "p1",
        title: "Project One",
        metadata: "2025 · AI",
        shortDescription: "Description for Project One",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStack: ["React", "Python", "Gemini API"],
        color: "#2D3436",
        height: "280px",
        width: "45px",
    },
    {
        id: "p2",
        title: "Project Two",
        metadata: "WEB",
        shortDescription: "Description for Project Two",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStack: ["Next.js", "Tailwind", "Supabase"],
        color: "#636E72",
        height: "320px",
        width: "55px",
    },
    {
        id: "p3",
        title: "Project Three",
        metadata: "SYSTEMS",
        shortDescription: "Description for Project Three",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStack: ["C++", "Arduino", "IoT"],
        color: "#2C3E50",
        height: "260px",
        width: "40px",
    },
    {
        id: "p4",
        title: "Project Four",
        metadata: "2024 · ML",
        shortDescription: "Description for Project Four",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStack: ["PyTorch", "NumPy", "Pandas"],
        color: "#34495E",
        height: "300px",
        width: "50px",
    },
    {
        id: "p5",
        title: "Project Five",
        metadata: "MOBILE",
        shortDescription: "Description for Project Five",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStack: ["React Native", "Expo", "Firebase"],
        color: "#7F8C8D",
        height: "310px",
        width: "48px",
    },
    {
        id: "p6",
        title: "Project Six",
        metadata: "DESKTOP",
        shortDescription: "Description for Project Six",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStack: ["Electron", "React", "Node.js"],
        color: "#57606F",
        height: "290px",
        width: "42px",
    },
    {
        id: "p7",
        title: "Project Seven",
        metadata: "2023 · WEB",
        shortDescription: "Description for Project Seven",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStack: ["Django", "PostgreSQL", "React"],
        color: "#2F3542",
        height: "340px",
        width: "60px",
    },
    {
        id: "p8",
        title: "Project Eight",
        metadata: "SECURITY",
        shortDescription: "Description for Project Eight",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStack: ["Python", "Cryptography", "Bash"],
        color: "#747D8C",
        height: "270px",
        width: "44px",
    },
    {
        id: "p9",
        title: "Project Nine",
        metadata: "WEB 3",
        shortDescription: "Description for Project Nine",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStack: ["Solidity", "Ethers.js", "Hardhat"],
        color: "#535C68",
        height: "285px",
        width: "46px",
    },
    {
        id: "p10",
        title: "Project Ten",
        metadata: "TOOLS",
        shortDescription: "Description for Project Ten",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStack: ["Go", "Docker", "Kubernetes"],
        color: "#30336B",
        height: "315px",
        width: "52px",
    },
    {
        id: "p11",
        title: "Project Eleven",
        metadata: "2025 · FUN",
        shortDescription: "Description for Project Eleven",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        techStack: ["Three.js", "React Three Fiber"],
        color: "#130F40",
        height: "305px",
        width: "50px",
    }
];

const Bookshelf: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<typeof BOOKS_DATA[0] | null>(null);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden relative">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-16 text-center z-10"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading tracking-tight uppercase">
                    Projects
                </h2>
            </motion.div>

            {/* Main Container */}
            <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
                {/* Books Container */}
                <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4 px-4 z-10 w-full">
                    {BOOKS_DATA.map((project, index) => (
                        <Book
                            key={project.id}
                            {...project}
                            delay={index * 0.05}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                {/* The Shelf Line */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    className="h-[2px] bg-white/10 mt-0 shadow-[0_4px_10px_rgba(255,255,255,0.05)] w-full max-w-4xl"
                />

                {/* Subtle ground shadow under shelf */}
                <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-[80%] h-24 bg-gradient-to-b from-white/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
            </div>

            {/* Modal Overlay */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title || ""}
                longDescription={selectedProject?.longDescription || ""}
                techStack={selectedProject?.techStack || []}
                // Placeholders for now as per requirements
                liveUrl="#"
                githubUrl="#"
            />
        </div>
    );
};

export default Bookshelf;
