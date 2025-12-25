import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="nav-content">
                <a href="/" className="logo">NR</a>

                <div className="nav-items-center">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#projects" className="nav-link">Work</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>

                <div className="nav-socials">
                    <a href="https://github.com/ningaraddi-raddi" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
