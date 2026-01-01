import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'experience', 'services', 'projects', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = ['Home', 'About', 'Experience', 'Services', 'Projects', 'Contact'];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            {/* Background Glass Layer */}
            <div
                className={`absolute inset-0 -z-10 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}
            ></div>

            <div className="container mx-auto px-4 flex justify-between items-center">
                <button onClick={() => scrollToSection('home')} className="text-xl font-bold tracking-tight z-50 relative">
                    Rajnandan<span className="text-primary">Prasad</span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium items-center">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className={`hover:text-primary transition-colors relative ${activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted'}`}
                        >
                            {item}
                            {activeSection === item.toLowerCase() && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                                />
                            )}
                        </button>
                    ))}

                    <div className="flex gap-4 ml-4">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-5 py-2 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-200 transition-colors"
                        >
                            Hire Me
                        </button>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-5 py-2 bg-white/10 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/20 transition-colors flex items-center gap-2"
                        >
                            <FaDownload className="text-xs" /> Resume
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-2xl text-white z-50 relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden h-screen w-screen"
                        >
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`text-2xl font-bold ${activeSection === item.toLowerCase() ? 'text-primary' : 'text-white'}`}
                                >
                                    {item}
                                </button>
                            ))}
                            <div className="flex flex-col gap-4 mt-4 w-64">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="w-full px-8 py-3 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors text-center"
                                >
                                    Hire Me
                                </button>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="w-full px-8 py-3 bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                                >
                                    <FaDownload /> Resume
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
