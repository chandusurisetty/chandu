import React from 'react';
import { ReactTyped } from 'react-typed';
import cImg from '../assets/images/c.png';
import instaIcon from '../assets/images/icons8-instagram.svg';
import gitIcon from '../assets/images/icons8-github.svg';
import linkedinIcon from '../assets/images/linkedin.svg';

const Hero = () => {
    return (
        <div className="introBar">
            <div className="aboutbar">
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700" className="abouttext">
                    <h1 className="iamchandu">
                        <ReactTyped
                            strings={["<span class='red-text'>#WhoamI?</span>", "//I'm C-Man;", "&lt;I'm Programmer;&sol;&gt;"]}
                            typeSpeed={120}
                            backSpeed={120}
                            smartBackspace={true}
                            loop={true}
                            contentType="html"
                        />
                    </h1>
                    <p className="bio">An Enthusiastic product designer currently shaping the future of AI with security as the main priority</p>
                    <div className="socialnetwork">
                        <a className="instalink" target="_blank" rel="noreferrer" href="https://www.instagram.com/chandu_surisetty/">
                            <img width="30px" src={instaIcon} alt="instagram" />
                        </a>
                        <a className="gitlink" target="_blank" rel="noreferrer" href="https://github.com/chandusurisetty">
                            <img width="30px" src={gitIcon} alt="github" />
                        </a>
                        <a className="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chandu-surisetty-754b94179/">
                            <img width="30px" src={linkedinIcon} alt="linkedin" />
                        </a>
                    </div>
                </div>
                <div className="imgbar">
                    <img data-aos="fade-left" src={cImg} alt="chandusurisetty" />

                    <div className="comic-cloud cloud-5">Web Developer</div>
                    <div className="comic-cloud cloud-2">App Developer</div>
                    <div className="comic-cloud cloud-1">AI Developer</div>
                    <div className="comic-cloud cloud-3">Hardware Validation Engineer</div>
                    <div className="comic-cloud cloud-4">Embedded Dev</div>


                </div>
            </div>
        </div>
    );
};

export default Hero;
