import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const BtcontrolPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for BTControl</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: June 5, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1rem' }}><strong>BTControl</strong> (the "App") is developed by <strong>Tabba</strong> ("we", "us", or "our").</p>
                            <p style={{ marginBottom: '1.5rem' }}>This Privacy Policy explains how we collect, use, and disclose information when you use BTControl. By using the App, you agree to this Privacy Policy.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information We Collect</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Device and technical data needed for app functionality and reliability.</li>
                                <li style={{ marginTop: '0.5rem' }}>App interaction and event data, if Usage Analytics is enabled.</li>
                                <li style={{ marginTop: '0.5rem' }}>Crash diagnostics, if Crash Reports is enabled.</li>
                                <li style={{ marginTop: '0.5rem' }}>Advertising-related consent signals and ad request metadata, if ads are enabled.</li>
                                <li style={{ marginTop: '0.5rem' }}>Account data you provide for sign-in features, if those features are used.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How We Use Information</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Providing core Bluetooth discovery and control features.</li>
                                <li style={{ marginTop: '0.5rem' }}>Security, fraud prevention, and service integrity.</li>
                                <li style={{ marginTop: '0.5rem' }}>Measuring and improving app performance and reliability when analytics/crash reporting is enabled.</li>
                                <li style={{ marginTop: '0.5rem' }}>Showing and measuring ads, subject to user privacy preferences and consent requirements.</li>
                                <li style={{ marginTop: '0.5rem' }}>Complying with legal obligations and lawful requests.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Advertising and Third-Party Services</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>BTControl uses Google AdMob for in-app ads.</li>
                                <li style={{ marginTop: '0.5rem' }}>Ad providers may collect or receive data such as advertising ID, device information, approximate location derived from IP address, and ad interaction events.</li>
                                <li style={{ marginTop: '0.5rem' }}>For details about how Google handles data for AdMob, review Google&apos;s Privacy Policy and AdMob documentation.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. In-App Privacy Choices</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Usage Analytics: enables or disables Firebase Analytics collection.</li>
                                <li style={{ marginTop: '0.5rem' }}>Crash Reports: enables or disables Firebase Crashlytics collection.</li>
                                <li style={{ marginTop: '0.5rem' }}>Do Not Sell or Share My Personal Information: applies a US-style opt-out for ad-related sharing and disables ad requests in the app where available.</li>
                                <li style={{ marginTop: '0.5rem' }}>Manage Ad Privacy Choices: opens the Google User Messaging Platform (UMP) privacy options form when available for your region.</li>
                                <li style={{ marginTop: '0.5rem' }}>You can change these settings at any time.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Regional Privacy Rights (GDPR + US State Privacy Laws)</h3>
                            <p style={{ marginBottom: '1rem' }}>If you are in the EEA, United Kingdom, or Switzerland, you may have rights under GDPR/UK GDPR, including rights to access, correct, delete, restrict processing, object to processing, and data portability where applicable.</p>
                            <p style={{ marginBottom: '1.5rem' }}>If you are in California or another US state with a consumer privacy law (including, where applicable, CA, CO, CT, VA, and UT), you may have rights to know, access, correct, delete, and opt out of certain processing, including targeted advertising and, where applicable, sale or sharing of personal information.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Legal Bases (GDPR/UK GDPR)</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Performance of a contract (providing requested app features).</li>
                                <li style={{ marginTop: '0.5rem' }}>Legitimate interests (service security and operations, balanced with user rights).</li>
                                <li style={{ marginTop: '0.5rem' }}>Consent (for analytics, ad personalization, and similar processing where required).</li>
                                <li style={{ marginTop: '0.5rem' }}>Legal obligation (where required by law).</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Sharing With Third Parties</h3>
                            <p style={{ marginBottom: '1rem' }}>We use service providers and SDK partners to operate and improve the app. These may include providers for authentication, analytics, crash reporting, and advertising services.</p>
                            <p style={{ marginBottom: '1.5rem' }}>Where required by law, we provide choices and honor opt-out/consent signals before such processing occurs.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Retention</h3>
                            <p style={{ marginBottom: '1rem' }}>We retain personal data only for as long as needed for the purposes described in this policy, unless a longer period is required by law.</p>
                            <p style={{ marginBottom: '1.5rem' }}>If you request deletion, we will process your request consistent with applicable law and technical constraints.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Non-Discrimination</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We do not discriminate against users for exercising applicable privacy rights.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>10. Children&apos;s Privacy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>BTControl is not directed to children under 13. We do not knowingly collect personal information from children.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>11. Changes to This Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We may update this Privacy Policy from time to time. Updated versions will include a revised Effective Date.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>12. Contact</h3>
                            <p style={{ marginBottom: '1rem' }}>Privacy requests and questions:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '3rem' }}>
                                <li>Email: <a href="mailto:contact@chandusurisetty.in" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>contact@chandusurisetty.in</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BtcontrolPrivacy;
