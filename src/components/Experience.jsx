import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const experiences = [
    {
        id: 1,
        role: "Independent Projects & Client Work",
        company: "Self-Employed",
        period: "2026 - Present",
        description: "Working on end-to-end full-stack web applications to solve real-world problems and simulate production-level workflows. Focused on building scalable frontend interfaces and REST APIs using modern JavaScript frameworks.",
        icon: <FaLaptopCode />,
        tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"]
    },
    {
        id: 3,
        role: "B.Tech in Computer Science",
        company: "Amity University",
        period: "2022 - 2026",
        description: "Focused on Data Structures, Algorithms, and System Design.",
        icon: <FaGraduationCap />,
        tags: ["DSA", "System Design", "OS", "Networks"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-12 md:mb-20"
                >
                    <h2 className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">My Journey</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h1>
                    <p className="text-xl text-muted">
                        A timeline of my professional growth and technical milestones.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line - Left on mobile, Center on desktop */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-purple-500/50 to-transparent md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot - Left on mobile, Center on desktop */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-dark border-2 border-primary rounded-full translate-y-1.5 -translate-x-1.5 md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                                {/* Content Card */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                                    <div className="bg-card p-6 md:p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                            <div className="p-3 bg-white/5 rounded-lg text-primary text-xl group-hover:scale-110 transition-transform duration-300">
                                                {exp.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                                                <p className="text-primary text-sm font-medium">{exp.company}</p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted mb-4 font-mono bg-black/30 inline-block px-2 py-1 rounded border border-white/5">
                                            {exp.period}
                                        </p>

                                        <p className="text-muted leading-relaxed mb-6 text-sm md:text-base">
                                            {exp.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                                            {exp.tags.map((tag, i) => (
                                                <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded text-muted border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
