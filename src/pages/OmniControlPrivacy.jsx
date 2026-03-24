import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const OmniControlPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for OmniControl</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: March 24, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1rem' }}>This Privacy Policy explains how OmniControl ("the App") handles information when you use the App.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information We Collect</h3>
                            <p style={{ marginBottom: '1rem' }}>OmniControl is designed to control connected devices and store your app preferences locally.</p>
                            <p style={{ marginBottom: '1rem' }}>The App may process the following on your device:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Bluetooth device information needed to discover and connect to nearby devices (for HID and control features)</li>
                                <li style={{ marginTop: '0.5rem' }}>Motion and sensor input from your device (for features such as air mouse or gesture-based controls)</li>
                                <li style={{ marginTop: '0.5rem' }}>App settings you choose (for example: sound, glow style and color, sensitivity, and custom key mappings)</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>We do not require account registration.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How We Use Information</h3>
                            <p style={{ marginBottom: '1rem' }}>Information is used only to provide core app functionality, including:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Discovering and connecting to Bluetooth devices</li>
                                <li style={{ marginTop: '0.5rem' }}>Enabling remote control features (keyboard, mouse, media, gamepad, presentation, and similar controls)</li>
                                <li style={{ marginTop: '0.5rem' }}>Saving your preferences so the App behaves as you configured</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Data Storage</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Your settings are stored locally on your device using local app storage.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not operate a backend server to store your personal data for normal app use.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Permissions</h3>
                            <p style={{ marginBottom: '1rem' }}>OmniControl may request the following Android permissions:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Bluetooth permissions (including scan, connect, and advertise) to find and communicate with nearby Bluetooth devices</li>
                                <li style={{ marginTop: '0.5rem' }}>Location permissions (fine and coarse) as required by Android for Bluetooth scanning on some versions</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>Location permission is requested for Bluetooth operation requirements and not for location tracking for advertising purposes.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Data Sharing</h3>
                            <p style={{ marginBottom: '1rem' }}>We do not sell or rent your personal data.</p>
                            <p style={{ marginBottom: '1rem' }}>We do not share personal information with third parties except:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>When required by law</li>
                                <li style={{ marginTop: '0.5rem' }}>When necessary to protect rights, safety, or security</li>
                                <li style={{ marginTop: '0.5rem' }}>When you explicitly trigger platform features (for example, sharing content through apps you choose)</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Third-Party Services</h3>
                            <p style={{ marginBottom: '1.5rem' }}>The App may rely on operating system and open-source libraries for functionality (for example audio playback, sharing, launching links, and device sensors). These components may have their own privacy practices.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Data Retention and Deletion</h3>
                            <p style={{ marginBottom: '1rem' }}>Because settings are stored locally, you can remove app data by:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Clearing app storage in your device settings, or</li>
                                <li style={{ marginTop: '0.5rem' }}>Uninstalling the App</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Children</h3>
                            <p style={{ marginBottom: '1.5rem' }}>OmniControl is not intended for children under 13. We do not knowingly collect personal information from children.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Security</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We use reasonable efforts to protect information handled by the App. However, no method of electronic storage or transmission is completely secure.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>10. Changes to This Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We may update this Privacy Policy from time to time. Updated versions will be posted with a new Effective Date.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>11. Contact</h3>
                            <p style={{ marginBottom: '1rem' }}>If you have questions about this Privacy Policy, contact:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '3rem' }}>
                                <li>By email: <a href="mailto:contact@chandusurisetty.in" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>contact@chandusurisetty.in</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OmniControlPrivacy;