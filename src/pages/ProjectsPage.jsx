import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';

// Using the same Header component internally, modified slightly for project routes if needed, 
// but we can just use the exact same one or an ad-hoc one for specific "Projects" page header needs.

import ContactBar from '../components/ContactBar';
import Footer from '../components/Footer';

import unChatImg from '../assets/images/unChat.png';
import badjokeImg from '../assets/images/badjoke.jpg';
import rpsImg from '../assets/images/rps.jpg';
import alpacaImg from '../assets/images/alpaca.jpg';
import calculatorImg from '../assets/images/calculator.jpg';
import skaichImg from '../assets/images/skaich.png';
import pyComImg from '../assets/images/pyCom.png';

const projects = [
    { img: unChatImg, title: "UnChat", desc: "Chat With People", link: "https://chandusurisetty.github.io/UnChat/" },
    { img: badjokeImg, title: "BadJoke", desc: "Generates a random joke", link: "https://chandusurisetty.github.io/badJoke/" },
    { img: rpsImg, title: "Rock Paper Scissors", desc: "Play Rock Paper Scissors with Computer", link: "https://chandusurisetty.github.io/RockPaperScissors/" },
    { img: alpacaImg, title: "Alpaca Generator", desc: "Create your own Alpaca Avatar", link: "https://chandusurisetty.github.io/alapacagenerator/" },
    { img: calculatorImg, title: "Calculator", desc: "Normal Online calculator", link: "https://chandusurisetty.github.io/calculator/" },
    { img: skaichImg, title: "skAIch", desc: "Create amazing artworks using the power of AI.", link: "https://skaich.onrender.com" },
    { img: pyComImg, title: "PyCom", desc: "Online Python Compiler", link: "https://pycom.onrender.com/" },
];

const ProjectsPage = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="container">
                <header className="seen">
                    <div className="name">
                        <h2>C . S</h2>
                    </div>
                    <nav className="navcont">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </nav>
                </header>

                <div className="introBar">
                    <div className="aboutbar">
                        {projects.map((proj, idx) => (
                            <div className="projectbar" key={idx}>
                                <a target="_blank" rel="noreferrer" href={proj.link}>
                                    <img src={proj.img} alt={proj.title} />
                                </a>
                                <div>
                                    <h3>{proj.title}</h3>
                                    <p>{proj.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ContactBar />
            <Footer />
        </>
    );
};

export default ProjectsPage;
