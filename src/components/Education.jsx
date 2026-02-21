import '../styles/Education.css';

const Education = () => {
    const educationData = [
        {
            institution: "CMR Institute of Technology, Bengaluru",
            degree: "BE - CSE (Data Science)",
            year: "2023 - 2027 [Pursuing]",
            grade: "CGPA: 8.86",
        },
        {
            institution: "Sri Chaitanya Techno School, Bengaluru",
            degree: "XII Standard (PCMB)",
            year: "2023",
            grade: "Grade: 88%",
        },
        {
            institution: "Sri Chaitanya Techno School, Bengaluru",
            degree: "X Standard",
            year: "2021",
            grade: "Grade: 97%",
        }
    ];

    return (
        <section id="education" className="education">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-grid">
                    {educationData.map((item, index) => (
                        <div key={index} className="education-card">
                            <span className="edu-year">{item.year}</span>
                            <h3 className="edu-degree">{item.degree}</h3>
                            <h4 className="edu-school">{item.institution}</h4>
                            <span className="edu-grade">{item.grade}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
