import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import pyComImg from '../assets/images/pyCom.png';
import unChatImg from '../assets/images/unChat.png';
import btControlImg from '../assets/images/btcontrol.jpg';
import bitFlashImg from '../assets/images/bitFlash.png';

const projects = [
    {
        title: "Flash Bridge",
        desc: "Flash ESP32 firmware from your phone over USB OTG, then jump into a serial console.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.flashbridge",
        tools: ["Android", "USB Host", "ESP32"],
        kind: "Android",
        mark: "FB",
        accent: "#22d3ee",
    },
    {
        title: "Pocket AI",
        desc: "On-device GGUF assistant. Chat, notes, and optional RAG stay on your phone.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.pocketai",
        tools: ["Flutter", "On-device AI", "GGUF"],
        kind: "Android",
        mark: "AI",
        accent: "#818cf8",
    },
    {
        title: "PocketHost",
        desc: "Host static sites from Android, share a local URL or QR, and keep files on-device.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.pockethost",
        tools: ["Android", "Local Server", "Networking"],
        kind: "Android",
        mark: "PH",
        accent: "#34d399",
    },
    {
        title: "OmniControl",
        desc: "Turn your phone into a Bluetooth trackpad, keyboard, media remote, and presentation clicker.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.omnicontrol",
        tools: ["Android", "Bluetooth HID", "Remote"],
        kind: "Android",
        mark: "OC",
        accent: "#38bdf8",
    },
    {
        title: "MediaForge",
        desc: "Offline video, audio, image, and PDF tools. Convert, compress, trim, and OCR locally.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.media_forge",
        tools: ["Android", "FFmpeg", "OCR"],
        kind: "Android",
        mark: "MF",
        accent: "#f472b6",
    },
    {
        title: "BT Control",
        desc: "Smart Bluetooth Controller",
        link: "https://play.google.com/store/apps/details?id=com.tabba.btcontrol",
        img: btControlImg,
        tools: ["Android", "Java", "Arduino", "Bluetooth SDK"],
        kind: "Android",
    },
    {
        title: "OmniFlash",
        desc: "Morse and binary toolkit: flash, sound, vibration, camera decode, and WiZ bulb sync.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.omniflash",
        img: bitFlashImg,
        tools: ["Android", "Camera", "IoT"],
        kind: "Android",
    },
    {
        title: "NanoBot",
        desc: "Neon arena shooter with waves, upgrades, and boss fights.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.nanoBot",
        tools: ["Android", "Game", "Arcade"],
        kind: "Android",
        mark: "NB",
        accent: "#f59e0b",
    },
    {
        title: "UnChat",
        desc: "Ephemeral Real-time Chat",
        link: "https://unchat.chandusurisetty.in/",
        img: unChatImg,
        tools: ["Flutter", "Dart", "Firebase", "WebSockets"],
        kind: "Web",
    },
    {
        title: "PyCom",
        desc: "Online Python Compiler",
        link: "https://pycom.chandusurisetty.in/",
        img: pyComImg,
        tools: ["Python", "Flask", "React", "Docker"],
        kind: "Web",
    },
    {
        title: "AutoLoop",
        desc: "Privacy-first Chrome macro recorder. Record clicks and replay them on a loop.",
        link: "https://chromewebstore.google.com/detail/autoloop-%F0%9F%A4%96/anhakngaoioocdnbkebeibbbmcgmmako",
        tools: ["Chrome Extension", "Automation"],
        kind: "Chrome",
        mark: "AL",
        accent: "#a78bfa",
    },
    {
        title: "Web Explainer AI",
        desc: "Highlight any page text for explanations, summaries, or translations with your own API key.",
        link: "https://chromewebstore.google.com/detail/web-explainer-ai/idmkgmjpepicojfeekkoneihpacjdgem",
        tools: ["Chrome Extension", "BYOK", "OpenRouter"],
        kind: "Chrome",
        mark: "WE",
        accent: "#22d3ee",
    },
];

const RecentProjects = () => {
    const carouselRef = useRef();
    const [width, setWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const el = carouselRef.current;
        if (!el) {
            return undefined;
        }

        const updateWidth = () => {
            setWidth(Math.max(0, el.scrollWidth - el.offsetWidth));
        };

        updateWidth();
        const observer = new ResizeObserver(updateWidth);
        observer.observe(el);
        window.addEventListener('resize', updateWidth);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

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
                        setTimeout(() => setIsDragging(false), 150);
                    }}
                >
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={proj.title}
                            className="carousel-item flip-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: Math.min(idx * 0.08, 0.4), type: "spring", stiffness: 200 }}
                        >
                            <motion.div
                                className="flip-card-inner"
                                whileHover={{ rotateY: 180 }}
                                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                            >
                                <div className="flip-card-front">
                                    <div
                                        className="projimg"
                                        style={proj.img ? { background: `url(${proj.img}) center/cover no-repeat` } : undefined}
                                    >
                                        {!proj.img && (
                                            <div
                                                className="project-cover"
                                                style={{ '--cover-accent': proj.accent || 'var(--accent-cyan)' }}
                                            >
                                                <span className="project-cover-mark">{proj.mark || proj.title.slice(0, 2)}</span>
                                                <span className="project-cover-title">{proj.title}</span>
                                            </div>
                                        )}
                                        <div className="bento-content">
                                            <span className="project-kind">{proj.kind}</span>
                                            <h3>{proj.title}</h3>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    className="flip-card-back"
                                    href={proj.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => {
                                        if (isDragging) {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }
                                    }}
                                >
                                    <span className="project-kind">{proj.kind}</span>
                                    <h3>{proj.title}</h3>
                                    <p>{proj.desc}</p>
                                    <div className="tech-stack">
                                        {proj.tools && proj.tools.map((tool) => (
                                            <span key={tool} className="tech-badge">{tool}</span>
                                        ))}
                                    </div>
                                    <span className="view-project-btn">View Project ↗</span>
                                </a>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default RecentProjects;
