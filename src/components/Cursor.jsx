import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Cursor.css';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState('default');

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: 'transparent',
            border: '2px solid var(--green)',
            height: 32,
            width: 32,
        },
        text: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: 'var(--green)',
            mixBlendMode: 'difference',
            border: 'none',
        }
    };

    return (
        <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        />
    );
};

export default Cursor;
