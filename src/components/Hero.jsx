import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="hero-headline">
                        Trust me, I'm a <br />
                        <span className="text-cyan">Software Engineer.</span>
                    </h1>
                    <p className="hero-bio">
                        My name is <strong>Ningaraddi Raddi</strong>. I am a final-year CS student who loves building
                        <span className="text-purple"> production-grade</span> scalable systems and exploring
                        <span className="text-cyan"> AI-integrated</span> solutions.
                    </p>

                    <div className="hero-actions">
                        <a href="mailto:ningaraddi225@gmail.com" className="btn-primary">
                            Contact Me
                        </a>
                        <a href="#projects" className="btn-secondary">
                            View Work
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="hero-image-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="avatar-wrapper">
                    <img src={profileImg} alt="Ningaraddi Raddi" className="avatar-image" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
