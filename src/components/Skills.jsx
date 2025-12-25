import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const skillsData = [
    {
        category: 'Languages',
        skills: ['JavaScript (ES6+)', 'C++', 'Python', 'HTML & CSS', 'SQL'],
    },
    {
        category: 'Web Frameworks',
        skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Flask'],
    },
    {
        category: 'Databases & Tools',
        skills: ['MongoDB', 'MySQL', 'Redis', 'Docker', 'AWS', 'Kubernetes'],
    },
    {
        category: 'AI / ML',
        skills: ['Scikit-learn', 'TensorFlow', 'Deep Learning', 'LangChain', 'GenAI'],
    },
];

const Skills = () => {
    return (
        <section className="skills-section" id="about">
            <h2 className="numbered-heading">About Me</h2>

            <div className="skills-grid">
                {skillsData.map((group, i) => (
                    <motion.div
                        className="skill-category"
                        key={i}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <h3>{group.category}</h3>
                        <ul className="skills-list">
                            {group.skills.map((skill, j) => (
                                <li key={j} className="skill-item">{skill}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
