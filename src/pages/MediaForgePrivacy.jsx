import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const MediaForgePrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for MediaForge</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Last Updated: June 6, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1rem' }}><strong>MediaForge</strong> ("we", "our", "us") provides on-device media tools such as conversion, compression, editing, OCR, and export.</p>
                            <p style={{ marginBottom: '1.5rem' }}>This Privacy Policy explains how information is handled when you use the app.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Data We Process</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Media files selected by you (images, audio, video, PDFs, and archives).</li>
                                <li style={{ marginTop: '0.5rem' }}>App preferences stored locally (such as theme settings, favorites, and recent tools).</li>
                                <li style={{ marginTop: '0.5rem' }}>Temporary processing files generated during media operations.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. Data Collection</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We do not collect personal data on our servers.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not require account creation.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not sell user data.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Data Sharing</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Files are shared only when you explicitly choose Share or Export actions.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not automatically share user files or metadata with third parties.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Device Permissions</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Photos, videos, audio, and storage permissions are requested only so you can select and save files.</li>
                                <li style={{ marginTop: '0.5rem' }}>Internet permission may exist for platform/runtime compatibility and development tooling, not for mandatory cloud processing.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Data Storage and Security</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Processing is designed to run locally on-device.</li>
                                <li style={{ marginTop: '0.5rem' }}>Temporary files are stored in app-accessible local storage and can be cleared from app settings.</li>
                                <li style={{ marginTop: '0.5rem' }}>Output files are saved only after your action.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Children</h3>
                            <p style={{ marginBottom: '1.5rem' }}>The app is not specifically directed to children under 13.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Third-Party Components</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>The app uses third-party libraries and plugins (for example Flutter ecosystem components, media processing libraries, and OCR libraries).</li>
                                <li style={{ marginTop: '0.5rem' }}>These components may have their own privacy terms.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Your Choices</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>You can revoke permissions in Android system settings.</li>
                                <li style={{ marginTop: '0.5rem' }}>You can clear temporary app files from app settings.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Contact</h3>
                            <p style={{ marginBottom: '1rem' }}>If you have privacy questions, contact:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Email: <a href="mailto:contact@chandusurisetty.in" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>contact@chandusurisetty.in</a></li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>10. Changes to This Policy</h3>
                            <p style={{ marginBottom: '3rem' }}>We may update this policy as app features evolve. The latest version will always be published on this website with the updated date.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MediaForgePrivacy;
