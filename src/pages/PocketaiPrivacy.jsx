import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const PocketaiPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for PocketAI</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: May 1, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1.5rem' }}>PocketAI is designed to run AI features locally on your device.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information We Collect</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We do not require account registration.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not collect personal data on our servers by default.</li>
                                <li style={{ marginTop: '0.5rem' }}>Chat content, notes, downloaded models, and app settings are stored locally on your device.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How Your Data Is Used</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Your local data is used only to provide app features such as AI chat, notes search, and model management.</li>
                                <li style={{ marginTop: '0.5rem' }}>Data processing for AI inference is performed on-device.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Internet Access</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Internet may be used only for optional actions such as downloading AI model files or app dependencies or updates.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not upload your chat or note content as part of normal app use.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Data Sharing</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We do not sell your personal information.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not share your local chat or notes data with third parties unless required by law.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Data Retention and Control</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>You can delete chats, notes, and models inside the app.</li>
                                <li style={{ marginTop: '0.5rem' }}>Uninstalling the app typically removes app-local data, subject to your device or OS behavior.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Security</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We apply reasonable measures to protect local app data.</li>
                                <li style={{ marginTop: '0.5rem' }}>No method of storage or transmission is 100% secure.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Children&apos;s Privacy</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>The app is not directed to children under 13.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not knowingly collect personal information from children.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Changes to This Policy</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We may update this policy from time to time.</li>
                                <li style={{ marginTop: '0.5rem' }}>Updated versions will include a revised Effective Date.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Contact</h3>
                            <p style={{ marginBottom: '1rem' }}>For privacy questions, contact:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '3rem' }}>
                                <li>Email: <a href="mailto:support@tabba.app" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>support@tabba.app</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PocketaiPrivacy;
