import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import '../styles/index.css'; // Global styles cover simple footer text

const Footer = () => {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'auto',
        minHeight: '70px',
        padding: '15px',
        textAlign: 'center',
    };

    const socialStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '270px',
        margin: '0 auto 10px',
        color: 'var(--light-slate)',
    };

    const linkStyle = {
        padding: '10px',
        cursor: 'pointer',
        transition: 'var(--transition)',
    };

    return (
        <footer style={footerStyle}>
            <div style={socialStyle}>
                <a href="https://github.com/ningaraddiraddi" target="_blank" rel="noreferrer" style={linkStyle}><FaGithub size={20} /></a>
                <a href="https://www.linkedin.com/in/ningaraddi-raddi/" target="_blank" rel="noreferrer" style={linkStyle}><FaLinkedin size={20} /></a>
                {/* Placeholder links provided in prompt or generic */}
                <a href="https://leetcode.com/u/mercapto225/" target="_blank" rel="noreferrer" style={linkStyle}><SiLeetcode size={20} /></a>
                <a href="https://www.codechef.com/users/ningaraddi" target="_blank" rel="noreferrer" style={linkStyle}><SiCodechef size={20} /></a>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--light-slate)' }}>
                <a href="https://github.com/ningaraddiraddi" target="_blank" rel="noreferrer">
                    Designed & Built by Ningaraddi Raddi
                </a>
            </div>
        </footer>
    );
};

export default Footer;
