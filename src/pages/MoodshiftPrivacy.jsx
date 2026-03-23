import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const MoodshiftPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for MoodShift</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: March 23, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Overview</h3>
                            <p style={{ marginBottom: '1rem' }}>MoodShift ("we," "our," or "the Extension") is committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our browser extension.</p>
                            <p style={{ marginBottom: '1.5rem' }}>Because we believe in digital privacy, MoodShift <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>does not collect, store, transmit, or share any of your personal data.</strong></p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information We Do NOT Collect</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>No Personal Data:</strong> We do not collect names, email addresses, or any personally identifiable information.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>No Tracking:</strong> We do not track your browsing history, the websites you visit, or your search queries.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>No Telemetry/Analytics:</strong> We do not track how you use the extension, nor do we send diagnostic data to external servers.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How Your Preferences Are Stored</h3>
                            <p style={{ marginBottom: '1rem' }}>MoodShift uses the <code>chrome.storage.local</code> API exclusively to save your chosen settings (such as your active color theme, selected emoji, and animation preferences).</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>This data remains 100% local to your device.</li>
                                <li style={{ marginTop: '0.5rem' }}>It is uniquely tied to your browser installation and is never uploaded, synced to the cloud, or transmitted to any external servers or third parties.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Permissions Needed</h3>
                            <p style={{ marginBottom: '1rem' }}>To function properly, MoodShift requires the following Chrome permission:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>&lt;all_urls&gt; (Host Permission):</strong> This allows our visual theme engine to seamlessly inject CSS to change colors and display interactive animations on the active webpage you are viewing. The extension only alters the visual display layered on top of the DOM; it does not read, scrape, or extract any content, passwords, or data from the pages you visit.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>storage:</strong> Used locally to save your theme preferences so they persist across tabs.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Third-Party Services</h3>
                            <p style={{ marginBottom: '1.5rem' }}>MoodShift does not use any third-party APIs, CDNs, or remote code. The extension runs entirely offline on your computer.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Changes to This Privacy Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We may update our Privacy Policy from time to time if the extension introduces new features. Any changes will be posted on this page with an updated "Effective Date."</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Contact Us</h3>
                            <p style={{ marginBottom: '1rem' }}>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact the developer:</p>
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

export default MoodshiftPrivacy;
