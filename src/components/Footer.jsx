import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import '../styles/Contact.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-socials">
                    <a href="https://github.com/anjalishukla4801" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/anjali-shukla-4819a82ba/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="https://leetcode.com/u/anjalishukla1710/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Leetcode"><FaCode /></a>
                </div>
                <p>Designed & Built by Anjali Shukla</p>
            </div>
        </footer>
    );
};

export default Footer;
