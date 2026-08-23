import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footlogo">
                <a className="brand-logo" href="/">
                    <img src="/favicon.png" alt="Chandu-Man logo" />
                    <h2>Chandu-Man</h2>
                </a>
                <div className="footer-socials">
                    <a href="https://github.com/chandusurisetty" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/chandu-surisetty-754b94179/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://instagram.com/chandu_surisetty" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                </div>
                <div className="cpyterms">
                    <p>Copyright © {new Date().getFullYear()} Chandu surisetty - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
