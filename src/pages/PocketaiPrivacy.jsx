import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const PocketaiPrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for PocketAI</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: June 5, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1.5rem' }}>PocketAI is designed to run AI features locally on your device.</p>
                            <p style={{ marginBottom: '1.5rem' }}>PocketAI may also display ads. This means certain limited data may be processed by ad partners as described below.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information We Collect</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We do not require account registration.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not collect personal data on our servers by default.</li>
                                <li style={{ marginTop: '0.5rem' }}>Chat content, notes, downloaded models, and app settings are stored locally on your device.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How Your Data Is Used</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Your local data is used only to provide app features such as AI chat, notes search, and model management.</li>
                                <li style={{ marginTop: '0.5rem' }}>Data processing for AI inference is performed on-device.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Internet Access</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Internet may be used only for optional actions such as downloading AI model files or app dependencies or updates.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not upload your chat or note content as part of normal app use.</li>
                                <li style={{ marginTop: '0.5rem' }}>Internet access is also used to request and deliver ads from third-party ad networks.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. Advertising and Third-Party Services</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>PocketAI uses Google AdMob to display ads in the app.</li>
                                <li style={{ marginTop: '0.5rem' }}>Ad providers may collect or receive data such as advertising ID, device information, approximate location derived from IP address, and ad interaction events.</li>
                                <li style={{ marginTop: '0.5rem' }}>This data is used by ad providers for ad delivery, frequency capping, fraud prevention, and measurement under their own privacy policies.</li>
                                <li style={{ marginTop: '0.5rem' }}>For details about how Google handles data for AdMob, review Google&apos;s Privacy Policy and AdMob documentation.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Data Sharing</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We do not sell your personal information.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not share your local chat or notes data with third parties unless required by law.</li>
                                <li style={{ marginTop: '0.5rem' }}>Third-party ad networks may process limited technical data as needed to serve ads.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Data Retention and Control</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>You can delete chats, notes, and models inside the app.</li>
                                <li style={{ marginTop: '0.5rem' }}>Uninstalling the app typically removes app-local data, subject to your device or OS behavior.</li>
                                <li style={{ marginTop: '0.5rem' }}>You can reset your device advertising ID or adjust ad personalization settings through your device settings where supported.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Security</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We apply reasonable measures to protect local app data.</li>
                                <li style={{ marginTop: '0.5rem' }}>No method of storage or transmission is 100% secure.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Children&apos;s Privacy</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>The app is not directed to children under 13.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not knowingly collect personal information from children.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Changes to This Policy</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We may update this policy from time to time.</li>
                                <li style={{ marginTop: '0.5rem' }}>Updated versions will include a revised Effective Date.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>10. Regional Privacy Addendum (GDPR + US State Privacy Laws)</h3>
                            <p style={{ marginBottom: '1rem' }}>If you are in the EEA, United Kingdom, or Switzerland, you may have rights under GDPR/UK GDPR, including rights to access, correct, delete, restrict processing, object to processing, and data portability where applicable.</p>
                            <p style={{ marginBottom: '1rem' }}>If you are in California or another US state with a consumer privacy law (including, where applicable, CA, CO, CT, VA, and UT), you may have rights to know, access, correct, delete, and opt out of certain processing, including targeted advertising and, where applicable, sale or sharing of personal information.</p>
                            <p style={{ marginBottom: '1.5rem' }}>To submit a rights request, contact us at <a href="mailto:contact@chandusurisetty.in" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>contact@chandusurisetty.in</a>.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>11. In-App Privacy Choices</h3>
                            <p style={{ marginBottom: '1rem' }}>PocketAI supports privacy controls through device settings and, where available in your app version and region, in-app privacy options.</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Do Not Sell or Share My Personal Information: where offered, this applies a US-style opt-out for ad-related sharing and may disable ad requests.</li>
                                <li style={{ marginTop: '0.5rem' }}>Manage Ad Privacy Choices: where supported, this opens available ad privacy options for your region (for example, Google UMP options).</li>
                                <li style={{ marginTop: '0.5rem' }}>You can also reset advertising ID and control ad personalization from your device settings where supported.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>12. Data Categories We Process</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Device and technical data for app functionality and reliability.</li>
                                <li style={{ marginTop: '0.5rem' }}>Advertising-related consent signals and ad request metadata if ads are enabled.</li>
                                <li style={{ marginTop: '0.5rem' }}>Local app content (such as chats, notes, models, and settings) that remains on-device unless you choose to share it.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>13. Purposes of Processing</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Providing core app features.</li>
                                <li style={{ marginTop: '0.5rem' }}>Security, fraud prevention, and service integrity.</li>
                                <li style={{ marginTop: '0.5rem' }}>Showing and measuring ads, subject to user privacy preferences and consent requirements.</li>
                                <li style={{ marginTop: '0.5rem' }}>Complying with legal obligations and lawful requests.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>14. Legal Bases (GDPR/UK GDPR)</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Performance of a contract (providing requested app features).</li>
                                <li style={{ marginTop: '0.5rem' }}>Legitimate interests (service operations and security, balanced with user rights).</li>
                                <li style={{ marginTop: '0.5rem' }}>Consent (for ad personalization and related processing where required).</li>
                                <li style={{ marginTop: '0.5rem' }}>Legal obligation (where required by law).</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>15. Sharing With Third Parties</h3>
                            <p style={{ marginBottom: '1rem' }}>We use service providers and SDK partners to operate and improve app services, including advertising services such as Google AdMob.</p>
                            <p style={{ marginBottom: '1.5rem' }}>Where required by law, we provide choices and honor applicable consent or opt-out signals before processing.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>16. Retention</h3>
                            <p style={{ marginBottom: '1rem' }}>We retain personal data only for as long as needed for the purposes described in this policy, unless a longer retention period is required by law.</p>
                            <p style={{ marginBottom: '1.5rem' }}>If you request deletion, we will process your request in line with applicable law and technical constraints.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>17. Non-Discrimination</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We do not discriminate against users for exercising applicable privacy rights.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>18. Contact</h3>
                            <p style={{ marginBottom: '1rem' }}>For privacy questions, contact:</p>
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

export default PocketaiPrivacy;
