import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import pyComImg from '../assets/images/pyCom.png';
import unChatImg from '../assets/images/unChat.png';
import btControlImg from '../assets/images/btcontrol.jpg';
import bitFlashImg from '../assets/images/bitFlash.png';

const projects = [
    { title: "PyCom", desc: "Online Python Compiler", link: "https://pycom.chandusurisetty.in/", img: pyComImg },
    { title: "UnChat", desc: "Ephemeral Real-time Chat", link: "https://unchat.chandusurisetty.in/", img: unChatImg },
    { title: "BT Control", desc: "Smart Bluetooth Controller", link: "https://play.google.com/store/apps/details?id=com.tabba.btcontrol", img: btControlImg },
    // { title: "BitFlash", desc: "Morse Code Flash Reader", link: "#", img: bitFlashImg }
];

// Separate BentoCard component to manage its own mouse state for the 3D tilt
const RecentProjects = () => {
    const carouselRef = useRef();
    const [width, setWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [projects]);

    return (
        <div className="container2" id="projects">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: '3rem' }}
            >
                <h1 className="RecentProj">Featured <br /> Projects</h1>
                <p className="swipe-hint" style={{ color: 'var(--accent-cyan)', fontFamily: 'Orbitron', fontSize: '0.9rem', marginTop: '1rem', letterSpacing: '1px' }}>
                    ‹ SWIPE TO EXPLORE ›
                </p>
            </motion.div>

            <motion.div
                ref={carouselRef}
                className="carousel-container"
                whileTap={{ cursor: "grabbing" }}
                style={{ overflow: "hidden", cursor: "grab", padding: "1rem 0" }}
            >
                <motion.div
                    className="carousel-track"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    dragElastic={0.2}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => {
                        // Small delay before enabling clicks again to avoid misclicks after dropping
                        setTimeout(() => setIsDragging(false), 150);
                    }}
                >
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            className="carousel-item"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className="imglink"
                                href={proj.link}
                                onClick={(e) => {
                                    if (isDragging) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }
                                }}
                            >
                                <div className="projimg" style={{ background: `url(${proj.img}) center/cover no-repeat` }}>
                                    <div className="bento-content">
                                        <h3>{proj.title}</h3>
                                        <p>{proj.desc}</p>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default RecentProjects;
