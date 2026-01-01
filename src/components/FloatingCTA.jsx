import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCommentDots } from 'react-icons/fa';

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling past 500px
            setIsVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center gap-2 md:gap-3 px-5 py-3 md:px-6 md:py-4 bg-primary text-white rounded-full shadow-lg shadow-primary/30 font-bold hover:bg-blue-600 transition-colors backdrop-blur-md text-sm md:text-base"
                >
                    <FaCommentDots className="text-lg md:text-xl" />
                    <span>Let's Talk</span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
