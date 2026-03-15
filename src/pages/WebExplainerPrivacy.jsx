import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const sectionHeadingStyle = {
    color: 'var(--text-primary)',
    marginTop: '2rem',
    marginBottom: '1rem',
    fontFamily: 'Outfit, sans-serif',
    letterSpacing: 'normal',
};

const subHeadingStyle = {
    color: 'var(--text-primary)',
    marginTop: '1rem',
    marginBottom: '0.75rem',
    fontFamily: 'Outfit, sans-serif',
    letterSpacing: 'normal',
    fontSize: '1rem',
};

const WebExplainerPrivacy = () => {
    return (
        <>
            <div className="container">
                <header className="seen">
                    <div className="name">
                        <h2>C . S</h2>
                    </div>
                    <nav className="navcont">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </nav>
                </header>

                <div className="introBar" style={{ minHeight: '60vh', alignItems: 'flex-start', paddingTop: '2rem', paddingBottom: '4rem' }}>
                    <div className="brefe" style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>
                            Privacy Policy for Web Explainer AI
                        </h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Last updated: March 15, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                This Privacy Policy explains how Web Explainer AI (the "Extension") handles your information when you use the Chrome extension.
                                By installing or using the Extension, you agree to the practices described below.
                            </p>

                            <h3 style={sectionHeadingStyle}>1. Overview</h3>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Web Explainer AI helps you understand web and document content by sending selected text to an AI language model.
                                We prioritize privacy and keep data handling minimal.
                            </p>

                            <h3 style={sectionHeadingStyle}>2. Information We Collect</h3>
                            <h4 style={subHeadingStyle}>2.1 Information you provide directly</h4>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                                <li>
                                    <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Email address:</strong>{' '}
                                    Used to create an account via Firebase Authentication.
                                </li>
                                <li style={{ marginTop: '0.5rem' }}>
                                    <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>API key:</strong>{' '}
                                    Your personal OpenRouter or OpenAI API key is stored only in <code>chrome.storage.local</code> on your device and is never sent to our servers.
                                </li>
                            </ul>

                            <h4 style={subHeadingStyle}>2.2 Text you choose to analyze</h4>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                                <li>
                                    Highlighted text you submit for explanation, summarization, or translation is sent directly from your browser to your configured AI provider (OpenRouter or OpenAI).
                                    We do not see or store this text.
                                </li>
                            </ul>

                            <h4 style={subHeadingStyle}>2.3 Usage and settings</h4>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>
                                    Extension settings (preferred model, tone, output length) are stored locally in <code>chrome.storage.local</code> and are never transmitted to us.
                                </li>
                            </ul>

                            <p style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>
                                    We do not collect any browsing history, page content, or telemetry.
                                </strong>{' '}
                                The Extension has no analytics, ads, or tracking pixels.
                            </p>

                            <h3 style={sectionHeadingStyle}>3. How We Use Your Information</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>
                                    <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Email address:</strong>{' '}
                                    Used to authenticate you and send email verification via Firebase Authentication.
                                </li>
                                <li style={{ marginTop: '0.5rem' }}>
                                    <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>API key:</strong>{' '}
                                    Stored locally only and used solely to make API requests on your behalf.
                                </li>
                                <li style={{ marginTop: '0.5rem' }}>
                                    <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Text submissions:</strong>{' '}
                                    Forwarded to your chosen AI provider to generate explanations, summaries, or translations.
                                </li>
                            </ul>

                            <h3 style={sectionHeadingStyle}>4. Third-Party Services</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                The Extension integrates with third-party services, and their own privacy policies apply:
                            </p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                                <li>
                                    <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Firebase Authentication (Google):</strong>{' '}
                                    Account creation and verification. Policy:{' '}
                                    <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>
                                        policies.google.com/privacy
                                    </a>
                                </li>
                                <li style={{ marginTop: '0.5rem' }}>
                                    <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>OpenRouter:</strong>{' '}
                                    AI model routing. Policy:{' '}
                                    <a href="https://openrouter.ai/privacy" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>
                                        openrouter.ai/privacy
                                    </a>
                                </li>
                                <li style={{ marginTop: '0.5rem' }}>
                                    <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>OpenAI:</strong>{' '}
                                    Optional AI provider. Policy:{' '}
                                    <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>
                                        openai.com/policies/privacy-policy
                                    </a>
                                </li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Important:</strong>{' '}
                                When text is sent to an AI provider, it leaves your device and is processed by that provider under their own terms.
                                Avoid submitting confidential or personally identifiable information.
                            </p>

                            <h3 style={sectionHeadingStyle}>5. Data Storage and Security</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Your API key and settings are stored only in <code>chrome.storage.local</code> on your device.</li>
                                <li style={{ marginTop: '0.5rem' }}>Authentication tokens are held in memory for the session and are not persisted to disk.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not operate databases that store your text, API keys, or browsing activity.</li>
                            </ul>

                            <h3 style={sectionHeadingStyle}>6. Data Retention</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Local data persists until you uninstall the Extension or manually clear it.</li>
                                <li style={{ marginTop: '0.5rem' }}>Firebase account data is retained by Firebase until you request deletion.</li>
                                <li style={{ marginTop: '0.5rem' }}>AI providers may retain request logs under their own policies.</li>
                            </ul>

                            <h3 style={sectionHeadingStyle}>7. Children's Privacy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>
                                This Extension is not directed at children under 13. If you believe a child has provided personal data,
                                contact us and we will take appropriate steps to remove it.
                            </p>

                            <h3 style={sectionHeadingStyle}>8. Your Rights and Choices</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Access or correction: You can view or update your email by logging into your account.</li>
                                <li style={{ marginTop: '0.5rem' }}>Delete local data: Uninstall the Extension or use the Log out option to clear local data.</li>
                                <li style={{ marginTop: '0.5rem' }}>Delete your account: Email us to request deletion of your Firebase account data.</li>
                                <li style={{ marginTop: '0.5rem' }}>Revoke API key: Remove it anytime from the Extension settings panel.</li>
                            </ul>

                            <h3 style={sectionHeadingStyle}>9. Changes to This Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>
                                We may update this Privacy Policy from time to time. Material changes will be reflected by updating
                                the Last updated date on this page.
                            </p>

                            <h3 style={sectionHeadingStyle}>10. Contact Us</h3>
                            <p style={{ marginBottom: '1rem' }}>If you have questions or deletion requests, contact:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '3rem' }}>
                                <li>Developer: Chandu Surisetty</li>
                                <li style={{ marginTop: '0.5rem' }}>
                                    Website:{' '}
                                    <a href="https://chandusurisetty.in" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>
                                        chandusurisetty.in
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default WebExplainerPrivacy;
