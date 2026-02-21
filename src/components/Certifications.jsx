import '../styles/Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            issuer: "Google",
            title: "Getting Started with Python"
        },
        {
            issuer: "IBM",
            title: "Introduction to Web Development"
        },
        {
            issuer: "Wipro TalentNext",
            title: "Data Science"
        },
        {
            issuer: "NPTEL",
            title: "Programming with Generative AI"
        },
        {
            issuer: "Oracle",
            title: "Cloud Infrastructure 2025 AI Foundations Associate"
        }
    ];

    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="cert-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="cert-card">
                            <p className="cert-issuer">{cert.issuer}</p>
                            <h3 className="cert-title">{cert.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
