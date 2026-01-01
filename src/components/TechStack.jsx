import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiGraphql } from 'react-icons/si';

const techs = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaPython />, name: "Python" },
];

const TechStack = () => {
    return (
        <section className="py-10 border-y border-white/5 bg-black/20 overflow-hidden">
            <div className="flex">
                <motion.div
                    className="flex gap-16 px-8"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {[...techs, ...techs].map((tech, index) => (
                        <div key={index} className="flex items-center gap-2 text-muted hover:text-primary transition-colors whitespace-nowrap">
                            <span className="text-2xl">{tech.icon}</span>
                            <span className="font-semibold">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex gap-16 px-8"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {[...techs, ...techs].map((tech, index) => (
                        <div key={index} className="flex items-center gap-2 text-muted hover:text-primary transition-colors whitespace-nowrap">
                            <span className="text-2xl">{tech.icon}</span>
                            <span className="font-semibold">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
