import useScrollAnimation from '../hooks/useScrollAnimation';
import TeamCarousel from '../components/TeamCarousel';

const About = () => {
    useScrollAnimation('.section-title, .about-text, .about-image, .team-section');
    return (
        <section className="section" id="a-propos">
            <div className="container">
                <h2 className="section-title">À Propos</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>Simadila Educ’Action est une initiative nécessaire et urgente de partage d’idées à travers
                            l’action éducative, la connexion au monde et une volonté accrue d’apprendre, de recevoir et de
                            transmettre la connaissance.</p>
                        <p>En effet, le constat est tel qu’en milieux ruraux ou dans certaines contrées lointaines d’Afrique
                            de l’Ouest, l’accès à l’éducation et aux activités socio-culturelles n’est pas aisé.</p>
                        <p>C’est dans ce contexte que s’inscrit notre objectif d’accompagnement et notre projet de
                            participer un tant soit peu aux soutiens scolaires afin d’insuffler l’espoir auprès des jeunes
                            publics isolés.</p>
                        <br />
                        <h4>Information Légale</h4>
                        <p>Il est fondé entre les adhérents aux présents statuts une association régie par la loi du 1er
                            juillet 1901 et le décret du 16 août 1901, ayant pour dénomination : Simadila Educ’Action.</p>
                        <p style={{ marginTop: '10px' }}>
                            Notre association respecte les normes RGPD (Règlement Général sur la Protection des Données personnelles) tout en protégeant l'image et la dignité de nos bénéficiaires.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="/staticfiles/img/simadila-enfants-ecole.jpg" alt="Bénéficiaires et équipe de Simadila Educ'Action"
                            className="about-img-bg" />
                    </div>
                </div>

                {/* Section Fondateurs & Équipe Simadila */}
                <div className="team-section">
                    <h2 className="section-title" style={{ marginBottom: '10px' }}>Équipe & Membres Fondateurs</h2>
                    <p className="section-subtitle" style={{ textAlign: 'center', color: '#64748b', marginBottom: '10px' }}>
                        Des femmes et des hommes engagés au quotidien pour l'éducation et l'avenir des enfants
                    </p>
                    <TeamCarousel />
                </div>
            </div>
        </section>
    );
};

export default About;
