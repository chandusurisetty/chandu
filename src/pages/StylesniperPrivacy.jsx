import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const StylesniperPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for Style Sniper</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: March 24, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Overview</h3>
                            <p style={{ marginBottom: '1rem' }}>Style Sniper ("we," "our," or "the Extension") is fundamentally built with user privacy and security as its absolute highest priorities. This Privacy Policy outlines our data handling practices and explains why our extension is inherently secure by design.</p>
                            <p style={{ marginBottom: '1.5rem' }}>Style Sniper <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>does not collect, store, transmit, or share any of your personal data.</strong></p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information We Do NOT Collect</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>No Personal Data:</strong> We do not ask for or collect any personally identifiable information (such as names or email addresses).</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>No Tracking:</strong> We do not track your browsing history, monitor the websites you visit, or log your search queries.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>No Telemetry or Analytics:</strong> We do not use specialized tracking scripts (like Google Analytics) to monitor how you interact with the extension.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>No Storage Used:</strong> Style Sniper deliberately avoids using any persistent browser storage APIs. Once you close the popup or refresh the page, all extracted data is instantly wiped from memory.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How The Extension Works</h3>
                            <p style={{ marginBottom: '1rem' }}>Style Sniper operates 100% locally on your machine. When you activate the extension, it temporarily injects a lightweight highlight box into the active webpage. When you click an element, the extension temporarily reads the browser's raw rendering math (<code>window.getComputedStyle</code>) strictly for the purpose of allowing you to copy it to your clipboard or export it to CodePen.</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>This data is never transmitted to us or any secondary external servers.</li>
                                <li style={{ marginTop: '0.5rem' }}>The extension does not read your passwords, input fields, or personal profile data.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Permissions Justification</h3>
                            <p style={{ marginBottom: '1rem' }}>To function as intended, Style Sniper requires the following minimal Chrome permissions:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>activeTab:</strong> This allows the extension to interact only with the specific webpage you are currently viewing, and only when you explicitly click the extension icon to activate it.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>scripting:</strong> This allows the extension to dynamically inject our visual highlight box and CSS-extraction engine into the active page so you can select an element.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Third-Party Services</h3>
                            <p style={{ marginBottom: '1.5rem' }}>Style Sniper does not use any third-party APIs or remote code. The only external interaction the extension performs is generating a secure standard POST request to codepen.io only when the user explicitly clicks the "Open in CodePen" export button.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Changes to This Privacy Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We may update our Privacy Policy if we introduce entirely new features. Any changes will be posted on this page with an updated "Effective Date."</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Contact Us</h3>
                            <p style={{ marginBottom: '3rem' }}>If you have any questions or concerns regarding our privacy practices, please contact the developer via the official web store support channel.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default StylesniperPrivacy;
