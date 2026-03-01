import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import cImg from '../assets/images/c.png';
import instaIcon from '../assets/images/icons8-instagram.svg';
import gitIcon from '../assets/images/icons8-github.svg';
import linkedinIcon from '../assets/images/linkedin.svg';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 10 }
        }
    };

    return (
        <div className="introBar">
            <div className="aboutbar">
                <motion.div
                    className="abouttext"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.h1 variants={itemVariants} className="iamchandu">
                        <ReactTyped
                            strings={["<span class='red-text'>#WhoamI?</span>", "//I'm C-Man;", "&lt;I'm Programmer;&sol;&gt;"]}
                            typeSpeed={120}
                            backSpeed={120}
                            smartBackspace={true}
                            loop={true}
                            contentType="html"
                        />
                    </motion.h1>
                    <motion.p variants={itemVariants} className="bio">An Enthusiastic product designer currently shaping the future of AI with security as the main priority</motion.p>
                    <motion.div variants={itemVariants} className="socialnetwork">
                        <a className="instalink" target="_blank" rel="noreferrer" href="https://www.instagram.com/chandu_surisetty/">
                            <img width="30px" src={instaIcon} alt="instagram" />
                        </a>
                        <a className="gitlink" target="_blank" rel="noreferrer" href="https://github.com/chandusurisetty">
                            <img width="30px" src={gitIcon} alt="github" />
                        </a>
                        <a className="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chandu-surisetty-754b94179/">
                            <img width="30px" src={linkedinIcon} alt="linkedin" />
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="imgbar"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.5 }}
                >
                    <motion.img
                        src={cImg}
                        alt="chandusurisetty"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    />

                    <motion.div
                        className="comic-cloud cloud-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                    >Web Developer</motion.div>
                    <motion.div
                        className="comic-cloud cloud-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, type: "spring" }}
                    >App Developer</motion.div>
                    <motion.div
                        className="comic-cloud cloud-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4, type: "spring" }}
                    >AI Developer</motion.div>
                    <motion.div
                        className="comic-cloud cloud-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.6, type: "spring" }}
                    >Hardware Engineer</motion.div>
                    {/* <div className="comic-cloud cloud-4">Embedded Dev</div> */}


                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
