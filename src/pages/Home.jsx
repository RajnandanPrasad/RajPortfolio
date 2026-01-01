import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin, FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skills = [
    { category: "Frontend", icon: <FaCode />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", icon: <FaServer />, items: ["Node.js", "Express", "Python", "API Design"] },
    { category: "Database", icon: <FaDatabase />, items: ["MongoDB", "PostgreSQL", "Redis"] },
    { category: "Tools", icon: <FaTools />, items: ["Git", "Docker", "AWS", "Vercel"] },
];

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center pt-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-green-400 uppercase bg-green-500/10 rounded-full border border-green-500/20">
                            Actively seeking entry-level / junior full-stack roles
                        </div>
                        <h2 className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Software Engineer & Freelance Developer</h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Building scalable systems <br />
                            <span className="text-muted">that drive business growth.</span>
                        </h1>
                        <p className="text-xl text-muted mb-8 max-w-2xl leading-relaxed">
                            I help startups and businesses build modern, fast, and reliable web applications.
                            Focusing on clean code, performance, and real-world results.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/projects" className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                                View Projects
                            </Link>
                            <Link to="/contact" className="px-8 py-4 border border-white/10 rounded-lg font-medium hover:bg-white/5 transition-colors">
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About / Skills Section */}
            <section className="py-20 bg-card/30 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">About Me</h3>
                            <p className="text-muted leading-relaxed mb-6">
                                I am a Computer Science Engineer with a passion for building software that solves real problems.
                                With experience in both startup environments and freelance projects, I bring a product-engineering mindset to every codebase.
                            </p>
                            <p className="text-muted leading-relaxed">
                                I don't just write code; I design systems that are scalable, maintainable, and future-proof.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex items-center gap-2 mb-4 text-primary">
                                        {skill.icon}
                                        <h4 className="font-bold">{skill.category}</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        {skill.items.map((item, i) => (
                                            <li key={i} className="text-muted text-sm border-l-2 border-white/10 pl-3">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Featured Work</h2>
                            <p className="text-muted">Selected projects that demonstrate my engineering approach.</p>
                        </div>
                        <Link to="/projects" className="hidden md:flex items-center gap-2 text-primary hover:text-blue-400 transition-colors">
                            View All <FaArrowRight />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Project Card 1 */}
                        <div className="group cursor-pointer">
                            <div className="h-64 bg-card rounded-xl overflow-hidden mb-6 border border-white/5">
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-500"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Gym Management System</h3>
                            <p className="text-muted text-sm mb-4">A comprehensive platform for gym owners to manage members and subscriptions.</p>
                            <div className="flex gap-2">
                                <span className="text-xs px-2 py-1 bg-white/5 rounded text-muted">React</span>
                                <span className="text-xs px-2 py-1 bg-white/5 rounded text-muted">Node.js</span>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className="group cursor-pointer">
                            <div className="h-64 bg-card rounded-xl overflow-hidden mb-6 border border-white/5">
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-500"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">E-Commerce Cart Engine</h3>
                            <p className="text-muted text-sm mb-4">High-performance shopping cart with real-time inventory checks.</p>
                            <div className="flex gap-2">
                                <span className="text-xs px-2 py-1 bg-white/5 rounded text-muted">Next.js</span>
                                <span className="text-xs px-2 py-1 bg-white/5 rounded text-muted">Redux</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/projects" className="inline-flex items-center gap-2 text-primary">
                            View All Projects <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary/10 border-t border-white/5 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Ready to start a project?</h2>
                    <p className="text-muted max-w-xl mx-auto mb-8">
                        Whether you need a landing page, a web application, or technical consulting, I'm here to help.
                    </p>
                    <Link to="/contact" className="px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors">
                        Let's Talk
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
