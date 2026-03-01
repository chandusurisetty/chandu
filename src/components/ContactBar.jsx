import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactBar = () => {
    return (
        <div className="container3" id="contact">
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring" }}
            >
                {/* Left Column: Form */}
                <div className="contact-form-section">
                    <h3>WHAT'S NEXT</h3>
                    <h1>Let's work together.</h1>
                    <p>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>

                    <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                        {/* Web3Forms Access Key is securely loaded from your local .env file */}
                        <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />

                        <div className="form-group">
                            <label>Your Name:</label>
                            <input type="text" name="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Your Email:</label>
                            <input type="email" name="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Your Message:</label>
                            <textarea name="message" rows="4" placeholder="Hello Chandu..." required></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(34, 211, 238, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="submit-btn"
                        >
                            SEND MESSAGE ✉️
                        </motion.button>
                    </form>
                </div>

                {/* Right Column: Info & Socials */}
                <div className="contact-info-section">
                    <div className="info-card">
                        <div className="info-item">
                            <div className="info-icon"><FaEnvelope /></div>
                            <span>contact@chandusurisetty.in</span>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FaMapMarkerAlt /></div>
                            <span>Bengaluru, Karnataka, India</span>
                        </div>
                    </div>

                    <div className="social-links">
                        <motion.a href="https://github.com/chandusurisetty" target="_blank" rel="noreferrer" whileHover={{ y: -5 }}>
                            <FaGithub />
                        </motion.a>
                        <motion.a href="https://linkedin.com/in/chandusurisetty" target="_blank" rel="noreferrer" whileHover={{ y: -5 }}>
                            <FaLinkedin />
                        </motion.a>
                        <motion.a href="https://instagram.com/chandusurisetty" target="_blank" rel="noreferrer" whileHover={{ y: -5 }}>
                            <FaInstagram />
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactBar;
