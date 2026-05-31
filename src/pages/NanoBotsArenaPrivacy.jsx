import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const NanoBotsArenaPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for NanoBots Arena</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Last Updated: May 31, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1rem' }}><strong>NanoBots Arena</strong> (the "Game") is developed by <strong>Tabba</strong> ("we", "us", or "our") as a free-to-play game.</p>
                            <p style={{ marginBottom: '1.5rem' }}>This Privacy Policy explains our policies regarding the collection, use, and disclosure of information when you play the Game. By playing NanoBots Arena, you agree to this Privacy Policy.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Zero Data Collection</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We do not collect, request, transmit, or share personal information from players through our own servers. Your gameplay data stays on your device.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information Collection and Use</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>No account is required. You are not asked to register, log in, or provide contact details such as email, name, or phone number to play.</li>
                                <li style={{ marginTop: '0.5rem' }}>All stars, high scores, lab upgrades, custom settings, skin changes, and coin balances are stored locally on your device (for example, SharedPreferences/local storage).</li>
                                <li style={{ marginTop: '0.5rem' }}>This local game data is not transmitted to our servers.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. Third-Party Platform Services</h3>
                            <p style={{ marginBottom: '1rem' }}>The Game is distributed through mobile platforms such as Google Play and Apple App Store.</p>
                            <p style={{ marginBottom: '1rem' }}>While we do not collect personal data ourselves, platform providers may process technical data (for example, crash diagnostics or device-level telemetry) under their own policies.</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>Google Privacy Policy</a></li>
                                <li style={{ marginTop: '0.5rem' }}><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>Apple Privacy Policy</a></li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Cookies and Local Caches</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>The Game does not use web cookie trackers.</li>
                                <li style={{ marginTop: '0.5rem' }}>Game profile/progress data is saved locally on your device.</li>
                                <li style={{ marginTop: '0.5rem' }}>If you clear app data, clear cache, or uninstall the Game, your locally saved progress may be permanently deleted.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Children&apos;s Privacy</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Because we do not collect personal information through the Game, we do not knowingly collect personal information from children.</li>
                                <li style={{ marginTop: '0.5rem' }}>The Game does not show targeted ads or ask players for personal data in normal gameplay.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Security</h3>
                            <p style={{ marginBottom: '1.5rem' }}>Since game profiles and coin balances are stored locally on your device, no player profile database is hosted by us for this Game. We still recommend keeping your device updated and protected with standard security settings.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Changes to This Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Contact Support</h3>
                            <p style={{ marginBottom: '1rem' }}>If you have any questions about this Privacy Policy, contact us:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '3rem' }}>
                                <li>Email: <a href="mailto:contact@chandusurisetty.in" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>contact@chandusurisetty.in</a></li>
                                <li style={{ marginTop: '0.5rem' }}>Developer: Tabba Games</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NanoBotsArenaPrivacy;
