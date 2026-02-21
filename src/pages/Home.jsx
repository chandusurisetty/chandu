import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import SkillBar from '../components/SkillBar';
import RecentProjects from '../components/RecentProjects';
import ContactBar from '../components/ContactBar';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="container">
                <Header />
                <Hero />
            </div>
            <SkillBar />
            <RecentProjects />
            <ContactBar />
            <Footer />
        </>
    );
};

export default Home;
