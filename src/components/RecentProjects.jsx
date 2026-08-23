import React from 'react';
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
        desc: "Ephemeral rooms for real-time chat. No accounts, no leftover history.",
        link: "https://unchat.chandusurisetty.in/",
        img: unChatImg,
        tools: ["Flutter", "Dart", "Firebase", "WebSockets"],
        kind: "Web",
    },
    {
        title: "PyCom",
        desc: "Run Python in the browser with a clean online compiler.",
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

const androidApps = projects.filter((project) => project.kind === 'Android');
const webAndExtensions = projects.filter((project) => project.kind !== 'Android');

const ctaLabel = (kind) => {
    if (kind === 'Android') {
        return 'Play Store';
    }
    if (kind === 'Chrome') {
        return 'Chrome Store';
    }
    return 'Open';
};

const ProjectCard = ({ project, index }) => (
    <motion.article
        className="project-card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: Math.min(index * 0.06, 0.3), type: "spring", stiffness: 180 }}
    >
        <a
            className="project-card-media"
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} ${ctaLabel(project.kind)}`}
        >
            <img src={project.img} alt={`${project.title} preview`} />
        </a>
        <div className="project-card-body">
            <span className="project-kind">{project.kind}</span>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-stack">
                {project.tools.map((tool) => (
                    <span key={tool} className="tech-badge">{tool}</span>
                ))}
            </div>
            <a
                className="project-cta"
                href={project.link}
                target="_blank"
                rel="noreferrer"
            >
                {ctaLabel(project.kind)} ↗
            </a>
        </div>
    </motion.article>
);

const ProjectRow = ({ title, items }) => (
    <div className="project-group">
        <h2 className="project-group-title">{title}</h2>
        <div className="project-row">
            {items.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </div>
    </div>
);

const RecentProjects = () => {
    return (
        <div className="container2" id="projects">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="RecentProj">Featured <br /> Projects</h1>
                <p className="swipe-hint">‹ SWIPE TO EXPLORE ›</p>
            </motion.div>

            <ProjectRow title="Apps" items={androidApps} />
            <ProjectRow title="Web & extensions" items={webAndExtensions} />
        </div>
    );
};

export default RecentProjects;
