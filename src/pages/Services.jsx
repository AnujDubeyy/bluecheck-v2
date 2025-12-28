import React from 'react';
import { motion } from 'framer-motion';

import './Services.css';

const servicesData = [
    {
        category: "Governance, Risk & Compliance (GRC)",
        items: [
            {
                title: "Information Security Governance",
                desc: "ISMS Design & Implementation (ISO 27001, NIST CSF, CIS Controls), Policy Framework & Risk Management."
            },
            {
                title: "Compliance Management & Certifications",
                desc: "ISO 27001, ISO 22301, ISO 27017/18, SOC 2 Type I/II, PCI DSS readiness & certification support."
            },
            {
                title: "Data Privacy & DPDP Compliance",
                desc: "Data lifecycle mapping, DPIA, consent management, DPO consulting and compliance with India's DPDP Act & GDPR."
            },
            {
                title: "Third-Party Risk Management (TPRM)",
                desc: "Vendor due diligence, supplier security assessments, SLA compliance and ongoing monitoring."
            },
            {
                title: "Regulatory Compliance Consulting",
                desc: "Specialized compliance readiness for RBI Cybersecurity Frameworks, SEBI-CSCRF and IRDAI frameworks."
            },
            {
                title: "AI Governance & Responsible AI",
                desc: "Implementation of AI Governance, AI Risk Management (ISO 42001, EU AI Act, NIST AI RMF, Others) and Responsible/Free-AI frameworks."
            }
        ]
    },
    {
        category: "Regulatory & Industry-Specific Audits",
        items: [
            {
                title: "RBI Cybersecurity Audit",
                desc: "Gap assessment, RBI circular mapping and compliance validation for BFSI domain."
            },
            {
                title: "SEBI-CSCRF & Market Infra Audit",
                desc: "Readiness and control evaluation per SEBI-CSCRF framework and market infra cybersecurity guidelines."
            },
            {
                title: "IRDAI Cybersecurity Framework",
                desc: "Compliance evaluation, control design and evidence validation for insurers."
            },
            {
                title: "NBFC Cybersecurity Readiness",
                desc: "Cyber framework alignment per RBI/NBFC guidelines and risk management directions."
            },
            {
                title: "CERT-In Compliance",
                desc: "Audit readiness, incident reporting workflows and other reporting compliances."
            }
        ]
    },
    {
        category: "Business Continuity & Resilience",
        items: [
            {
                title: "ISO 22301 BCMS Implementation",
                desc: "Business impact analysis (BIA), continuity strategies, recovery procedures and audit readiness."
            },
            {
                title: "ISO 27031 ICT Readiness",
                desc: "ICT continuity planning, recovery strategy design, DR drills and test validation."
            },
            {
                title: "Disaster Recovery & Crisis Response",
                desc: "Ransomware preparedness, DR plan validation, tabletop simulations and incident playbooks."
            },
            {
                title: "Resilience Governance",
                desc: "Integration of BCMS, ISMS and Incident Response into a unified governance model."
            }
        ]
    },
    {
        category: "Training, Awareness & Consulting",
        items: [
            {
                title: "Employee Security Awareness",
                desc: "Phishing simulations, customized training modules, cybersecurity e-learning."
            },
            {
                title: "Leadership & Board Cyber Governance",
                desc: "Executive briefings, board-level risk dashboards and governance alignment workshops."
            },
            {
                title: "vCISO / CISO-as-a-Service",
                desc: "Virtual CISO engagements for compliance leadership, policy management and audit preparation."
            },
            {
                title: "Certification Training",
                desc: "ISO 27001 Lead Auditor, Risk Officer and Privacy Officer (DPDP/GDPR) programs."
            }
        ]
    },
    {
        category: "Cybersecurity Management & Technical Assurance",
        items: [
            {
                title: "Vulnerability Assessment & Penetration Testing (VAPT)",
                desc: "Web, Mobile, Network, API and Cloud security testing; exploit validation and remediation guidance."
            },
            {
                title: "Cloud Security & Architecture Review",
                desc: "AWS / Azure / GCP configuration review, data security, IAM and compliance with ISO 27017/18."
            },
            {
                title: "SOC & SIEM Consulting",
                desc: "SOC design and maturity assessment, SIEM use-case development, 24x7 monitoring framework, incident detection."
            },
            {
                title: "Threat & Risk Assessment",
                desc: "Cyber risk quantification, MITRE ATT&CK mapping, threat modeling and control validation."
            },
            {
                title: "Cyber Threat Intelligence",
                desc: "Threat landscape reports, brand protection, dark web monitoring, fraud pattern detection."
            }
        ]
    }
];

const industries = [
    "BFSI / Fintech",
    "SaaS / Cloud Platforms",
    "Data Centers & IT Infrastructure",
    "AI / Tech Startups",
    "Others"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Services = () => {
    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        e.currentTarget.style.setProperty('--mouse-x', x);
        e.currentTarget.style.setProperty('--mouse-y', y);
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`);
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`);
    };

    return (
        <div className="services-modern" onMouseMove={handleMouseMove}>
            <div className="container">
                <div className="services-hero">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 60, damping: 20 }}
                        className="display-heading"
                    >
                        Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Comprehensive consulting solutions designed to build resilience, ensure compliance and drive confidence in any regulatory landscape or other scenarios.
                    </motion.p>
                </div>

                {servicesData.map((category, index) => (
                    <motion.div
                        key={index}
                        className="service-category"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                    >
                        <h2 className="category-title">{category.category}</h2>
                        <div className="services-grid">
                            {category.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    style={{ height: '100%' }}
                                >
                                    <div className="service-card-glass">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    className="industries-section"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 60, damping: 20 }}
                >
                    <h2 className="display-heading" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Industries We Serve</h2>
                    <div className="industries-grid">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                className="industry-chip"
                                whileHover={{ scale: 1.05 }}
                            >
                                {industry}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
