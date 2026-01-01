import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: 'Freelance Project',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' or 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        const serviceId = 'service_p0czbhv';
        const templateId = 'template_9o62lvm';
        const publicKey = 'BoDA7Dbfb57pwn0y-';

        emailjs.send(
            serviceId,
            templateId,
            {
                from_name: form.name,
                to_name: 'Rajnandan Prasad',
                from_email: form.email,
                to_email: 'rajnandanprasad2004@gmail.com', // You might want to change this too or just use the template config
                message: form.message,
                subject: form.subject,
            },
            publicKey
        )
            .then(() => {
                setLoading(false);
                setStatus('success');
                setForm({
                    name: '',
                    email: '',
                    subject: 'Freelance Project',
                    message: '',
                });
                setTimeout(() => setStatus(null), 5000); // Clear success message after 5 seconds
            })
            .catch((error) => {
                setLoading(false);
                setStatus('error');
                console.error(error);
                alert('Something went wrong. Please check the console or ensure you have set up your EmailJS keys correctly.');
            });
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Get in Touch</h2>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <br /> great together.</h1>
                        <p className="text-xl text-muted mb-12 leading-relaxed">
                            I'm currently available for freelance projects and open to full-time engineering roles.
                            If you have a project that needs some creative engineering, I'd love to hear about it.
                        </p>

                        <div className="space-y-8">
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* WhatsApp Business CTA */}
                                <a href="https://wa.me/916202778283" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-4 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl hover:border-green-500/50 transition-colors group">
                                    <div className="p-4 bg-green-500 text-white rounded-full text-xl group-hover:scale-110 transition-transform">
                                        <FaWhatsapp />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white mb-1">WhatsApp Business</h3>
                                        <p className="text-muted text-sm">Chat directly for quick queries.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-primary text-xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email</h3>
                                    <a href="mailto:rajnandanprasad2004@gmail.com" className="text-muted hover:text-white transition-colors">rajnandanprasad2004@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-primary text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Location</h3>
                                    <p className="text-muted">Remote / Worldwide</p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <h3 className="font-bold text-lg mb-4">Connect</h3>
                                <div className="flex gap-4">
                                    <a href="https://github.com/RajnandanPrasad" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-primary hover:text-white transition-colors text-xl"><FaGithub /></a>
                                    <a href="https://www.linkedin.com/in/rajnandan-prasad-rp77" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-primary hover:text-white transition-colors text-xl"><FaLinkedin /></a>
                                    <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-primary hover:text-white transition-colors text-xl"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card p-8 rounded-2xl border border-white/5"
                    >
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-muted mb-8">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setStatus(null)}
                                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-muted">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors text-white"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-muted">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors text-white"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-muted">Subject</label>
                                    <select
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors text-white"
                                    >
                                        <option value="Freelance Project">Freelance Project</option>
                                        <option value="Job Opportunity">Job Opportunity</option>
                                        <option value="Consulting">Consulting</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-muted">Message</label>
                                    <textarea
                                        rows="6"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:border-primary focus:outline-none transition-colors text-white"
                                        placeholder="Tell me about your project, timeline, and budget..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-4 rounded-lg font-bold transition-colors shadow-lg ${loading
                                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                                        : 'bg-primary text-white hover:bg-blue-600 shadow-primary/25'
                                        }`}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>

                                {status === 'error' && (
                                    <p className="text-red-500 text-center mt-4">Failed to send message. Please try again later.</p>
                                )}
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
