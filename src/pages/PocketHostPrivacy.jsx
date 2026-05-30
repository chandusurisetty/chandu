import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const PocketHostPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for PocketHost</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: May 31, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1rem' }}>This Privacy Policy explains how PocketHost ("the App") handles information when you use the App.</p>
                            <p style={{ marginBottom: '1.5rem' }}>PocketHost lets you host multiple websites directly from your Android device. We designed PocketHost to keep data handling minimal and under your control.</p>
                            <p style={{ marginBottom: '1.5rem' }}>PocketHost may display ads in the app using Google AdMob. Some limited technical data may be processed by ad partners for ad delivery and measurement.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information We Collect</h3>
                            <p style={{ marginBottom: '1rem' }}>PocketHost does not require account creation and does not collect personal data such as your name, phone number, or address for normal app usage.</p>
                            <p style={{ marginBottom: '1rem' }}>The App may process the following data on your device:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Websites and files you choose to host from your device storage</li>
                                <li style={{ marginTop: '0.5rem' }}>App preferences such as theme mode, startup behavior, and host settings</li>
                                <li style={{ marginTop: '0.5rem' }}>Runtime host activity data such as connection events and in-memory audit logs used for diagnostics inside the app</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How We Use Information</h3>
                            <p style={{ marginBottom: '1rem' }}>Information processed by the App is used only to provide core functionality, including:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Serving your selected websites from your Android device</li>
                                <li style={{ marginTop: '0.5rem' }}>Managing host controls such as token authentication, IP allowlist, and rate limiting</li>
                                <li style={{ marginTop: '0.5rem' }}>Showing local host status and troubleshooting details in the app interface</li>
                                <li style={{ marginTop: '0.5rem' }}>Requesting and displaying advertisements through third-party ad services</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Data Storage and Retention</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>App preferences are stored locally on your device.</li>
                                <li style={{ marginTop: '0.5rem' }}>Audit logs are maintained in memory during runtime (FIFO, maximum 1000 entries) and are not designed as permanent cloud records.</li>
                                <li style={{ marginTop: '0.5rem' }}>PocketHost does not operate a dedicated backend server to store your personal data for normal app use.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Network and Security Features</h3>
                            <p style={{ marginBottom: '1rem' }}>Because PocketHost is a local hosting app, it handles network requests to and from clients that connect to your hosted websites.</p>
                            <p style={{ marginBottom: '1rem' }}>The App includes security controls such as token authentication, IP allowlist, and rate limiting to help protect hosted content.</p>
                            <p style={{ marginBottom: '1.5rem' }}>You are responsible for how you configure your hosting environment, including network exposure and content served through the App.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Permissions</h3>
                            <p style={{ marginBottom: '1rem' }}>PocketHost may request permissions needed to run local hosting features, such as access to files you select and network-related capabilities required by Android.</p>
                            <p style={{ marginBottom: '1.5rem' }}>Permissions are used only for core app behavior and not for advertising profile creation by us.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Data Sharing</h3>
                            <p style={{ marginBottom: '1rem' }}>We do not sell or rent your personal data.</p>
                            <p style={{ marginBottom: '1rem' }}>We do not share personal information with third parties except in limited cases such as:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>When required by law</li>
                                <li style={{ marginTop: '0.5rem' }}>When necessary to protect rights, safety, or security</li>
                                <li style={{ marginTop: '0.5rem' }}>When platform providers process standard operational data under their own policies (for example, app store distribution diagnostics)</li>
                                <li style={{ marginTop: '0.5rem' }}>When ad networks process limited technical data needed to serve ads and measure ad performance</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Third-Party Services</h3>
                            <p style={{ marginBottom: '1rem' }}>PocketHost may depend on operating system components, open-source libraries, and ad service providers. These services may have their own privacy practices.</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>PocketHost uses Google AdMob for in-app advertising.</li>
                                <li>Ad providers may collect or receive data such as advertising ID, device details, approximate location derived from IP address, and ad interaction events.</li>
                                <li style={{ marginTop: '0.5rem' }}>You can manage ad personalization and reset your advertising ID in your device settings where available.</li>
                                <li style={{ marginTop: '0.5rem' }}>For details about data handling by AdMob, review Google&apos;s Privacy Policy and AdMob documentation.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Children</h3>
                            <p style={{ marginBottom: '1.5rem' }}>PocketHost is not intended for children under 13. We do not knowingly collect personal information from children.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Changes to This Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised Effective Date.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>10. Contact</h3>
                            <p style={{ marginBottom: '1rem' }}>If you have questions about this Privacy Policy, contact:</p>
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

export default PocketHostPrivacy;