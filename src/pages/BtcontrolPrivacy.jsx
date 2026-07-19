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
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: July 19, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1rem' }}><strong>BTControl</strong> (the "App") is developed by <strong>Tabba</strong> ("we", "us", or "our").</p>
                            <p style={{ marginBottom: '1.5rem' }}>This Privacy Policy explains how we collect, use, and disclose information when you use BTControl. By using the App, you agree to this Privacy Policy.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Information We Collect</h3>
                            <p style={{ marginBottom: '1rem' }}>BTControl is designed as an anonymous, utility-first application. We do not require or collect any personal information, such as your name, email address, profile photos, or login credentials, and the App can be used fully offline without an account. We collect only the following data:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Device and technical data needed for app functionality and reliability (including Firebase App Check verification signals to ensure security).</li>
                                <li style={{ marginTop: '0.5rem' }}>App interaction and event data, if Usage Analytics is enabled.</li>
                                <li style={{ marginTop: '0.5rem' }}>Crash diagnostics, if Crash Reports is enabled.</li>
                                <li style={{ marginTop: '0.5rem' }}>Advertising-related consent signals and ad request metadata, if ads are enabled.</li>
                                <li style={{ marginTop: '0.5rem' }}>Purchase and subscription metadata (non-sensitive transaction IDs, subscription status, and purchase tokens linked to an anonymous App User ID only) to manage premium features.</li>
                                <li style={{ marginTop: '0.5rem' }}>Bluetooth (Classic & BLE) permissions to communicate with your external hardware devices. This communication happens entirely locally on your device; no Bluetooth communication data or payload is sent to us or any third parties.</li>
                                <li style={{ marginTop: '0.5rem' }}>Local Storage data: Your custom button configurations and application settings are stored locally on your device via secure SharedPreferences.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. How We Use Information</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Providing core Bluetooth discovery and control features locally on your device.</li>
                                <li style={{ marginTop: '0.5rem' }}>Security, fraud prevention, and service integrity (such as using Firebase App Check).</li>
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
                            <p style={{ marginBottom: '1.5rem' }}>We do not require you to enable analytics or crash reporting to use core Bluetooth control functionality.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. In-App Purchases and Subscriptions</h3>
                            <p style={{ marginBottom: '1rem' }}>When you purchase a premium upgrade or subscription within BTControl:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li><strong>Payment Processing:</strong> Payments are securely processed by Google Play Store (Google Play Billing). We do not collect, store, or have access to your credit card, debit card, or billing address details.</li>
                                <li><strong>Subscription Management:</strong> We use RevenueCat to verify and manage subscription status, receipt validation, and premium access entitlements. RevenueCat operates using anonymous App User IDs only. Transaction metadata (such as transaction time, package ID, and purchase tokens) is processed without requiring or linking to any personal user accounts, names, or emails.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Regional Privacy Rights (GDPR + US State Privacy Laws)</h3>
                            <p style={{ marginBottom: '1rem' }}>If you are in the EEA, United Kingdom, or Switzerland, you may have rights under GDPR/UK GDPR, including rights to access, correct, delete, restrict processing, object to processing, and data portability where applicable. Please note that because the App is anonymous and does not collect direct personal identifiers (such as name or email), we cannot verify or link any request to a specific user unless you provide your anonymous App User ID or billing transaction details.</p>
                            <p style={{ marginBottom: '1.5rem' }}>If you are in California or another US state with a consumer privacy law (including, where applicable, CA, CO, CT, VA, and UT), you may have rights to know, access, correct, delete, and opt out of certain processing, including targeted advertising and, where applicable, sale or sharing of personal information.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Legal Bases (GDPR/UK GDPR)</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Performance of a contract (providing requested app features).</li>
                                <li style={{ marginTop: '0.5rem' }}>Legitimate interests (service security and operations, balanced with user rights).</li>
                                <li style={{ marginTop: '0.5rem' }}>Consent (for analytics, ad personalization, and similar processing where required).</li>
                                <li style={{ marginTop: '0.5rem' }}>Legal obligation (where required by law).</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Sharing With Third Parties</h3>
                            <p style={{ marginBottom: '1rem' }}>We use service providers and SDK partners to operate and improve the app. These include providers for analytics, crash reporting, device integrity (Firebase App Check), payment processing, subscription verification (RevenueCat), and advertising services. We do not share any personal authentication data, credentials, or accounts, as the app does not collect them.</p>
                            <p style={{ marginBottom: '1.5rem' }}>Where required by law, we provide choices and honor opt-out/consent signals before such processing occurs.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Data Retention & Deletion</h3>
                            <p style={{ marginBottom: '1rem' }}>Because BTControl does not collect or store any personal accounts, emails, profile photos, or login credentials on our servers, we do not retain personal identifying information. Any custom layouts, configurations, and settings are stored locally on your device; you can delete this data at any time by clearing the App&apos;s data or cache via your device settings, or by uninstalling the App.</p>
                            <p style={{ marginBottom: '1.5rem' }}>Non-identifying transaction metadata, anonymous analytics logs, and crash report data are retained by our third-party service providers (Google and RevenueCat) in accordance with their respective retention and privacy policies.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>10. Non-Discrimination</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We do not discriminate against users for exercising applicable privacy rights.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>11. Children&apos;s Privacy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>BTControl is not directed to children under 13. We do not knowingly collect personal information from children.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>12. Changes to This Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We may update this Privacy Policy from time to time. Updated versions will include a revised Effective Date.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>13. Contact</h3>
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
