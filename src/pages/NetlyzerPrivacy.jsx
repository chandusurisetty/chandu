import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const NetlyzerPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for Netlyzer</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: May 8, 2026 | Last Updated: May 8, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1.5rem' }}>Netlyzer is designed to help users analyze and understand their local network and Wi-Fi environment. We value user privacy and keep data collection to the minimum required for core app functionality.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. What the App May Access</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Wi-Fi and network details available on the device (such as SSID, BSSID, signal strength, link speed, IP-related details, and nearby network scan results)</li>
                                <li style={{ marginTop: '0.5rem' }}>Device or network interface information needed to display diagnostics</li>
                                <li style={{ marginTop: '0.5rem' }}>Optional file save actions (for example, exporting text logs to the Downloads folder when initiated by the user)</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How Data Is Used</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Data is used only to provide network analysis features inside the app</li>
                                <li style={{ marginTop: '0.5rem' }}>Data is processed on-device for diagnostics and display purposes</li>
                                <li style={{ marginTop: '0.5rem' }}>Exported files are created only when the user explicitly chooses to save or export content</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Data Sharing</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We do not sell personal data</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not share collected network diagnostics with third parties for advertising</li>
                                <li style={{ marginTop: '0.5rem' }}>No background data transfer is performed for marketing purposes</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Data Storage</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Most network scan and diagnostic data is temporary and shown in-app during use</li>
                                <li style={{ marginTop: '0.5rem' }}>If the user exports logs or files, those files are stored locally on the user&apos;s device in the selected location</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Permissions</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>The app may request location and nearby Wi-Fi related permissions on supported Android versions because these permissions are required by the operating system to access Wi-Fi scan information</li>
                                <li style={{ marginTop: '0.5rem' }}>Permissions are used only for network analysis features and can be revoked by the user in system settings</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. User Control</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Users can deny or revoke permissions at any time</li>
                                <li style={{ marginTop: '0.5rem' }}>Users can delete exported files from device storage at any time</li>
                                <li style={{ marginTop: '0.5rem' }}>If certain permissions are denied, related features may be limited or unavailable</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Children&apos;s Privacy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>The app is not intended to knowingly collect personal information from children.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Changes to This Policy</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>This privacy note may be updated over time to reflect feature, legal, or platform changes</li>
                                <li style={{ marginTop: '0.5rem' }}>Updated versions should be published with a revised effective date</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Contact</h3>
                            <p style={{ marginBottom: '1rem' }}>For privacy-related questions, users can contact the app owner or developer via the contact details listed on the official portfolio or app page.</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '3rem' }}>
                                <li>Portfolio: <a href="https://chandusurisetty.in/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>https://chandusurisetty.in/</a></li>
                                <li style={{ marginTop: '0.5rem' }}>Email: <a href="mailto:contact@chandusurisetty.in" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>contact@chandusurisetty.in</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NetlyzerPrivacy;