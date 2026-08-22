import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const LogForgePrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>LogForge Privacy Policy</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Last updated: August 22, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1.5rem' }}>LogForge is a USB serial console for Android. It talks to boards you plug in (ESP32, Arduino, STM32, and similar) and shows the text they send over USB.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Data We Collect</h3>
                            <p style={{ marginBottom: '1.5rem' }}>LogForge does not create an account, does not include analytics or advertising SDKs, and does not upload your logs to a server. Serial output, saved sessions, command history, macros, and settings stay on this device.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>USB and Device Access</h3>
                            <p style={{ marginBottom: '1.5rem' }}>The app requests USB host permission only for the board you choose. That permission is used to open a serial port, send commands, and toggle DTR/RTS. LogForge does not browse other USB devices for data unrelated to the console.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Sharing and Export</h3>
                            <p style={{ marginBottom: '1.5rem' }}>You can share or export a session. Those actions are started by you and use the Android share sheet or the Downloads folder. LogForge does not share captures in the background.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Permissions</h3>
                            <p style={{ marginBottom: '1.5rem' }}>USB host access is optional and used only when you connect a board. Storage access on older Android versions is used only when you save a file to Downloads.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Contact</h3>
                            <p style={{ marginBottom: '1rem' }}>Questions about this policy can be sent to the developer listed on the LogForge Google Play store listing, or directly via email:</p>
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

export default LogForgePrivacy;
