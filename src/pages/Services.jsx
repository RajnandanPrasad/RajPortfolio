import { motion } from 'framer-motion';
import { FaLaptopCode, FaRocket, FaTools, FaBug } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <FaLaptopCode />,
        title: "Web Application Development",
        description: "Custom, scalable web applications built with React, Next.js, and Node.js. Focused on performance and user experience.",
        idealFor: "Startups, SaaS products, Complex tools",
        tools: ["React", "Next.js", "PostgreSQL", "AWS"]
    },
    {
        icon: <FaRocket />,
        title: "Landing Pages & Business Sites",
        description: "High-converting, SEO-optimized websites that establish your brand and drive sales.",
        idealFor: "Small businesses, Agencies, Personal brands",
        tools: ["Astro", "Tailwind CSS", "Framer Motion"]
    },
    {
        icon: <FaTools />,
        title: "Performance Optimization",
        description: "Speed up your existing website. I analyze bottlenecks and implement fixes to improve Core Web Vitals.",
        idealFor: "Slow websites, E-commerce stores",
        tools: ["Lighthouse", "Web Vitals", "Code Splitting"]
    },
    {
        icon: <FaBug />,
        title: "Bug Fixing & Maintenance",
        description: "Troubleshooting critical issues, upgrading dependencies, and ensuring your site stays secure and functional.",
        idealFor: "Existing projects needing support",
        tools: ["Debugging", "Refactoring", "Testing"]
    }
];

const Services = () => {
    return (
        <section className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
                    <p className="text-xl text-muted">
                        I offer specialized engineering services to help you build, launch, and scale your digital products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
                        >
                            <div className="text-4xl text-primary mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-muted mb-6 leading-relaxed">{service.description}</p>

                            <div className="mb-4">
                                <span className="text-sm font-bold text-white block mb-1">Ideal For:</span>
                                <span className="text-sm text-muted">{service.idealFor}</span>
                            </div>

                            <div>
                                <span className="text-sm font-bold text-white block mb-1">Tools:</span>
                                <div className="flex flex-wrap gap-2">
                                    {service.tools.map((tool, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded text-muted">{tool}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pricing Note */}
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">Simple, Transparent Pricing</h3>
                    <p className="text-muted mb-8">
                        Every project is unique. I don't use fixed price lists because your needs aren't generic.
                        Let's discuss your requirements, and I'll provide a custom quote that fits your budget and goals.
                    </p>
                    <Link to="/contact" className="inline-block px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors">
                        Get a Free Quote
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
