import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import Footer from '../components/Footer';

const FlashBridgePrivacy = () => {
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
                        <h1 className="iamchandu" style={{ fontSize: '2.5rem', marginBottom: '1rem', whiteSpace: 'normal', color: 'var(--text-primary)' }}>Privacy Policy for FlashBridge</h1>
                        <p className="bio" style={{ marginBottom: '2rem' }}>Effective Date: July 11, 2026</p>

                        <div className="privacy-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1rem' }}><strong>FlashBridge</strong> (the "App") is developed by <strong>Tabba</strong> ("we", "us", or "our").</p>
                            <p style={{ marginBottom: '1.5rem' }}>This Privacy Policy describes how FlashBridge handles information when you use it on Android devices.</p>
                            <p style={{ marginBottom: '1.5rem' }}>FlashBridge is a local engineering tool for flashing, managing, and communicating with ESP / USB serial devices. It is designed to work primarily on your device without requiring an account.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>1. Summary</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We do not require you to create an account.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not sell personal data.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not use advertising SDKs.</li>
                                <li style={{ marginTop: '0.5rem' }}>In the current release, we do not include third-party analytics trackers.</li>
                                <li style={{ marginTop: '0.5rem' }}>Firmware files, flash history, layouts, and settings stay on your device unless you choose to export or share them.</li>
                                <li style={{ marginTop: '0.5rem' }}>USB access is used only to detect, permission, flash, and communicate with connected hardware on your phone or tablet.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>2. Information the App May Process</h3>
                            <h4 style={{ color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>2.1 Information stored on your device</h4>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Firmware files you import or select.</li>
                                <li style={{ marginTop: '0.5rem' }}>Flash layouts and Advanced Flash Studio configurations.</li>
                                <li style={{ marginTop: '0.5rem' }}>Project profiles and related preferences.</li>
                                <li style={{ marginTop: '0.5rem' }}>Flash history and engineering records.</li>
                                <li style={{ marginTop: '0.5rem' }}>App settings such as theme preference, baud rate, and guidance / OTG tip preferences.</li>
                                <li style={{ marginTop: '0.5rem' }}>Optional diagnostics bundles that you generate.</li>
                            </ul>
                            <p style={{ marginBottom: '1rem' }}>This data remains on your device unless you export, share, back up, or transfer it yourself.</p>

                            <h4 style={{ color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>2.2 Device and USB-related information</h4>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>USB host capability and connected USB device information such as vendor ID, product ID, product name, manufacturer, and serial number when available.</li>
                                <li style={{ marginTop: '0.5rem' }}>Permission status for USB devices.</li>
                                <li style={{ marginTop: '0.5rem' }}>Serial / UART communication data while a console or flash session is active.</li>
                            </ul>
                            <p style={{ marginBottom: '1rem' }}>This information is used to operate the App&apos;s core features on your device. It is not uploaded to FlashBridge servers by the App in the current release.</p>

                            <h4 style={{ color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>2.3 Diagnostics and logs</h4>
                            <p style={{ marginBottom: '1rem' }}>The App may keep in-memory or on-device logs related to flash and console operations to help you troubleshoot. If you use diagnostics export/share features, the exported content may include technical details such as:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Device identifiers available to the App.</li>
                                <li style={{ marginTop: '0.5rem' }}>Flash session status and error information.</li>
                                <li style={{ marginTop: '0.5rem' }}>Related technical metadata.</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>Sharing happens only when you explicitly choose an export/share action and select a destination app or location.</p>

                            <h4 style={{ color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>2.4 App / device metadata (on-device)</h4>
                            <p style={{ marginBottom: '1.5rem' }}>The App may read basic package information such as app version to display in About or support screens.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>3. Information We Do Not Collect by Default</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>We do not require login or account registration.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not collect your name, email, or phone number inside the App for account purposes.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not upload your firmware binaries to FlashBridge servers.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not sell your data to third parties.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not show third-party ads.</li>
                                <li style={{ marginTop: '0.5rem' }}>We do not use advertising identifiers for ad targeting.</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>If this changes in a future version, this Privacy Policy will be updated before or at the time of the change.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>4. How Information Is Used</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Detect and communicate with connected ESP / USB devices.</li>
                                <li style={{ marginTop: '0.5rem' }}>Flash firmware and show progress and results.</li>
                                <li style={{ marginTop: '0.5rem' }}>Provide console and serial monitoring.</li>
                                <li style={{ marginTop: '0.5rem' }}>Save layouts, profiles, history, and preferences.</li>
                                <li style={{ marginTop: '0.5rem' }}>Help recover from flash and console errors.</li>
                                <li style={{ marginTop: '0.5rem' }}>Let you export diagnostics when you request it.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>5. Sharing of Information</h3>
                            <p style={{ marginBottom: '1rem' }}>FlashBridge does not automatically share your firmware, history, or USB device details with us or third parties.</p>
                            <p style={{ marginBottom: '1rem' }}>Information may leave your device only if:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>You export or share a file via Android&apos;s share sheet.</li>
                                <li style={{ marginTop: '0.5rem' }}>You back up device storage through your own backup tools.</li>
                                <li style={{ marginTop: '0.5rem' }}>Required by law, such as a valid legal request related to our website or support channels.</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>Any destination app you choose for sharing is governed by that app&apos;s own privacy policy.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>6. Permissions</h3>
                            <p style={{ marginBottom: '1rem' }}>FlashBridge may request or use permissions such as:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>USB / USB host related access to communicate with connected devices.</li>
                                <li style={{ marginTop: '0.5rem' }}>Storage / file access as required by Android version to import firmware and export diagnostics or logs.</li>
                                <li style={{ marginTop: '0.5rem' }}>Internet access if present in some build variants, typically for development tooling or optional future features; the core flashing workflow is local.</li>
                            </ul>
                            <p style={{ marginBottom: '1.5rem' }}>Permissions are requested to provide app functionality, not for advertising.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>7. Data Retention</h3>
                            <p style={{ marginBottom: '1rem' }}>Because most data is stored on your device:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>It remains until you delete it in the App, clear App data, or uninstall the App.</li>
                                <li style={{ marginTop: '0.5rem' }}>Uninstalling FlashBridge generally removes App-local data stored in the App&apos;s private storage.</li>
                                <li style={{ marginTop: '0.5rem' }}>Files you saved outside the App, such as Downloads or shared folders, are not automatically deleted by uninstalling.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>8. Children&apos;s Privacy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>FlashBridge is intended for general engineering use and is not directed at children under 13. We do not knowingly collect personal information from children.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>9. Security</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We take reasonable steps appropriate for a local utility app, including keeping sensitive operations on-device where possible. No method of electronic storage is 100% secure. You are responsible for physical control of your device and for any files you choose to export or share.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>10. Third-Party Services</h3>
                            <p style={{ marginBottom: '1.5rem' }}>The current App release is designed to operate without advertising or analytics SDKs. If you contact us by email or through our website, that communication is processed through those channels and any providers that host them, such as email or website hosting. Those providers have their own privacy policies.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>11. International Users</h3>
                            <p style={{ marginBottom: '1.5rem' }}>FlashBridge processes data primarily on your device. If you contact us or use our website, your information may be processed in the country where our support or website systems are hosted.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>12. Your Choices and Controls</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Deny USB permission if you do not want the App to access connected devices.</li>
                                <li style={{ marginTop: '0.5rem' }}>Delete imported firmware, layouts, profiles, and history in the App where delete actions are provided.</li>
                                <li style={{ marginTop: '0.5rem' }}>Clear App storage in Android Settings.</li>
                                <li style={{ marginTop: '0.5rem' }}>Uninstall the App.</li>
                                <li style={{ marginTop: '0.5rem' }}>Avoid using export or share features if you do not want files to leave the device.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>13. Play Store Data Safety Alignment</h3>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                                <li>Does the app collect personal data automatically? No, for the current release.</li>
                                <li style={{ marginTop: '0.5rem' }}>Account creation: Not required.</li>
                                <li style={{ marginTop: '0.5rem' }}>Location: Not collected.</li>
                                <li style={{ marginTop: '0.5rem' }}>Photos/videos: Not collected.</li>
                                <li style={{ marginTop: '0.5rem' }}>Files and docs: User-imported firmware may be stored on device; not uploaded by us.</li>
                                <li style={{ marginTop: '0.5rem' }}>Device or other IDs: USB device identifiers may be processed on device for flashing or console features.</li>
                                <li style={{ marginTop: '0.5rem' }}>App activity / diagnostics: On-device logs; shared only if the user exports them.</li>
                                <li style={{ marginTop: '0.5rem' }}>Advertising: No.</li>
                                <li style={{ marginTop: '0.5rem' }}>Analytics: No, for the current release.</li>
                                <li style={{ marginTop: '0.5rem' }}>Data sold: No.</li>
                                <li style={{ marginTop: '0.5rem' }}>Data shared with third parties automatically: No.</li>
                                <li style={{ marginTop: '0.5rem' }}>Users can request deletion: Yes, by deleting in-app data, clearing storage, or uninstalling the App.</li>
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>14. Changes to This Policy</h3>
                            <p style={{ marginBottom: '1.5rem' }}>We may update this Privacy Policy from time to time. The Effective Date at the top will be revised when changes are made. Continued use of the App after an update means you accept the revised policy.</p>

                            <h3 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif', letterSpacing: 'normal' }}>15. Contact Us</h3>
                            <p style={{ marginBottom: '1rem' }}>If you have questions about this Privacy Policy or FlashBridge privacy practices, contact:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '3rem' }}>
                                <li>Developer / Publisher: Tabba</li>
                                <li style={{ marginTop: '0.5rem' }}>Email: <a href="mailto:contact@chandusurisetty.in" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>contact@chandusurisetty.in</a></li>
                                <li style={{ marginTop: '0.5rem' }}>Website: <a href="https://chandusurisetty.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>https://chandusurisetty.github.io/Portfolio/</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FlashBridgePrivacy;
