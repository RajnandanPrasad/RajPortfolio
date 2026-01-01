import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        content: "John is an exceptional engineer. He transformed our MVP into a scalable product in record time. His attention to detail and problem-solving skills are unmatched.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Michael Chen",
        role: "Product Manager, InnovateCorp",
        content: "Working with John was a breeze. He understood our requirements perfectly and delivered a solution that exceeded our expectations. Highly recommended!",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Emily Davis",
        role: "Founder, DesignStudio",
        content: "The website John built for us is not only beautiful but also incredibly fast. Our conversion rates have doubled since the launch.",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="py-32 bg-card/10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Testimonials</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">What People Say</h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-card p-8 rounded-2xl border border-white/5 relative"
                        >
                            <FaQuoteLeft className="text-primary/20 text-4xl mb-6" />
                            <p className="text-muted mb-8 leading-relaxed italic">"{t.content}"</p>

                            <div className="flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                                <div>
                                    <h4 className="font-bold text-white">{t.name}</h4>
                                    <p className="text-sm text-primary">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
