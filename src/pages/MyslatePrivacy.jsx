import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const MyslatePrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for MySlate</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: April 30, 2026 | Last Updated: April 30, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1rem' }}>Thank you for using MySlate.</p>
                            <p style={{ marginBottom: '1rem' }}>MySlate is a child-focused educational app designed for learning activities such as drawing, letter tracing, word play, and number practice.</p>
                            <p style={{ marginBottom: '1.5rem' }}>This Privacy Policy explains what information MySlate handles and how it is used.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information We Collect</h3>
                            <p style={{ marginBottom: '1rem' }}>MySlate does not collect personal information such as:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                                <li>Name</li>
                                <li style={{ marginTop: '0.5rem' }}>Email address</li>
                                <li style={{ marginTop: '0.5rem' }}>Phone number</li>
                                <li style={{ marginTop: '0.5rem' }}>Precise location</li>
                                <li style={{ marginTop: '0.5rem' }}>Contacts</li>
                                <li style={{ marginTop: '0.5rem' }}>Photos</li>
                                <li style={{ marginTop: '0.5rem' }}>Payment information</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>MySlate does not require account creation or sign-in.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. Data Stored on Device</h3>
                            <p style={{ marginBottom: '1rem' }}>MySlate stores learning data locally on your device to support app features, including:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
                                <li>Learning progress (stars, scores, streaks, badges)</li>
                                <li style={{ marginTop: '0.5rem' }}>Onboarding completion state</li>
                                <li style={{ marginTop: '0.5rem' }}>Parent-control settings</li>
                                <li style={{ marginTop: '0.5rem' }}>Parent access history (if parent features are used)</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>Parent PIN data is stored using secure device storage where available.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Data Sharing</h3>
                            <p style={{ marginBottom: '1rem' }}>MySlate does not sell, rent, or share personal data with third parties.</p>
                            <p style={{ marginBottom: '1.5rem' }}>Because MySlate does not collect personal data, there is no personal data transfer to external advertising or analytics networks.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Ads and In-App Purchases</h3>
                            <p style={{ marginBottom: '1rem' }}>MySlate does not display third-party ads.</p>
                            <p style={{ marginBottom: '1.5rem' }}>MySlate does not include in-app purchases.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Internet and Offline Use</h3>
                            <p style={{ marginBottom: '1rem' }}>MySlate core learning features are designed to work offline.</p>
                            <p style={{ marginBottom: '1.5rem' }}>Internet access is not required for normal educational use.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Children&apos;s Privacy</h3>
                            <p style={{ marginBottom: '1rem' }}>MySlate is intended for children and is designed with privacy-first principles. We do not knowingly collect personal information from children.</p>
                            <p style={{ marginBottom: '1.5rem' }}>If you believe personal information has been provided in connection with MySlate, please contact us and we will address the issue promptly.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Data Retention and Control</h3>
                            <p style={{ marginBottom: '1rem' }}>Data is retained on the device unless removed by the user.</p>
                            <p style={{ marginBottom: '1rem' }}>Parents can reset learning progress and parent-control data from within the app.</p>
                            <p style={{ marginBottom: '1.5rem' }}>Removing or uninstalling the app may also remove locally stored app data, depending on device behavior.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Security</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We apply reasonable safeguards for local app data, including secure storage for sensitive parent-control credentials. However, no method of storage is completely risk-free.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Changes to This Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We may update this Privacy Policy from time to time. When updates are made, we will revise the Last Updated date above.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>10. Contact</h3>
                            <p style={{ marginBottom: '1rem' }}>If you have questions about this Privacy Policy, contact:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '3rem' }}>
                                <li>MySlate Team</li>
                                <li style={{ marginTop: '0.5rem' }}>Email: <a href="mailto:support@tabba.in" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>support@tabba.in</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyslatePrivacy;