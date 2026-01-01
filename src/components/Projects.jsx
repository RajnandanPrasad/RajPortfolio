import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const projects = [
    {
        id: 1,
        title: "Gym Management Platform",
        category: "Fitness Platform",
        problem: "Gym owners struggled with manual member tracking and subscription renewals, leading to revenue loss.",
        solution: "Built a centralized dashboard allowing owners to track attendance, automate payments, and manage member profiles efficiently.",
        features: ["Membership Plans", "Trainer Profiles", "Class Schedule", "Modern UI"],
        impact: "Streamlined membership information delivery to potential clients.",
        stack: ["React", "Tailwind CSS"],
        color: "from-blue-500 to-cyan-500",
        links: { github: "https://github.com/RajnandanPrasad/Raj-Gym", live: "https://raj-gym-psi.vercel.app/" },
        image: "/projects/gym-platform.png"
    },
    {
        id: 2,
        title: "Empire Saloon",
        category: "Service Website",
        problem: "A local saloon needed a modern online presence to display services, pricing, and attract new customers.",
        solution: "Created a stylish, responsive website showcasing services, portfolio, and contact information.",
        features: ["Service Menu", "Portfolio Gallery", "Contact Form", "Mobile Responsive"],
        impact: "Increased online visibility and customer inquiries for the business.",
        stack: ["React", "Framer Motion", "Tailwind CSS"],
        color: "from-purple-500 to-pink-500",
        links: { github: "https://github.com/RajnandanPrasad/Raj.Saloon", live: "https://rajnandanprasad.github.io/Raj.Saloon/" },
        image: "/projects/saloon-website.png"
    },
    {
        id: 3,
        title: "Craft Vistaar",
        category: "E-Commerce",
        problem: "Artisans needed a digital platform to showcase and sell unique handmade products to a global audience.",
        solution: "Developed a full-featured e-commerce platform with product catalog, cart functionality, and secure checkout.",
        features: ["Product Catalog", "Shopping Cart", "Secure Checkout", "Responsive Design"],
        impact: "Empowered local artisans to reach customers worldwide, increasing sales potential.",
        stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        color: "from-orange-500 to-amber-500",
        links: { github: "https://github.com/RajnandanPrasad/CraftVistaar", live: "https://craft-vistaar.vercel.app/" },
        image: "/projects/ecommerce-cart.png"
    }
];

const BrowserFrame = ({ children, className }) => (
    <div className={`bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-white/10 ${className}`}>
        {/* Browser Header */}
        <div className="h-8 bg-[#2d2d2d] flex items-center px-4 gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 flex-1 h-5 bg-[#1e1e1e] rounded text-[10px] text-muted flex items-center px-2 font-mono opacity-50">
                Project Preview
            </div>
        </div>
        {/* Browser Content */}
        <div className="relative">
            {children}
        </div>
    </div>
);

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const mouseX = useSpring(x);
    const mouseY = useSpring(y);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        if (isMobile) return;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function handleMouseLeave() {
        if (isMobile) return;
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    // Conditional styles for tilt
    const tiltStyle = isMobile ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" };
    const depthStyle = (depth) => isMobile ? {} : { transform: `translateZ(${depth}px)` };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
            {/* Project Details */}
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                    <span className={`h-px w-8 bg-gradient-to-r ${project.color}`}></span>
                    <span className="text-primary text-sm font-bold tracking-wider uppercase">{project.category}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h2>

                <div className="mb-8">
                    <p className="text-muted text-lg leading-relaxed mb-6">{project.solution}</p>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/5 mb-6">
                        <h4 className="flex items-center gap-2 font-bold mb-4 text-white">
                            <FaChartLine className="text-primary" /> Impact
                        </h4>
                        <p className="text-muted">{project.impact}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted">
                                <FaCheckCircle className="text-green-500/50 flex-shrink-0" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 rounded text-sm text-muted border border-white/5">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-6">
                    <a href={project.links.github} className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium group">
                        <FaGithub className="text-xl" />
                        <span className="border-b border-transparent group-hover:border-primary transition-colors">View Code</span>
                    </a>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium group">
                        <FaExternalLinkAlt className="text-lg" />
                        <span className="border-b border-transparent group-hover:border-primary transition-colors">Live Demo</span>
                    </a>
                </div>
            </div>

            {/* Project Visual with Tilt & Browser Frame */}
            <motion.div
                style={tiltStyle}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}
            >
                <div style={depthStyle(20)}>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                        <BrowserFrame className="aspect-video relative group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] transition-shadow duration-500 overflow-hidden">
                            {/* Static Image Fallback (User Preference over Iframe) */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 z-20 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    Visit Site <FaExternalLinkAlt className="inline-block ml-2 text-xl" />
                                </h3>
                            </div>
                        </BrowserFrame>
                    </a>
                </div>

            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32 bg-card/20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-16 md:mb-24"
                >
                    <h2 className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Selected Work</h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
                    <p className="text-xl text-muted max-w-2xl">
                        I don't just build websites; I build digital products that solve real business problems.
                        Here are a few projects that demonstrate my engineering approach.
                    </p>
                </motion.div>

                <div className="space-y-24 md:space-y-40">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
