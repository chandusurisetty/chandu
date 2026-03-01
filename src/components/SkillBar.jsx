import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma, FaGithub, FaDocker, FaAws, FaGitAlt, FaLinux, FaBootstrap
} from 'react-icons/fa';
import {
    SiJavascript, SiTailwindcss, SiMongodb, SiTypescript, SiPostgresql, SiExpress, SiNextdotjs, SiFlutter, SiFirebase, SiMysql, SiRedis, SiPandas, SiAndroid, SiCplusplus, SiC, SiTensorflow, SiOpencv, SiNumpy, SiGnubash, SiFlask, SiGooglecolab, SiArduino, SiPytorch, SiDart
} from 'react-icons/si';

// Top Row: Languages & Core Syntax
const languageSkills = [
    { name: 'Python', icon: <FaPython size={40} color="#3776AB" /> },
    { name: 'Java', icon: <FaJava size={40} color="#007396" /> },
    { name: 'C++', icon: <SiCplusplus size={40} color="#00599C" /> },
    { name: 'C', icon: <SiC size={40} color="#A8B9CC" /> },
    { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
    { name: 'Dart', icon: <SiDart size={40} color="#0175C2" /> },
    { name: 'Shell / Bash', icon: <SiGnubash size={40} color="#4EAA25" /> },
    { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" /> }
];

// Bottom Row: Tools, Frameworks, & Platforms
const toolSkills = [
    { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
    { name: 'Flutter', icon: <SiFlutter size={40} color="#02569B" /> },
    { name: 'Android Dev', icon: <SiAndroid size={40} color="#3DDC84" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={40} color="#ffffff" /> },
    { name: 'Express', icon: <SiExpress size={40} color="#ffffff" /> },
    { name: 'Flask', icon: <SiFlask size={40} color="#ffffff" /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={40} color="#06B6D4" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={40} color="#7952B3" /> },
    { name: 'TensorFlow', icon: <SiTensorflow size={40} color="#FF6F00" /> },
    { name: 'PyTorch', icon: <SiPytorch size={40} color="#EE4C2C" /> },
    { name: 'Pandas', icon: <SiPandas size={40} color="#150458" /> },
    { name: 'NumPy', icon: <SiNumpy size={40} color="#013243" /> },
    { name: 'OpenCV', icon: <SiOpencv size={40} color="#5C3EE8" /> },
    { name: 'MySQL', icon: <SiMysql size={40} color="#4479A1" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} color="#4169E1" /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
    { name: 'Redis', icon: <SiRedis size={40} color="#DC382D" /> },
    { name: 'Firebase', icon: <SiFirebase size={40} color="#FFCA28" /> },
    { name: 'AWS', icon: <FaAws size={40} color="#FF9900" /> },
    { name: 'Docker', icon: <FaDocker size={40} color="#2496ED" /> },
    { name: 'Linux', icon: <FaLinux size={40} color="#FCC624" /> },
    { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
    { name: 'Arduino', icon: <SiArduino size={40} color="#00979D" /> },
    { name: 'Colab', icon: <SiGooglecolab size={40} color="#F9AB00" /> },
    { name: 'Figma', icon: <FaFigma size={40} color="#F24E1E" /> },
    { name: 'GitHub', icon: <FaGithub size={40} color="#ffffff" /> },
    { name: 'Extension Dev', icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: 'FreeRTOS', icon: <SiC size={40} color="#A8B9CC" /> }
];

// Helper to double the array so the pure CSS marquee loops seamlessly
const getMarqueeItems = (rowArray) => [...rowArray, ...rowArray];

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
};

const SkillBar = () => {
    return (
        <motion.div
            className="skillbar"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className="skillcont">
                <div className="skillcol">
                    <strong>MY TECH STACK</strong>
                    <h1>Languages & Tools I Use</h1>
                </div>

                <motion.div
                    className="marquee-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    {/* Row 1 - Scrolls Left */}
                    <div className="marquee-track row1">
                        {getMarqueeItems(languageSkills).map((skill, index) => (
                            <div key={`lang-${index}`} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 - Scrolls Right */}
                    <div className="marquee-track row2">
                        {getMarqueeItems(toolSkills).map((skill, index) => (
                            <div key={`tool-${index}`} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SkillBar;
