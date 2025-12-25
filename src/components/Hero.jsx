import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import '../styles/Hero.css';
import profileImg from '../assets/profile.png';

const Hero = () => {
    const [hearts, setHearts] = useState([]);

    const spawnHeart = useCallback(() => {
        const id = Date.now();
        const colors = ['#f57dff', '#64ffda', '#57cbff', '#8b5cf6', '#ef4444', '#f59e0b'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomLeft = Math.random() * 80 + 10; // 10% to 90% width relative to container

        const newHeart = {
            id,
            color: randomColor,
            left: randomLeft,
        };

        setHearts((prev) => [...prev, newHeart]);

        // Remove heart after animation
        setTimeout(() => {
            setHearts((prev) => prev.filter((h) => h.id !== id));
        }, 1500);
    }, []);

    const handleImageClick = () => {
        // Spawn multiple hearts
        for (let i = 0; i < 5; i++) {
            setTimeout(spawnHeart, i * 100);
        }
    };

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
                <div className="avatar-wrapper" onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                    <img src={profileImg} alt="Ningaraddi Raddi" className="avatar-image" />

                    <AnimatePresence>
                        {hearts.map((heart) => (
                            <motion.div
                                key={heart.id}
                                className="floating-heart"
                                initial={{ opacity: 1, y: 0, scale: 0.5, x: '-50%' }}
                                animate={{ opacity: 0, y: -200, scale: 1.5 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                style={{
                                    color: heart.color,
                                    left: `${heart.left}%`
                                }}
                            >
                                <FaHeart />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
