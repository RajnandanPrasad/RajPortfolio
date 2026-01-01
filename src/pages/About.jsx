import { motion } from 'framer-motion';

const experience = [
    {
        year: "2024",
        role: "Senior Web3 Engineer",
        company: "DeFi Protocol X",
        description: "Leading the frontend team in building next-gen AMM interfaces."
    },
    {
        year: "2022",
        role: "Frontend Developer",
        company: "NFT Marketplace Y",
        description: "Implemented smart contract integrations and responsive UI designs."
    },
    {
        year: "2020",
        role: "Full Stack Developer",
        company: "Tech Agency Z",
        description: "Built scalable web applications using React and Node.js."
    }
];

const About = () => {
    return (
        <section className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-5xl font-bold mb-8">About <span className="gradient-text">Me</span></h1>
                        <div className="glass p-8 rounded-2xl mb-8">
                            <p className="text-lg text-muted leading-relaxed mb-6">
                                I am a creative technologist with a deep passion for the decentralized web.
                                My journey began in traditional web development, but the potential of blockchain
                                technology captivated me.
                            </p>
                            <p className="text-lg text-muted leading-relaxed">
                                Today, I focus on bridging the gap between complex backend logic and
                                intuitive user interfaces, ensuring that Web3 is accessible to everyone.
                            </p>
                        </div>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Journey</h2>
                        <div className="relative border-l-2 border-white/10 ml-4 space-y-12">
                            {experience.map((item, index) => (
                                <div key={index} className="relative pl-8">
                                    {/* Dot */}
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow"></div>

                                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                    <div className="text-secondary mb-2">{item.company} | {item.year}</div>
                                    <p className="text-muted">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
