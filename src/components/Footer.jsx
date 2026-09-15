import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import logoFooter from '../assets/logo-dark.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-modern">
            <div className="container">
                <div className="footer-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="footer-brand"
                    >
                        <img src={logoFooter} alt="Cybrion Consulting" className="footer-logo-img" />
                        <p className="footer-slogan">Clarity. Confidence. Action.</p>
                        <div className="footer-socials">
                            <a
                                href="http://www.linkedin.com/company/cybrion-consulting-llp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Cybrion Consulting on LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="footer-links"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                        <a 
                            href="http://www.linkedin.com/company/cybrion-consulting-llp" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <Link to="/privacy-policy" style={{ textTransform: 'uppercase' }}>PRIVACY POLICY</Link>
                    </motion.div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Cybrion Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
