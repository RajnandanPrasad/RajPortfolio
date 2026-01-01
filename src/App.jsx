import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <TechStack />
          <About />
          <Experience />
          <Services />
          <Projects />
          <Contact />
        </main>

        <FloatingCTA />

        <footer className="py-8 text-center text-muted text-sm border-t border-white/5 bg-card/50">
          <div className="container mx-auto px-4">
            <p className="mb-2">© 2024 Rajnandan Prasad. All rights reserved.</p>
            <p className="text-xs">Built with React, Tailwind CSS, and Framer Motion.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
