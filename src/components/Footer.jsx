import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
                        <img src={logoFooter} alt="BlueCheck Consulting" className="footer-logo-img" />
                        <p className="footer-slogan">Clarity. Confidence. Action.</p>
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
                        <Link to="/privacy-policy" style={{ textTransform: 'uppercase' }}>PRIVACY POLICY</Link>
                    </motion.div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 BlueCheck Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
