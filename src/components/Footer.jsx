import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footlogo">
                <div className="brand-logo">
                    <img src="/favicon.png" alt="Logo" />
                    <h2></h2>
                </div>
                <div className="cpyterms">
                    <p>Copyright © {new Date().getFullYear()} Chandu surisetty - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
