import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const jobs = [
    {
        title: 'Project Intern',
        company: 'IBM',
        range: 'Jun 2025 – Jul 2025',
        url: '#',
        descriptions: [
            'Developed a production-grade ML model on 5+ GB of healthcare data to predict patient cost outcomes, improving prediction accuracy to 86% using Gradient Boosting.',
            'Built a statistical risk-scoring system using probability distributions to quantify chronic-disease–driven cost risks, enabling 30% faster identification of high-risk patient segments.',
            'Implemented SHAP (SHapley Additive exPlanations) to interpret model predictions, providing transparency in medical decision-making by quantifying feature importance.',
        ],
    },
    {
        title: 'Student',
        company: 'UPES',
        range: 'Aug 2022 – May 2026',
        url: '#',
        descriptions: [
            'Bachelor of Technology in Computer Science',
            'Relevant Coursework: Data Structures, Algorithms, DBMS, ML, OS, Networks.',
        ]
    }
];

const Experience = () => {
    const [activeTabId, setActiveTabId] = useState(0);

    return (
        <section className="experience-section" id="experience">
            <h2 className="numbered-heading">Where I've Worked & Studied</h2>

            <div className="inner">
                <ul className="tab-list">
                    {jobs.map((job, i) => (
                        <li key={i}>
                            <button
                                className={`tab-button ${activeTabId === i ? 'active' : ''}`}
                                onClick={() => setActiveTabId(i)}
                            >
                                {job.company}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="tab-panels">
                    <motion.div
                        key={activeTabId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="tab-panel"
                    >
                        <h3>
                            <span className="job-title">{jobs[activeTabId].title}</span>
                            <span className="company">
                                &nbsp;@&nbsp;
                                <a href={jobs[activeTabId].url} className="inline-link">
                                    {jobs[activeTabId].company}
                                </a>
                            </span>
                        </h3>
                        <p className="job-range">{jobs[activeTabId].range}</p>
                        <ul className="job-description">
                            {jobs[activeTabId].descriptions.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
