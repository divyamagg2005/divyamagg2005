import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    longDescription: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    longDescription,
    techStack,
    liveUrl,
    githubUrl,
}) => {
    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-heading uppercase tracking-tight">{title}</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-800 rounded-full transition-colors text-muted hover:text-heading"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-8 space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-sm font-mono text-muted uppercase tracking-widest">Description</h3>
                                <p className="text-body leading-relaxed text-lg font-sans font-light">
                                    {longDescription}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-sm font-mono text-muted uppercase tracking-widest">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-slate-800 border border-slate-700 text-body text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-slate-900/50 border-t border-slate-800 flex gap-4">
                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors"
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                            )}
                            {githubUrl && (
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 border rounded-xl transition-colors ${liveUrl
                                        ? 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
                                        : 'bg-white text-black font-bold hover:bg-slate-200'
                                        }`}
                                >
                                    <Github size={18} />
                                    GitHub Repo
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
