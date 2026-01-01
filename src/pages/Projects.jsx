import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Gym Management Platform",
        category: "Web Application",
        problem: "Gym owners struggled with manual member tracking and subscription renewals, leading to revenue loss.",
        solution: "Built a centralized dashboard allowing owners to track attendance, automate payments, and manage member profiles efficiently.",
        stack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
        links: { github: "#", live: "https://raj-gym-psi.vercel.app/" },
        image: "/projects/gym-platform.png"
    },
    {
        id: 2,
        title: "Empire Saloon",
        category: "Service Website",
        problem: "Local salon needed a premium digital presence to showcase styles and accept bookings online.",
        solution: "Designed a luxury-themed responsive website with service menu, stylist portfolio, and contact integration.",
        stack: ["React", "Framer Motion", "Tailwind CSS"],
        links: { github: "#", live: "https://rajnandanprasad.github.io/Raj.Saloon/" },
        image: "/projects/saloon-website.png"
    },
    {
        id: 3,
        title: "Craft Vistaar",
        category: "E-Commerce",
        problem: "Artisans needed a global platform to sell authentic handmade products with seamless transaction flow.",
        solution: "Engineered a high-performance e-commerce platform with cart management, secure checkout, and product filtering.",
        stack: ["Next.js", "Redux Toolkit", "Stripe API"],
        links: { github: "#", live: "https://craft-vistaar-gllbl1j95-rajnandan-prasads-projects.vercel.app/" },
        image: "/projects/ecommerce-cart.png"
    }
];

const Projects = () => {
    return (
        <section className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
                    <p className="text-xl text-muted">
                        A selection of projects where I've applied engineering principles to solve real-world problems.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-white/5 pt-12"
                        >
                            {/* Project Details */}
                            <div className={`order-${index % 2 === 0 ? '1' : '2 lg:order-1'}`}>
                                <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">{project.category}</span>
                                <h2 className="text-3xl font-bold mb-6">{project.title}</h2>

                                <div className="mb-8 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-colors">
                                    <h3 className="text-lg font-semibold mb-2 text-white">The Problem</h3>
                                    <p className="text-muted leading-relaxed mb-4">{project.problem}</p>
                                    <h3 className="text-lg font-semibold mb-2 text-white">The Solution</h3>
                                    <p className="text-muted leading-relaxed">{project.solution}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-muted border border-white/10 hover:bg-white/10 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6">
                                    <a href={project.links.github} className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium group">
                                        <FaGithub className="text-xl group-hover:scale-110 transition-transform" /> View Code
                                    </a>
                                    <a href={project.links.live} className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium group">
                                        <FaExternalLinkAlt className="text-lg group-hover:scale-110 transition-transform" /> Live Demo
                                    </a>
                                </div>
                            </div>

                            {/* Project Visual */}
                            <div className={`order-${index % 2 === 0 ? '2' : '1 lg:order-2'}`}>
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-card rounded-xl overflow-hidden aspect-video border border-white/10 relative group shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                                >
                                    {/* Loading / Fallback Background */}
                                    <div className="absolute inset-0 bg-black/20 z-0">
                                        <div className="flex flex-col items-center justify-center h-full text-muted text-sm gap-2">
                                            <span>Loading Preview...</span>
                                            <span className="text-xs opacity-50">(Click to view live site)</span>
                                        </div>
                                    </div>

                                    {/* Live Website Preview */}
                                    <iframe
                                        src={project.links.live}
                                        title={project.title}
                                        className="w-[200%] h-[200%] transform scale-50 origin-top-left absolute inset-0 z-10 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500"
                                        style={{ border: 'none' }}
                                        loading="lazy"
                                        sandbox="allow-scripts allow-same-origin"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 z-20 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                        <span className="px-6 py-3 bg-primary text-background font-bold rounded-full transform scale-90 group-hover:scale-100 transition-all duration-300 flex items-center gap-2">
                                            Visit Live Site <FaExternalLinkAlt />
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
