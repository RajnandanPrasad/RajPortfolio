import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const allProjects = [
    {
        id: 1,
        title: "NFT Marketplace",
        category: "NFTs",
        description: "A decentralized marketplace for trading digital assets on Ethereum.",
        tags: ["React", "Solidity", "Ethers.js"],
        image: "https://via.placeholder.com/600x400/1a1a1a/8b5cf6?text=NFT+Marketplace"
    },
    {
        id: 2,
        title: "DeFi Dashboard",
        category: "DeFi",
        description: "Real-time analytics and portfolio tracking for DeFi protocols.",
        tags: ["Next.js", "Tailwind", "Graph Protocol"],
        image: "https://via.placeholder.com/600x400/1a1a1a/06b6d4?text=DeFi+Dashboard"
    },
    {
        id: 3,
        title: "DAO Voting System",
        category: "DAO",
        description: "Governance platform for on-chain voting and proposal management.",
        tags: ["Vue", "Web3.js", "IPFS"],
        image: "https://via.placeholder.com/600x400/1a1a1a/ec4899?text=DAO+Voting"
    },
    {
        id: 4,
        title: "Crypto Wallet",
        category: "DeFi",
        description: "Non-custodial wallet with multi-chain support.",
        tags: ["React Native", "Ethers.js"],
        image: "https://via.placeholder.com/600x400/1a1a1a/8b5cf6?text=Crypto+Wallet"
    },
    {
        id: 5,
        title: "Generative Art Engine",
        category: "NFTs",
        description: "Script to generate 10k unique NFT collections.",
        tags: ["Node.js", "Canvas API"],
        image: "https://via.placeholder.com/600x400/1a1a1a/06b6d4?text=Gen+Art"
    }
];

const categories = ["All", "DeFi", "NFTs", "DAO"];

const Work = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? allProjects
        : allProjects.filter(p => p.category === filter);

    return (
        <section className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-12 text-center"
                >
                    My <span className="gradient-text">Work</span>
                </motion.h1>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full border transition-all ${filter === cat
                                    ? 'bg-primary border-primary text-white glow'
                                    : 'bg-transparent border-white/10 text-muted hover:border-primary/50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={project.id}
                                className="glass rounded-2xl overflow-hidden group"
                            >
                                <div className="h-48 bg-black/50 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                        <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-muted">
                                            {project.category}
                                        </span>
                                    </div>

                                    <p className="text-muted mb-6">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 text-secondary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href="#" className="text-xl hover:text-white text-muted transition-colors"><FaGithub /></a>
                                        <a href="#" className="text-xl hover:text-white text-muted transition-colors"><FaExternalLinkAlt /></a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Work;
