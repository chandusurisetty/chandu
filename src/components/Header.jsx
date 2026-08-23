import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            className="site-header"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <div className="seen">
                <a className="name" href="/">
                    <motion.img
                        src="/favicon.png"
                        alt="Chandu-Man logo"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    />
                    <h2>Chandu-Man</h2>
                </a>
                <nav className="navcont" aria-label="Primary">
                    <ul>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
