import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        e.currentTarget.style.setProperty('--mouse-x', x);
        e.currentTarget.style.setProperty('--mouse-y', y);
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`);
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`);
    };

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        user_email: '', // Changed to user_email to match common EmailJS templates
        company: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitting: false,
        info: { error: false, msg: null }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'message' && value.length > 200) return;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, user_email, company, message } = formData;

        if (!name || !user_email || !company || !message) {
            setStatus({
                submitting: false,
                info: { error: true, msg: "Please fill in all mandatory fields." }
            });
            return;
        }

        setStatus({ submitting: true, info: { error: false, msg: null } });

        // Keys are secured in .env file
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setStatus({
                    submitting: false,
                    info: { error: false, msg: "Message sent! We will get back to you soon." }
                });
                setFormData({ name: '', user_email: '', company: '', message: '' });
            }, (error) => {
                console.error(error);
                setStatus({
                    submitting: false,
                    info: { error: true, msg: "An error occurred. Please try again later." }
                });
            });
    };

    return (
        <div className="contact-modern" onMouseMove={handleMouseMove}>
            <div className="container contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                    className="text-center mb-12"
                >
                    <h1 className="display-heading">Contact Us</h1>
                    <p className="lead-text" style={{ maxWidth: '600px', margin: '0 auto 16px', fontSize: '1.2rem' }}>
                        We welcome enquiries from individuals and businesses seeking structured and compliant advisory support.
                    </p>
                    <p className="lead-text" style={{ maxWidth: '600px', margin: '0 auto 60px', fontSize: '1.2rem' }}>
                        <a href="mailto:bluecheckadvisory@gmail.com" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                            bluecheckadvisory@gmail.com
                        </a>
                    </p>
                </motion.div>



                {/* Contact Form Section */}
                <motion.div
                    className="contact-form-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
                >
                    <h3 className="section-subheading" style={{ color: 'var(--color-primary)' }}>Send us a Message</h3>

                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">
                                Name<span className="required-star">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="form-input"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Email<span className="required-star">*</span>
                            </label>
                            <input
                                type="email"
                                name="user_email" // name attribute matches EmailJS variable
                                className="form-input"
                                placeholder="Your Email Address"
                                value={formData.user_email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Company Name<span className="required-star">*</span>
                            </label>
                            <input
                                type="text"
                                name="company"
                                className="form-input"
                                placeholder="Your Company Name"
                                value={formData.company}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Message<span className="required-star">*</span>
                            </label>
                            <textarea
                                name="message"
                                className="form-textarea"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                maxLength={200}
                                required
                            />
                            <div className="char-count">
                                {formData.message.length} / 200
                            </div>
                        </div>

                        {status.info.msg && (
                            <div className={`form-message ${status.info.error ? 'error' : 'success'}`} style={{ marginBottom: '15px', color: status.info.error ? 'red' : 'green', fontWeight: '500' }}>
                                {status.info.msg}
                            </div>
                        )}

                        <button type="submit" className="submit-btn" disabled={status.submitting}>
                            {status.submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
