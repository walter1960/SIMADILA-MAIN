import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="social-strip">
                <div className="container">
                    <h4>Nous suivre :</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                        <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>L'Essentiel</h3>
                        <ul>
                            <li><Link to="/about">Qui sommes-nous ?</Link></li>
                            <li><Link to="/mission">Notre Mission</Link></li>
                            <li><Link to="/join">Adhérer</Link></li>
                            <li><Link to="/news">Actualités</Link></li>
                            <li><Link to="/publications">Publications</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/services">Appels d'offres</Link></li>
                            <li><Link to="/services#prestataires">Devenir Prestataire</Link></li>
                            <li><Link to="/services#politiques">Politiques de l'Asso</Link></li>
                            <li><Link to="/donate">Faire un Don</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Contact</h3>
                        <p style={{ marginBottom: '10px' }}><i className="fas fa-envelope"></i> simadilaeducaction@gmail.com</p>
                        <p style={{ marginBottom: '10px' }}><i className="fas fa-phone"></i> +33 7 50 61 37 35</p>
                        <p><i className="fas fa-map-marker-alt"></i> Togo & Bénin / Paris</p>
                    </div>
                </div>

                <div className="copyright">
                    <p>&copy; 2026 Simadila Educ’Action. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
