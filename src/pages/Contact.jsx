import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
    useScrollAnimation('.section-title, .about-text, .about-image');

    return (
        <section className="section" id="contact">
            <div className="container">
                <h2 className="section-title">Contactez-nous</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p><strong>Nous sommes à votre écoute.</strong> Pour toute question, demande de partenariat ou
                            information sur nos actions, n'hésitez pas à nous contacter.</p>
                        <br />
                        <p><strong>Email:</strong> simadilaeducaction@gmail.com</p>
                        <p><strong>Téléphone:</strong> +33 7 50 61 37 35</p>
                        <p><strong>Siège social:</strong> Aképé Maison KOUBIDINA Amoussou, quartier Sogbosito (Togo)</p>
                        <p><strong>Antenne:</strong> France (Partenariats & coopérations)</p>
                    </div>
                    <div className="about-image" style={{ background: 'var(--light)', color: 'var(--primary)' }}>
                        <img
                            src="/staticfiles/img/LOGO DE SIMADILA.jpeg"
                            alt="Logo"
                            style={{ width: 'auto', height: '150px', position: 'static' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
