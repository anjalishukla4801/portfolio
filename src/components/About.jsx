import '../styles/About.css';

const profilePic = '/profile.jpeg';


const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a Computer Science Engineering (Data Science) student at CMR Institute of Technology.
                            I seek opportunities to apply my skills in Python, Java, and Machine Learning to build innovative,
                            data-driven solutions.
                        </p>
                        <p>
                            With a strong foundation in DSA and Oops, I enjoy solving complex problems
                            and building full-stack applications that bridge the gap between back-end data and front-end design.
                        </p>
                    </div>
                    <div className="about-img">
                        <img src={profilePic} alt="Anjali Shukla" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
