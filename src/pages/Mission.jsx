import useScrollAnimation from '../hooks/useScrollAnimation';

const Mission = () => {
    useScrollAnimation('.section-title, .mission-card, .stat-item');
    return (
        <>
            <section className="section" id="mission">
                <div className="container">
                    <h2 className="section-title">Notre Mission</h2>
                    <div className="mission-content">
                        <div className="mission-card">
                            <h3>Actions Éducatives</h3>
                            <p>Mettre en œuvre des actions éducatives, culturelles, sociales et sportives destinées à favoriser
                                l'épanouissement, l'inclusion et la réussite éducative des enfants et des jeunes en zones
                                reculées d'Afrique de l'Ouest.</p>
                        </div>
                        <div className="mission-card">
                            <h3>Activités Pédagogiques</h3>
                            <p>Organiser des activités pédagogiques, des ateliers, des formations, des conférences et des
                                événements favorisant l'accès au savoir et au développement personnel.</p>
                        </div>
                        <div className="mission-card">
                            <h3>Soutien aux Familles</h3>
                            <p>Soutenir les familles et les acteurs éducatifs par des outils, des ressources et un
                                accompagnement personnalisé pour renforcer leur capacité à accompagner les jeunes.</p>
                        </div>
                        <div className="mission-card">
                            <h3>Développement Durable</h3>
                            <p>Mener des actions sociales et environnementales afin de concilier développement économique, hygiène et santé. Les préoccupations environnementales constituent un gage pour la qualité de vie et l'intérêt général.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>2</h3>
                            <p>Pays d'intervention (Togo & Bénin)</p>
                        </div>
                        <div className="stat-item">
                            <h3>+50</h3>
                            <p>Enfants accompagnés</p>
                        </div>
                        <div className="stat-item">
                            <h3>+10</h3>
                            <p>Villages et localités</p>
                        </div>
                        <div className="stat-item">
                            <h3>500+</h3>
                            <p>Kits scolaires distribués</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Mission;
