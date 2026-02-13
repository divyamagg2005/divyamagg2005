
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const Qualifications = () => {
    const educationData = [
        { year: '2023–2027', institution: 'VIT Vellore', score: 'CGPA: 8.81' },
        { year: '2023', institution: 'Mayo International School', score: '93.8%' },
        { year: '2021', institution: 'St. Mary\'s School', score: '93.8%' },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-center px-4 md:px-8 lg:px-12 py-20 overflow-y-auto custom-scrollbar">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 flex-shrink-0"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-heading">
                    Qualifications & Leadership
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
                {/* Left Column: Education & Certifications */}
                <div className="space-y-8">
                    {/* Education Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="flex items-center mb-6">
                            <GraduationCap className="w-6 h-6 text-link mr-3" />
                            <h3 className="text-2xl font-bold text-heading">Education</h3>
                        </div>
                        <div className="space-y-4">
                            {educationData.map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 flex items-center justify-between hover:border-link/50 transition-all duration-300"
                                >
                                    <div>
                                        <h4 className="text-lg font-semibold text-heading">{edu.institution}</h4>
                                        <p className="text-body text-sm">{edu.year}</p>
                                    </div>
                                    <div className="text-link font-semibold whitespace-nowrap ml-4">
                                        {edu.score}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center mb-6">
                            <Award className="w-6 h-6 text-link mr-3" />
                            <h3 className="text-2xl font-bold text-heading">Certifications</h3>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h4 className="text-lg font-bold text-heading">IBM Generative AI Specialization</h4>
                                    <p className="text-body text-sm mt-1">Score: 97/100 • Issued by IBM</p>
                                </div>
                                <a
                                    href="https://drive.google.com/file/d/1wvgG0pRaP422fNMEcPwCsOlU0Y4_6QFr/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-link/10 hover:bg-link/20 text-link text-sm rounded-lg transition-colors border border-link/50 whitespace-nowrap"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Leadership */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="h-full"
                >
                    <div className="flex items-center mb-6">
                        <Award className="w-6 h-6 text-link mr-3" />
                        <h3 className="text-2xl font-bold text-heading">Leadership</h3>
                    </div>
                    <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 h-full flex flex-col">
                        <h3 className="text-xl font-bold text-heading mb-4">ADGVIT - Finance Head (Board Member)</h3>
                        <ul className="space-y-4 text-body flex-grow">
                            <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-link rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>Led sponsorship strategy and negotiations, securing funding for flagship events like iOS Fusion 7.0.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-link rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>Successfully invited Pragya Muthuraman (Founder, The Internet Company) as keynote speaker for Yantra 2025.</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-link rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>Managed speaker relations for iOS Fusion 8.0, interacting with industry leaders like Amrit Raj (Co-Founder, Women in Product India).</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-link rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>Collaborated with cross-functional teams to plan budgets and allocate funds for community workshops.</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Qualifications;
