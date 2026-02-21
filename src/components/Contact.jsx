import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Contact</h2>
                <div className="contact-info-grid">
                    <div className="info-item">
                        <span className="info-label">Email</span>
                        <p className="info-value">anjalishukla4801@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Address</span>
                        <p className="info-value">Bengaluru, Karnataka</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
