import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookProps {
    title: string;
    shortDescription: string;
    longDescription: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    color: string;
    height: string;
    width: string;
    delay?: number;
    onClick: () => void;
}

const Book: React.FC<BookProps> = ({
    title,
    shortDescription,
    color,
    height,
    width,
    delay = 0,
    onClick,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            style={{ width, height, position: 'relative' }}
            className="flex flex-col items-center"
        >
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
                whileHover={{ y: -10 }}
                className="cursor-pointer relative w-full h-full flex flex-col items-center justify-between py-4 transition-shadow hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                style={{
                    backgroundColor: color,
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                    borderRight: '1px solid rgba(0,0,0,0.2)',
                }}
            >
                {/* Tooltip - Strictly nested and positioned relative to the spine */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.1 }}
                            className="absolute bottom-[calc(100%+16px)] left-1/2 -translate-x-1/2 z-[60] pointer-events-none"
                        >
                            <div className="bg-slate-900 border border-slate-700 text-slate-200 text-xs px-3 py-2 rounded shadow-2xl whitespace-nowrap">
                                {shortDescription}
                                {/* Connector Arrow */}
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-r border-b border-slate-700 rotate-45" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Subtle Spine Texture/Shadow */}
                <div className="absolute inset-y-0 left-0 w-1 bg-white/10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-1 bg-black/10 pointer-events-none" />

                {/* Title (Vertical) */}
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                    <span
                        className="text-white font-sans font-medium uppercase tracking-widest text-[10px] sm:text-[12px] whitespace-nowrap"
                        style={{
                            writingMode: 'vertical-rl',
                            textOrientation: 'mixed',
                            transform: 'rotate(180deg)',
                        }}
                    >
                        {title}
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Book;
