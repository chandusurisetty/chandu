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
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: 25 April 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1rem' }}>This Privacy Policy explains how OmniControl (&quot;the App&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and protects information when you use the App.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information We Collect</h3>
                            <p style={{ marginBottom: '1rem' }}>OmniControl is designed to turn your mobile device into a remote controller for supported computers and devices. Depending on the features you use, the App may collect or process the following information:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Account information, such as your email address, when you create an account or sign in using Firebase Authentication</li>
                                <li style={{ marginTop: '0.5rem' }}>Google account sign-in information, if you choose to sign in with Google</li>
                                <li style={{ marginTop: '0.5rem' }}>Bluetooth device information needed to discover, pair with, and communicate with nearby devices</li>
                                <li style={{ marginTop: '0.5rem' }}>Motion and sensor input from your device for features such as air mouse and gesture-based controls</li>
                                <li style={{ marginTop: '0.5rem' }}>App settings and preferences you choose, such as sound settings, glow effects, sensitivity, and custom key mappings</li>
                                <li style={{ marginTop: '0.5rem' }}>Basic technical and diagnostic data provided by Firebase Authentication and platform services to support secure sign-in and account access</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>We do not request unnecessary personal information beyond what is needed to provide sign-in and app functionality.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How We Use Information</h3>
                            <p style={{ marginBottom: '1rem' }}>We use information only for legitimate app functionality and support purposes, including:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Creating and authenticating user accounts</li>
                                <li style={{ marginTop: '0.5rem' }}>Enabling email/password login and Google Sign-In</li>
                                <li style={{ marginTop: '0.5rem' }}>Sending account-related emails such as email verification and password reset messages</li>
                                <li style={{ marginTop: '0.5rem' }}>Discovering and connecting to Bluetooth devices</li>
                                <li style={{ marginTop: '0.5rem' }}>Enabling remote control features such as keyboard, mouse, media, presentation, numpad, shortcuts, and gamepad controls</li>
                                <li style={{ marginTop: '0.5rem' }}>Saving your preferences so the App behaves as you configured it</li>
                                <li style={{ marginTop: '0.5rem' }}>Maintaining security, preventing abuse, and troubleshooting sign-in problems</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Authentication and Firebase</h3>
                            <p style={{ marginBottom: '1rem' }}>OmniControl uses Firebase Authentication, a Google service, to support account creation, login, logout, email verification, password reset, and Google Sign-In.</p>
                            <p style={{ marginBottom: '1rem' }}>When you use these features, certain account data is processed by Google Firebase in accordance with Google&apos;s privacy and security practices. This may include your email address, authentication provider information, user identifier, and related sign-in metadata.</p>
                            <p style={{ marginBottom: '1.5rem' }}>If you choose Google Sign-In, Google may provide us with basic profile or account information required to authenticate you, such as your email address.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Data Storage</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Account authentication data is managed through Firebase Authentication.</li>
                                <li style={{ marginTop: '0.5rem' }}>App preferences are stored locally on your device using local app storage.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not maintain our own custom backend database for normal remote-control usage.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Permissions</h3>
                            <p style={{ marginBottom: '1rem' }}>OmniControl may request the following Android permissions:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Bluetooth permissions, including scan, connect, and advertise, to find and communicate with nearby Bluetooth devices</li>
                                <li style={{ marginTop: '0.5rem' }}>Location permissions, where required by Android for Bluetooth scanning on certain versions</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>Location-related permissions are requested only to support Bluetooth functionality and are not used for advertising-based location tracking.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Data Sharing</h3>
                            <p style={{ marginBottom: '1rem' }}>We do not sell or rent your personal information.</p>
                            <p style={{ marginBottom: '1rem' }}>We may share or disclose information only in the following limited situations:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>With service providers that are necessary to operate the App, such as Firebase Authentication</li>
                                <li style={{ marginTop: '0.5rem' }}>When required by law, regulation, legal process, or governmental request</li>
                                <li style={{ marginTop: '0.5rem' }}>When necessary to protect rights, safety, security, or prevent abuse</li>
                                <li style={{ marginTop: '0.5rem' }}>When you explicitly use platform features that involve sharing through third-party apps or services you choose</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Data Retention and Deletion</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Local settings remain on your device until you remove them, clear app storage, or uninstall the App.</li>
                                <li style={{ marginTop: '0.5rem' }}>Authentication data associated with your account is retained by Firebase until your account is deleted, subject to Firebase and Google&apos;s retention practices.</li>
                                <li style={{ marginTop: '0.5rem' }}>You can request deletion by using the in-app Delete Account feature, which removes your authenticated account from Firebase Authentication.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Third-Party Services</h3>
                            <p style={{ marginBottom: '1rem' }}>The App uses third-party services and libraries, including but not limited to:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Firebase Authentication</li>
                                <li style={{ marginTop: '0.5rem' }}>Google Sign-In</li>
                                <li style={{ marginTop: '0.5rem' }}>Device and platform APIs for Bluetooth, sensors, sharing, audio playback, and opening links</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>These third-party services may have their own privacy policies and terms.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Security</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We use reasonable technical and organizational measures to protect data handled by the App. However, no method of electronic storage, authentication, or transmission over the internet can be guaranteed to be completely secure.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>10. Children&apos;s Privacy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>OmniControl is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, please contact us so we can take appropriate action.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>11. Changes to This Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We may update this Privacy Policy from time to time. When we do, we will revise the Effective Date. Continued use of the App after changes become effective means you accept the updated policy.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>12. Contact</h3>
                            <p style={{ marginBottom: '1rem' }}>If you have questions about this Privacy Policy, contact:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '3rem' }}>
                                <li>Chandu Surisetty</li>
                                <li style={{ marginTop: '0.5rem' }}>By email: <a href="mailto:contact@chandusurisetty.in" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>contact@chandusurisetty.in</a></li>
                                <li style={{ marginTop: '0.5rem' }}><a href="https://chandusurisetty.in/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>https://chandusurisetty.in/</a></li>
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