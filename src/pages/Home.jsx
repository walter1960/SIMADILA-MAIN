import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ImpactCounter from '../components/ImpactCounter';
import TrustSignals from '../components/TrustSignals';

const Home = () => {
    useScrollAnimation('.donation-hero .container, .impact-section, .story-card');

    return (
        <>
            {/* Hero Section with Emotional Storytelling */}
            <section className="hero" id="accueil">
                <video autoPlay muted loop className="video-background" poster="/staticfiles/img/boy-holding-white-paper-school.jpg">
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>

                <div className="hero-overlay"></div>

                <div className="container hero-content">
                    <h1>Éducation pour Tous en Afrique de l'Ouest</h1>
                    <p className="hero-quote">"Grâce à vos dons j'ai eu accès à une éducation et un accompagnement de qualité"</p>
                    <p className="hero-impact">En 2026, <strong>50 enfants</strong> sont accompagnés grâce à votre soutien.</p>
                    <div className="hero-cta-group">
                        <Link to="/mission" className="btn btn-large">Découvrir notre mission</Link>
                        <Link to="/donate" className="btn btn-large btn-outline-white">
                            <i className="fas fa-heart"></i> Faire un don
                        </Link>
                    </div>
                </div>
            </section>

            {/* Impact Section with Counters */}
            <section className="impact-section">
                <div className="container">
                    <h2 className="section-title">Notre Mission 2026</h2>
                    <p className="section-subtitle">Des objectifs concrets pour transformer l'avenir des enfants</p>
                    <div className="impact-stats-grid">
                        <ImpactCounter target={50} label="Enfants scolarisés" />
                        <ImpactCounter target={500} label="Kits scolaires distribués" />
                        <ImpactCounter target={50} label="Donateurs actifs" suffix="+" />
                        <ImpactCounter target={85} label="% de réussite scolaire" suffix="%" />
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="stories-section">
                <div className="container">
                    <h2 className="section-title">Histoires qui Inspirent</h2>
                    <div className="stories-grid">
                        <div className="story-card">
                            <img src="/staticfiles/img/boy-holding-white-paper-school.jpg" alt="Édem" />
                            <div className="story-content">
                                <h3>L'histoire de Édem</h3>
                                <p>"J'ai bénéficié de fournitures scolaires, mon espoir est renforcé, je souhaite devenir médecin un jour pour soigner des gens"</p>
                                <span className="story-author">Édem, 10 ans, Togo</span>
                            </div>
                        </div>
                        <div className="story-card">
                            <img src="/staticfiles/img/galerie-distribution-vetements.jpg" alt="Fatou" />
                            <div className="story-content">
                                <h3>Le parcours de Fatou</h3>
                                <p>"Grâce aux fournitures scolaires, je peux suivre les cours comme les autres. Je suis première de ma classe !"</p>
                                <span className="story-author">Fatou, 9 ans, Bénin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="trust-section">
                <div className="container">
                    <TrustSignals />
                </div>
            </section>

            {/* Donation Hero Section - Optimized */}
            <section className="donation-hero">
                <div className="container">
                    <h2>Votre Soutien Change des Vies</h2>
                    <div className="donation-cta-group">
                        <Link to="/donate" className="btn btn-large btn-gold">
                            <i className="fas fa-heart"></i> FAIRE UN DON
                        </Link>
                        <Link to="/join" className="btn btn-large btn-outline-white">
                            <i className="fas fa-users"></i> DEVENIR MEMBRE
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

