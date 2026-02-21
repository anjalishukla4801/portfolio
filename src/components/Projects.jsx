import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'AI Study Buddy',
            description: 'A RAG-based AI chatbot using Llama-3 to answer questions from 100+ pages of study material. Includes a Flashcard & Quiz Generator parsing text into JSON.',
            tech: ['Python', 'Streamlit', 'Groq API (Llama-3)', 'RAG', 'Pandas'],
            github: 'https://github.com/anjalishukla4801/study-ai-assistant',
            external: 'https://study-ai-assistant.streamlit.app/'
        },
        {
            title: 'Automatic Irrigation System',
            description: 'Automated irrigation system using Arduino and soil moisture sensors. Triggers water pump automatically based on moisture thresholds.',
            tech: ['C Programming', 'Arduino Uno', 'IoT', 'Relay Module'],
            github: '',
            external: ''
        },
        {
            title: 'Website for Creative Engineers',
            description: 'Responsive company portfolio website with contact system, backend validation, and database storage. Follows modular full-stack architecture.',
            tech: ['HTML/CSS', 'Node.js', 'Express', 'MongoDB'],
            github: '',
            external: ''
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Project Experience</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <div className="project-top">
                                    <FaFolder className="folder-icon" />
                                    <div className="project-links">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <FaGithub />
                                            </a>
                                        )}
                                        {project.external && (
                                            <a href={project.external} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <ul className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
