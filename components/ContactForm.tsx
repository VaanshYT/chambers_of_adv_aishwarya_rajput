import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage('Failed to connect to the server.');
        }
    };

    return (
        <section className="py-24 bg-regal-black border-t border-white/5 relative overflow-hidden">
            {/* Background/Ambiance - Reuse texture from other sections for consistency */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-antique-gold/5 via-transparent to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-xl mx-auto">
                    <div className="text-center mb-12">
                        <h4 className="text-antique-gold tracking-widest text-xs uppercase font-bold mb-4">Get in Touch</h4>
                        <h2 className="font-serif text-3xl md:text-5xl text-cream">Contact Us</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs uppercase tracking-wider text-off-white/60">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 p-3 text-off-white focus:outline-none focus:border-antique-gold/50 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs uppercase tracking-wider text-off-white/60">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 p-3 text-off-white focus:outline-none focus:border-antique-gold/50 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-xs uppercase tracking-wider text-off-white/60">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 p-3 text-off-white focus:outline-none focus:border-antique-gold/50 transition-colors"
                                placeholder="+91 XXXXX XXXXX"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs uppercase tracking-wider text-off-white/60">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 p-3 text-off-white focus:outline-none focus:border-antique-gold/50 transition-colors resize-none"
                                placeholder="How can we assist you?"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-antique-gold text-regal-black font-medium py-4 uppercase tracking-widest hover:bg-cream transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </motion.button>

                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-green-400 text-center text-sm font-medium pt-4"
                            >
                                Message sent successfully. We will be in touch shortly.
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-center text-sm font-medium pt-4"
                            >
                                {errorMessage}
                            </motion.div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
