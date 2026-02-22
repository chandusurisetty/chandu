import React from 'react';
import { Link } from 'react-router-dom';

const RecentProjects = () => {
    return (
        <div className="container2">
            <div className="aboutbar2">
                <div className="col1">
                    <div>
                        <h1 className="RecentProj">Recent <br /> Projects</h1>
                    </div>
                    <a className="imglink" target="_blank" rel="noreferrer" href="https://skaich.onrender.com">
                        <div data-aos="zoom-in" className="projimg ping1">
                            <p>skAIch</p>
                        </div>
                    </a>
                    <div className="com_view">
                        <h1><Link className="allProj" to="/projects">More <strong>+</strong></Link></h1>
                    </div>
                </div>
                <div className="col2">
                    <a target="_blank" rel="noreferrer" className="imglink" href="https://pycom.chandusurisetty.in/">
                        <div data-aos="zoom-in" className="projimg ping2">
                            <p>PyCom</p>
                        </div>
                    </a>
                    <a target="_blank" rel="noreferrer" className="imglink" href="https://unchat.chandusurisetty.in/">
                        <div data-aos="zoom-in" className="projimg ping3">
                            <p>UnChat</p>
                        </div>
                    </a>
                    <div className="phone_view">
                        <h1><Link className="allProj" to="/projects">More <strong>+</strong></Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentProjects;
