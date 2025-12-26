import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-page">
            <div className="container">
                <motion.div
                    className="privacy-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>Privacy Policy and Terms of Use</h1>

                    <div className="privacy-section">
                        <h2>Introduction</h2>
                        <p>This website is operated by BlueCheck Advisory. We are committed to respecting your privacy and ensuring that any personal information shared with us is handled responsibly and lawfully.</p>
                        <p>By accessing or using this website, you agree to the terms set out below.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Information We Collect</h2>
                        <p>We collect limited personal information only when it is voluntarily provided by you, such as when you:</p>
                        <ul>
                            <li>Submit an enquiry through the website</li>
                            <li>Contact us via email</li>
                            <li>Interact with the website in a general manner</li>
                        </ul>
                        <p>Information collected may include your name, email address, contact details, organisation name and any other information you choose to share.</p>
                        <p>We do not knowingly collect sensitive personal data unless explicitly required and voluntarily disclosed.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Purpose of Collection and Use</h2>
                        <p>Any information collected is used strictly for legitimate business purposes, including:</p>
                        <ul>
                            <li>Responding to enquiries and communications</li>
                            <li>Providing information about our services</li>
                            <li>Improving website functionality and user experience</li>
                            <li>Complying with applicable legal or regulatory obligations</li>
                        </ul>
                        <p>We do not sell, rent or commercially exploit personal information.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Data Protection and Security</h2>
                        <p>BlueCheck Advisory follows reasonable security practices and procedures to protect personal information from unauthorised access, misuse, alteration or disclosure.</p>
                        <p>Information is retained only for as long as necessary to fulfil its intended purpose or to meet legal requirements.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Disclosure of Information</h2>
                        <p>Personal information may be disclosed only:</p>
                        <ul>
                            <li>When required by applicable law or government authority</li>
                            <li>To service providers supporting website or business operations, subject to confidentiality obligations</li>
                        </ul>
                        <p>We do not share personal data for marketing or unrelated third party use.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Cookies Policy</h2>
                        <p>This website uses cookies to improve performance and understand usage patterns.</p>
                        <p>Cookies help us:</p>
                        <ul>
                            <li>Analyse website traffic</li>
                            <li>Improve content and navigation</li>
                        </ul>
                        <p>Cookies do not capture personal or sensitive information. You may disable cookies through your browser settings. Continued use of the website implies consent to the use of cookies.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Third Party Links</h2>
                        <p>This website may contain links to external websites for reference or convenience. BlueCheck Advisory is not responsible for the content or privacy practices of third party websites. Users should review the privacy policies of such websites independently.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Disclaimer</h2>
                        <p>The content on this website is provided for general informational purposes only and does not constitute legal, regulatory, financial or professional advice. Specific advice should be sought based on individual facts and circumstances.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Intellectual Property</h2>
                        <p>All content on this website, including text and branding, is the property of BlueCheck Advisory unless otherwise stated. Unauthorised use, reproduction or distribution is prohibited.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Limitation of Liability</h2>
                        <p>BlueCheck Advisory shall not be liable for any direct or indirect loss arising from the use of this website or reliance on its content, to the extent permitted under Indian law.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Governing Law</h2>
                        <p>This website and its use are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in India.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Policy Updates</h2>
                        <p>We reserve the right to update or modify this Privacy Policy and Terms of Use at any time. Changes will be effective upon being posted on this page.</p>
                    </div>

                    <div className="privacy-section">
                        <h2>Contact Information</h2>
                        <p>For any questions regarding this policy, you may contact us at:</p>
                        <p>Email: <a href="mailto:info@bluecheckadvisory.com" className="privacy-contact-email">info@bluecheckadvisory.com</a></p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
