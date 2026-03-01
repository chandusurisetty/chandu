import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            className="seen"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <motion.div
                className="name"
                whileHover={{ scale: 1.05 }}
            >
                <motion.img
                    src="/favicon.png"
                    alt="Logo"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                />
                <h2>Chandu-Man</h2>
            </motion.div>
        </motion.header>
    );
};

export default Header;
