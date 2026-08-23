import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import pyComImg from '../assets/images/pyCom.png';
import unChatImg from '../assets/images/unChat.png';
import flashBridgeImg from '../assets/images/apps/flashbridge.jpg';
import pocketAiImg from '../assets/images/apps/pocketai.jpg';
import pocketHostImg from '../assets/images/apps/pockethost.jpg';
import omniControlImg from '../assets/images/apps/omnicontrol.jpg';
import mediaForgeImg from '../assets/images/apps/mediaforge.jpg';
import btControlImg from '../assets/images/apps/btcontrol.jpg';
import omniFlashImg from '../assets/images/apps/omniflash.jpg';
import nanoBotImg from '../assets/images/apps/nanobot.jpg';
import autoLoopImg from '../assets/images/apps/autoloop.jpg';
import webExplainerImg from '../assets/images/apps/webexplainer.png';

const projects = [
    {
        title: "Flash Bridge",
        desc: "Flash ESP32 firmware from your phone over USB OTG, then jump into a serial console.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.flashbridge",
        img: flashBridgeImg,
        tools: ["Android", "USB Host", "ESP32"],
        kind: "Android",
    },
    {
        title: "Pocket AI",
        desc: "On-device GGUF assistant. Chat, notes, and optional RAG stay on your phone.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.pocketai",
        img: pocketAiImg,
        tools: ["Flutter", "On-device AI", "GGUF"],
        kind: "Android",
    },
    {
        title: "PocketHost",
        desc: "Host static sites from Android, share a local URL or QR, and keep files on-device.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.pockethost",
        img: pocketHostImg,
        tools: ["Android", "Local Server", "Networking"],
        kind: "Android",
    },
    {
        title: "OmniControl",
        desc: "Turn your phone into a Bluetooth trackpad, keyboard, media remote, and presentation clicker.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.omnicontrol",
        img: omniControlImg,
        tools: ["Android", "Bluetooth HID", "Remote"],
        kind: "Android",
    },
    {
        title: "MediaForge",
        desc: "Offline video, audio, image, and PDF tools. Convert, compress, trim, and OCR locally.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.media_forge",
        img: mediaForgeImg,
        tools: ["Android", "FFmpeg", "OCR"],
        kind: "Android",
    },
    {
        title: "BT Control",
        desc: "Bluetooth joystick, terminal, and controls for Arduino, ESP32, and HC-05.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.btcontrol",
        img: btControlImg,
        tools: ["Android", "Java", "Arduino", "Bluetooth SDK"],
        kind: "Android",
    },
    {
        title: "OmniFlash",
        desc: "Morse and binary toolkit: flash, sound, vibration, camera decode, and WiZ bulb sync.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.omniflash",
        img: omniFlashImg,
        tools: ["Android", "Camera", "IoT"],
        kind: "Android",
    },
    {
        title: "NanoBot",
        desc: "Neon arena shooter with waves, upgrades, and boss fights.",
        link: "https://play.google.com/store/apps/details?id=com.tabba.nanoBot",
        img: nanoBotImg,
        tools: ["Android", "Game", "Arcade"],
        kind: "Android",
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
        img: autoLoopImg,
        tools: ["Chrome Extension", "Automation"],
        kind: "Chrome",
    },
    {
        title: "Web Explainer AI",
        desc: "Highlight any page text for explanations, summaries, or translations with your own API key.",
        link: "https://chromewebstore.google.com/detail/web-explainer-ai/idmkgmjpepicojfeekkoneihpacjdgem",
        img: webExplainerImg,
        tools: ["Chrome Extension", "BYOK", "OpenRouter"],
        kind: "Chrome",
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
                                        style={{ background: `url(${proj.img}) center/cover no-repeat` }}
                                    >
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
