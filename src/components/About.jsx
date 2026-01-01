import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skills = [
    { category: "Frontend", icon: <FaCode />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", icon: <FaServer />, items: ["Node.js", "Express", "Python"] },
    { category: "Database", icon: <FaDatabase />, items: ["MongoDB"] },
    { category: "Tools", icon: <FaTools />, items: ["Git", "Docker", "AWS", "Vercel"] },
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-card/30 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                            About Me
                        </h3>
                        <p className="text-muted leading-relaxed mb-6 text-lg">
                            I am a Computer Science Engineer with a passion for building software that solves real problems.
                            With experience in both startup environments and freelance projects, I bring a product-engineering mindset to every codebase.
                        </p>
                        <p className="text-muted leading-relaxed text-lg">
                            I don't just write code; I design systems that are scalable, maintainable, and future-proof.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="flex items-center gap-2 mb-4 text-primary">
                                    {skill.icon}
                                    <h4 className="font-bold">{skill.category}</h4>
                                </div>
                                <ul className="space-y-2">
                                    {skill.items.map((item, i) => (
                                        <li key={i} className="text-muted text-sm border-l-2 border-white/10 pl-3 hover:border-primary transition-colors cursor-default">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
