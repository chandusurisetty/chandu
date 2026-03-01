import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const UnchatPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for UnChat</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Last updated: February 25, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information We Collect</h3>
                            <p style={{ marginBottom: '1rem' }}>UnChat is an ephemeral, real-time chat application. We collect the following information when you use our service:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Usernames:</strong> You provide a username when joining the application to identify yourself in chat rooms.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Chat Messages:</strong> We process messages sent in public and private rooms. These messages are processed in real-time.</li>
                                <li style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>Room Passwords:</strong> If you create a private room, we store the hashed password to restrict access to authorized users.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How We Use Your Information</h3>
                            <p style={{ marginBottom: '1rem' }}>The information we collect is used strictly for the core functionality of the app:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>To facilitate real-time communication between users.</li>
                                <li style={{ marginTop: '0.5rem' }}>To identify participants within public and private rooms.</li>
                                <li style={{ marginTop: '0.5rem' }}>To secure private rooms from unauthorized access.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Data Storage and Retention</h3>
                            <p style={{ marginBottom: '1.5rem' }}>UnChat is designed for real-time communication. We prioritize your privacy and minimize data storage wherever possible. We do not sell, rent, or trade your personal information to any third parties.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Security</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We implement industry-standard security measures, including HTTPS/WSS encryption, to protect your data while it is in transit between your device and our servers.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Changes to This Privacy Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Contact Us</h3>
                            <p style={{ marginBottom: '3rem' }}>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:contact@chandusurisetty.in" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>contact@chandusurisetty.in</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UnchatPrivacy;
