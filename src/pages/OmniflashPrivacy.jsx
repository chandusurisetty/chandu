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
                        <p className="bio" style={{ marginBottom: '2rem' }}>Last updated: March 13, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1rem' }}>This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the OmniFlash mobile application (the "Service") and tells You about Your privacy rights and how the law protects You.</p>
                            
                            <p style={{ marginBottom: '1rem' }}>By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. OmniFlash is designed with privacy as a priority. <strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>We do not collect, store, or transmit any of your personal data, audio recordings, or camera feeds to external servers.</strong></p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information Collection and Use</h3>
                            
                            <p style={{ marginBottom: '1rem' }}>OmniFlash processes certain data entirely locally on your device to provide its core functionality. We require specific device permissions to operate:</p>

                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Camera Permission (Flashlight):</strong> We require access to your device's camera hardware strictly to toggle the LED flashlight on and off for Morse code and visual signaling. We do not capture, record, or transmit photographs or video feeds.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Microphone Permission (Audio Recording):</strong> We require access to your device's microphone for the "Sound Reader" feature. The audio data is processed locally in real-time on your device to decode audio signals into text. No audio recordings are ever saved, stored, or transmitted over the internet.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Local Network/WiFi Access:</strong> We require network access for the "Smart Bulb Sync" feature. The app sends local UDP/TCP signals directly to IoT devices (like smart bulbs) residing on your local network. Your IP address and network configurations are not transmitted to us or any third parties.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. Third-Party Services</h3>
                            <p style={{ marginBottom: '1rem' }}>The Service is built using the Flutter framework and utilizes third-party open-source plugins to interact with device hardware (such as camera, vibration, and microphone). These plugins execute locally and do not independently harvest or transmit your personal data.</p>
                            
                            <p style={{ marginBottom: '1.5rem' }}>If you download OmniFlash via the Google Play Store, Google may collect standard app crash diagnostics and usage metrics per the Google Play Terms of Service. Please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>Google's Privacy Policy</a> for more information on how they handle this data.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Security of Your Data</h3>
                            <p style={{ marginBottom: '1.5rem' }}>The security of Your data is important to Us. Because OmniFlash processes your hardware inputs (audio, camera) exclusively on-device and does not communicate with external developer servers, the risk of data breaches involving your personal information through our Service is virtually eliminated.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Children's Privacy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. Because our App operates entirely offline (with the exception of local network broadcast for smart bulbs) and does not collect user data, it is inherently safe for all ages.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Changes to This Privacy Policy</h3>
                            <p style={{ marginBottom: '1rem' }}>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                            <p style={{ marginBottom: '1.5rem' }}>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Contact Us</h3>
                            <p style={{ marginBottom: '1rem' }}>If you have any questions about this Privacy Policy, You can contact us:</p>
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
