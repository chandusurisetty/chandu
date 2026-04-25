import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const OmniflashPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for OmniFlash</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Last updated: April 26, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1.5rem' }}>OmniFlash values your privacy. This note explains what data may be collected when you use the app and why.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Data We Collect</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Account data: Email address and authentication details when you sign in with Email or Password or Google Sign-In.</li>
                                <li style={{ marginTop: '0.5rem' }}>Crash data: Crash logs, stack traces, app version, device model, and OS version through Firebase Crashlytics.</li>
                                <li style={{ marginTop: '0.5rem' }}>Analytics data: Basic app usage events and engagement metrics through Firebase Analytics.</li>
                                <li style={{ marginTop: '0.5rem' }}>Permission-based access: Camera or flashlight, microphone, vibration, and related device features used only for app functionality.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How We Use Data</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>To create and manage user accounts.</li>
                                <li style={{ marginTop: '0.5rem' }}>To maintain sign-in sessions and account security.</li>
                                <li style={{ marginTop: '0.5rem' }}>To detect crashes and improve app stability.</li>
                                <li style={{ marginTop: '0.5rem' }}>To understand feature usage and improve app experience.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Third-Party Services</h3>
                            <p style={{ marginBottom: '1rem' }}>OmniFlash uses:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Firebase Authentication</li>
                                <li style={{ marginTop: '0.5rem' }}>Firebase Crashlytics</li>
                                <li style={{ marginTop: '0.5rem' }}>Firebase Analytics</li>
                                <li style={{ marginTop: '0.5rem' }}>Google Play services</li>
                            </ul>
                            <p style={{ marginBottom: '1rem' }}>Related policies:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Google Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>https://policies.google.com/privacy</a></li>
                                <li style={{ marginTop: '0.5rem' }}>Firebase Privacy and Security: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>https://firebase.google.com/support/privacy</a></li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Data Retention</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Account data is kept while your account is active.</li>
                                <li style={{ marginTop: '0.5rem' }}>Crash and analytics data are retained according to Firebase retention settings.</li>
                                <li style={{ marginTop: '0.5rem' }}>Some data may be retained longer if required for legal, security, or fraud-prevention reasons.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Account Deletion</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>You can delete your account from in-app Account settings.</li>
                                <li style={{ marginTop: '0.5rem' }}>Re-authentication may be required before deletion.</li>
                                <li style={{ marginTop: '0.5rem' }}>After deletion, authentication account data is removed from the Firebase project, subject to technical and legal constraints.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Children&apos;s Privacy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>OmniFlash is not intended for children under 13 (or the minimum age required in your region). We do not knowingly collect personal data from children.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. International Processing</h3>
                            <p style={{ marginBottom: '1.5rem' }}>Data may be processed in countries outside your own through Google or Firebase infrastructure.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Security</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We use reasonable technical and organizational safeguards to protect data. No system can guarantee absolute security.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Policy Updates</h3>
                            <p style={{ marginBottom: '1.5rem' }}>This policy may be updated from time to time. Changes take effect when a revised version is published with a new Last updated date.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>10. Contact</h3>
                            <p style={{ marginBottom: '1rem' }}>For privacy questions or requests, contact:</p>
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

export default OmniflashPrivacy;
