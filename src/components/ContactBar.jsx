import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'd088baf7-65e2-47bc-963b-6a9ce1ae90f7';

const ContactBar = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitState, setSubmitState] = useState({ type: '', message: '' });
    const [fieldErrors, setFieldErrors] = useState({});

    const validateField = (fieldName, value) => {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
            return 'This field is required.';
        }

        if (fieldName === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
            return 'Enter a valid email address.';
        }

        if (fieldName === 'message' && trimmedValue.length < 10) {
            return 'Message should be at least 10 characters.';
        }

        return '';
    };

    const handleFieldChange = (event) => {
        const { name, value } = event.target;

        setFieldErrors((currentErrors) => {
            if (!currentErrors[name]) {
                return currentErrors;
            }

            return {
                ...currentErrors,
                [name]: validateField(name, value),
            };
        });
    };

    const handleFieldBlur = (event) => {
        const { name, value } = event.target;

        setFieldErrors((currentErrors) => ({
            ...currentErrors,
            [name]: validateField(name, value),
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const nextErrors = {};

        for (const fieldName of ['name', 'email', 'message']) {
            const fieldValue = (formData.get(fieldName) || '').toString();
            const errorMessage = validateField(fieldName, fieldValue);

            if (errorMessage) {
                nextErrors[fieldName] = errorMessage;
            }
        }

        if (Object.keys(nextErrors).length > 0) {
            setFieldErrors(nextErrors);
            setSubmitState({
                type: 'error',
                message: 'Please fix the highlighted fields and try again.',
            });
            return;
        }

        setIsSubmitting(true);
        setFieldErrors({});
        setSubmitState({ type: '', message: '' });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Form submission failed.');
            }

            form.reset();
            setFieldErrors({});
            setSubmitState({
                type: 'success',
                message: 'Message sent successfully. I will get back to you soon.',
            });
        } catch (error) {
            setSubmitState({
                type: 'error',
                message: error.message || 'Unable to send the message right now. Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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

                    <form className="contact-form" onSubmit={handleSubmit}>
                        {/* Prefer the Vite env key in deployment, with a fallback to keep submissions working. */}
                        <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                        <input type="hidden" name="subject" value="New portfolio contact form submission" />
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                        <div className="form-group">
                            <label>Your Name:</label>
                            <input type="text" name="name" placeholder="John Doe" required onChange={handleFieldChange} onBlur={handleFieldBlur} aria-invalid={Boolean(fieldErrors.name)} />
                            {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label>Your Email:</label>
                            <input type="email" name="email" placeholder="john@example.com" required onChange={handleFieldChange} onBlur={handleFieldBlur} aria-invalid={Boolean(fieldErrors.email)} />
                            {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label>Your Message:</label>
                            <textarea name="message" rows="4" placeholder="Hello Chandu..." required onChange={handleFieldChange} onBlur={handleFieldBlur} aria-invalid={Boolean(fieldErrors.message)}></textarea>
                            {fieldErrors.message && <span className="field-error">{fieldErrors.message}</span>}
                        </div>
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(34, 211, 238, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="submit-btn"
                        >
                            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE ✉️'}
                        </motion.button>
                        {submitState.message && (
                            <div
                                className={`submit-toast ${submitState.type}`}
                                aria-live="polite"
                            >
                                {submitState.message}
                            </div>
                        )}
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
                        <motion.a href="https://instagram.com/chandu_surisetty" target="_blank" rel="noreferrer" whileHover={{ y: -5 }}>
                            <FaInstagram />
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactBar;
