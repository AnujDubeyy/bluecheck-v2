import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Users, BarChart3, Globe, ArrowRight, Linkedin } from 'lucide-react';
import './Home.css';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';
import heroBgLight from '../assets/hero-bg-light.png';
import heroBgDark from '../assets/hero-bg-dark.png';

// Strategic Expertise & Value icons
const Icons = {
    Compliance: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    ),
    Governance: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
    ),
    Consulting: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
    ),
    Focus: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
    ),
    Expert: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    ),
    Practical: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.4 1.5-3.8 0-3.3-2.7-6-6-6S6 4.7 6 8c0 1.4.5 2.8 1.5 3.8.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
    ),
    Professional: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    )
};

const Home = () => {
    const { theme } = useTheme();
    const heroBg = theme === 'dark' ? heroBgDark : heroBgLight;

    return (
        <div className="home-page">
            <SEO 
                title="Cybrion Consulting | Secure Today, Resilient Tomorrow" 
                description="We help organisations strengthen security, meet regulatory expectations & build resilience that lasts." 
            />

            {/* Immersive Hero Section matching Reference Mockup */}
            <section 
                className="reference-hero"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="hero-shell">
                    {/* Top Content Row: Left Hero Copy */}
                    <div className="hero-main-row">
                        {/* Left Hero Column */}
                        <motion.div 
                            className="hero-left-col"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Eyebrow Tagline */}
                            <div className="hero-eyebrow">
                                <span>CYBERSECURITY</span>
                                <span className="tag-separator">|</span>
                                <span>GOVERNANCE</span>
                                <span className="tag-separator">|</span>
                                <span>RISK</span>
                                <span className="tag-separator">|</span>
                                <span>COMPLIANCE</span>
                            </div>

                            {/* Headline */}
                            <h1 className="hero-display-headline">
                                Secure Today.<br />
                                <span className="hero-blue-highlight">Resilient</span> Tomorrow.
                            </h1>

                            {/* Description */}
                            <p className="hero-subtext">
                                We help organisations strengthen security, meet regulatory expectations &amp; build resilience that lasts.
                            </p>

                            {/* CTA Actions */}
                            <div className="hero-button-group">
                                <Link to="/services" className="hero-btn-explore">
                                    <span>Explore Our Services</span>
                                    <ArrowRight size={17} className="btn-icon-arrow" />
                                </Link>
                                <Link to="/contact" className="hero-btn-touch">
                                    Get in Touch
                                </Link>
                            </div>
                        </motion.div>


                    </div>

                    {/* Bottom Strip: 4 Feature Pillars with Hairline Dividers */}
                    <motion.div 
                        className="hero-features-bar"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="feature-item">
                            <div className="feature-icon-wrap">
                                <Shield size={34} strokeWidth={1.8} className="feature-lucide-icon" />
                            </div>
                            <div className="feature-text-wrap">
                                <div className="feature-line-1">Pragmatic</div>
                                <div className="feature-line-2">Solutions</div>
                            </div>
                        </div>

                        <div className="feature-divider" />

                        <div className="feature-item">
                            <div className="feature-icon-wrap">
                                <Users size={34} strokeWidth={1.8} className="feature-lucide-icon" />
                            </div>
                            <div className="feature-text-wrap">
                                <div className="feature-line-1">Experienced</div>
                                <div className="feature-line-2">Advisors</div>
                            </div>
                        </div>

                        <div className="feature-divider" />

                        <div className="feature-item">
                            <div className="feature-icon-wrap">
                                <BarChart3 size={34} strokeWidth={1.8} className="feature-lucide-icon" />
                            </div>
                            <div className="feature-text-wrap">
                                <div className="feature-line-1">Measurable</div>
                                <div className="feature-line-2">Outcomes</div>
                            </div>
                        </div>

                        <div className="feature-divider" />

                        <div className="feature-item">
                            <div className="feature-icon-wrap">
                                <Globe size={34} strokeWidth={1.8} className="feature-lucide-icon" />
                            </div>
                            <div className="feature-text-wrap">
                                <div className="feature-line-1">Global Perspective</div>
                                <div className="feature-line-2">Local Understanding</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Strategic Expertise Strip */}
            <section className="expertise-section">
                <div className="container">
                    <div className="section-head-wrap">
                        <motion.span
                            className="section-overline"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >WHAT WE DO</motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >Strategic Expertise</motion.h2>
                    </div>

                    <div className="expertise-cards-grid">
                        {[
                            { title: 'Compliance Consulting', desc: 'Seamlessly meeting regulatory requirements across India and global jurisdictions with confidence.', icon: Icons.Compliance },
                            { title: 'Governance Frameworks', desc: 'Designing robust governance, board oversight and risk control mechanisms.', icon: Icons.Governance },
                            { title: 'Risk Consulting', desc: 'Identifying threat vectors, mitigating business vulnerabilities and ensuring resilience.', icon: Icons.Consulting }
                        ].map((service, index) => (
                            <motion.div
                                className="expertise-card"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 50, damping: 20, delay: index * 0.1 }}
                            >
                                <div className="expertise-icon-box">
                                    <service.icon />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="difference-section">
                <div className="container">
                    <div className="section-head-wrap">
                        <motion.span
                            className="section-overline"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >WHY CHOOSE US</motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >The Cybrion Difference</motion.h2>
                        <motion.p
                            className="difference-subheading"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Our approach is grounded, transparent and aligned with modern security and regulatory realities.
                        </motion.p>
                    </div>

                    <div className="difference-cards-grid">
                        {[
                            { title: 'Business Focused', desc: 'Tailored specifically for institutions of any size throughout their lifecycle.', icon: Icons.Focus },
                            { title: 'Regulatory Expert', desc: 'Deep understanding of frameworks to ensure comprehensive risk compliance.', icon: Icons.Expert },
                            { title: 'Practical Solutions', desc: 'Actionable ideas and security controls that work effectively on the ground.', icon: Icons.Practical },
                            { title: 'Professional Conduct', desc: 'Ethical, disciplined and transparent in every client engagement.', icon: Icons.Professional }
                        ].map((feature, index) => (
                            <motion.div
                                className="difference-card"
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 50, delay: index * 0.08 }}
                            >
                                <div className="difference-icon-box">
                                    <feature.icon />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LinkedIn Connect Section */}
            <section className="home-connect-section">
                <div className="container">
                    <motion.div 
                        className="home-connect-card"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="home-connect-content">
                            <span className="section-overline">STAY CONNECTED</span>
                            <h2>Follow Cybrion Consulting on LinkedIn</h2>
                            <p>
                                Stay informed with our latest updates, industry analysis and cybersecurity regulatory insights.
                            </p>
                        </div>
                        <a 
                            href="http://www.linkedin.com/company/cybrion-consulting-llp" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="home-connect-btn"
                        >
                            <Linkedin size={20} />
                            <span>Connect on LinkedIn</span>
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
