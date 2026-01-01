import { motion } from 'framer-motion';
import { FaArrowRight, FaCircle } from 'react-icons/fa';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs md:text-sm font-medium mb-6"
          >
            <FaCircle className="text-[6px] md:text-[8px] animate-pulse" />
            Available for Freelance Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight tracking-tight"
          >
            Crafting digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              masterpieces.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl text-muted mb-8 md:mb-10 max-w-2xl leading-relaxed"
          >
            Full Stack Developer focused on building practical, scalable web applications for real-world use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <button onClick={scrollToProjects} className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group">
              View My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={scrollToContact} className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm">
              Let's Talk
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
