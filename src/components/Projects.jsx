import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaDatabase, FaHeartbeat, FaCode, FaYoutube, FaBuilding } from 'react-icons/fa';
import '../styles/Projects.css';

const projects = [
    {
        title: 'yt-comment-analysis-update',
        desc: 'Real-time YouTube Sentiment Intelligence platform. Extracts live comments via Chrome Extension, processes them with Flask & LightGBM (89.8% accuracy), and tracks experiments with MLflow.',
        tech: ['Python', 'Flask', 'Docker', 'AWS'],
        links: { github: 'https://github.com/ningaraddi-raddi/yt-comment-analysis-update', external: '' },
        color: 'linear-gradient(135deg, #ff00cc 0%, #333399 100%)', // Vibrant Purple-Pink
        icon: <FaYoutube />
    },
    {
        title: 'AlgoMate',
        desc: 'Interactive algorithm visualization platform for DFS, BFS, Dijkstra, and more. Features real-time code tracing and step-by-step animations to help students learn DSA patterns.',
        tech: ['JavaScript', 'React', 'Tailwind CSS'],
        links: { github: 'https://github.com/ningaraddi-raddi/AlgoMate', external: '' },
        color: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)', // Electric Blue
        icon: <FaCode />
    },
    {
        title: 'Remote-Code-Executor',
        desc: 'Scalable microservices engine for safely running untrusted code. Uses isolated Docker containers, RabbitMQ for queuing, and Redis for caching to ensure security and performance.',
        tech: ['Node.js', 'Docker', 'RabbitMQ', 'Redis'],
        links: { github: 'https://github.com/ningaraddi-raddi/Remote-Code-Executor', external: '' },
        color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', // Fresh Green
        icon: <FaCode />
    },
    {
        title: 'DBMS',
        desc: 'A lightweight relational database management system written in Rust. Supports full SQL querying, table management, and transaction reliability with significant performance optimization.',
        tech: ['Rust', 'SQL', 'Systems Programming'],
        links: { github: 'https://github.com/ningaraddi-raddi/DBMS', external: '' },
        color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Berry Gradient
        icon: <FaDatabase />
    },
    {
        title: 'Predicting-HealthCare-Cost',
        desc: 'Machine learning model predicting patient costs with high accuracy using Gradient Boosting. Analyzes demographic and lifestyle data to forecast medical expenditures.',
        tech: ['Python', 'Scikit-learn', 'ML', 'GradientBoost'],
        links: { github: 'https://github.com/ningaraddi-raddi/Predicting-HealthCare-Cost', external: '' },
        color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', // Warm Orange
        icon: <FaHeartbeat />
    },
    {
        title: 'ShramSetu',
        desc: 'Digital platform connecting blue-collar workers with local employers. Facilitates seamless job discovery and service booking, bridging the gap in the informal labor sector.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        links: { github: 'https://github.com/ningaraddi-raddi/ShramSetu', external: '' },
        color: 'linear-gradient(135deg, #5EE7DF 0%, #b490ca 100%)', // Soft Teal-Purple
        icon: <FaBuilding />
    },
];

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <h2 className="numbered-heading">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        className="project-card"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        style={{
                            background: project.color,
                            border: 'none',
                            boxShadow: '0 20px 30px -10px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div className="project-layer" style={{ background: 'rgba(10, 25, 47, 0.85)', padding: '2rem', height: '100%', borderRadius: '4px' }}>
                            <div className="project-header">
                                <div className="folder-icon" style={{ color: 'white' }}>
                                    {project.icon}
                                </div>
                                <div className="project-links">
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                                            <FaGithub />
                                        </a>
                                    )}
                                    {project.links.external && (
                                        <a href={project.links.external} target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="project-title">
                                <a href={project.links.external || project.links.github} target="_blank" rel="noreferrer" style={{ color: 'white' }}>{project.title}</a>
                            </h3>

                            <div className="project-description" style={{ color: 'rgba(255,255,255,0.85)' }}>
                                <p>{project.desc}</p>
                            </div>

                            <ul className="project-tech-list" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                {project.tech.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
