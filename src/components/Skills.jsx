import '../styles/Skills.css';

const Skills = () => {
    const skillData = [
        {
            category: "Programming Languages",
            items: ["Python", "Java", "C Programming"]
        },
        {
            category: "Web Frameworks",
            items: ["Flask", "React JS", "Node JS", "Express JS"]
        },
        {
            category: "Database Management",
            items: ["MySQL", "MongoDB (NoSQL)"]
        },
        {
            category: "Data Visualization",
            items: ["Microsoft Power BI", "Tableau"]
        },
        {
            category: "Developer Tools",
            items: ["Git", "GitHub"]
        },
        {
            category: "Core CS Concepts",
            items: ["DSA", "OOPs", "Computer Networks"]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <div className="skills-container">
                    {skillData.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.category}</h3>
                            <ul className="skill-list">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="skill-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
