import '../styles/Hero.css';

const resumePDF = '/resume.pdf';


const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-bento">
                <div className="bento-item intro-block">
                    <h1 className="hero-title">Anjali Shukla.</h1>
                    <h2 className="hero-description">Data Scientist & Web Developer</h2>
                </div>

                <div className="bento-item about-block">
                    <h3>Focus</h3>
                    <p>Computer Science student at CMRIT, bridging the gap between data and web solutions.</p>
                </div>

                <div className="bento-item skills-block">
                    <h3>Expertise</h3>
                    <div className="mini-skills">
                        <span>Python</span>
                        <span>React</span>
                        <span>ML</span>
                        <span>Flask</span>
                    </div>
                </div>

                <div className="bento-item cta-block">
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">Browse Work</a>
                        <a href={resumePDF} download="Anjali_Shukla_Resume.pdf" className="btn btn-outline">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
