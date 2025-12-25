import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="numbered-heading" style={{ justifyContent: 'center', margin: '0 auto 20px', color: 'var(--green)' }}>
                    04. What's Next?
                </p>
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-text">
                    I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a className="contact-btn" href="mailto:ningaraddi225@gmail.com">
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
