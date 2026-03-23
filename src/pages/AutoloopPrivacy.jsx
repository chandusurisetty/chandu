import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const AutoloopPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for AutoLoop</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Last Updated: March 24, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1.5rem' }}>AutoLoop ("we," "our," or "the extension") is a privacy-first Chrome Extension designed to record and replay user interactions on webpages locally. We are deeply committed to protecting your privacy. This Privacy Policy explains exactly how your data is handled when you use AutoLoop.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. What Data We Process</h3>
                            <p style={{ marginBottom: '1rem' }}>In order to automate your tasks, AutoLoop temporarily records your interactions on the active webpage you have explicitly chosen to record. This data strictly includes:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>User Activity:</strong> Mouse clicks, scroll positions, and keystrokes while the "Recording" mode is active.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Website Content:</strong> The CSS structural paths of the buttons you click, and the text you temporarily type into forms.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. Where Your Data is Stored (100% Local)</h3>
                            <p style={{ marginBottom: '1rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>AutoLoop does not collect, transmit, or store any of your data on external servers.</strong></p>
                            <p style={{ marginBottom: '1.5rem' }}>All telemetry, keystrokes, and website interactions recorded by the extension are saved strictly and exclusively on your personal device's local hard drive using <code>chrome.storage.local</code>.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Data Sharing and Third-Parties</h3>
                            <p style={{ marginBottom: '1rem' }}>Because your data never leaves your device, we do not have access to it, and we cannot share it.</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>do not</strong> sell, rent, or trade your data.</li>
                                <li style={{ marginTop: '0.5rem' }}>We <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>do not</strong> use third-party analytics trackers, crash reporters, or telemetry services.</li>
                                <li style={{ marginTop: '0.5rem' }}>We <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>do not</strong> transmit your data to any external APIs or servers.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. How to Delete Your Data</h3>
                            <p style={{ marginBottom: '1rem' }}>You have complete control over the data recorded by AutoLoop.</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Manual Deletion:</strong> You can delete individual recorded steps or clear your entire macro history directly within the extension's popup interface.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Complete Erasure:</strong> Uninstalling the AutoLoop Chrome Extension from your browser will permanently and irreversibly delete all locally stored macro data associated with the extension.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Contact Us</h3>
                            <p style={{ marginBottom: '1rem' }}>If you have any questions or concerns regarding this Privacy Policy or how AutoLoop handles your local data, please contact the developer directly:</p>
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

export default AutoloopPrivacy;
