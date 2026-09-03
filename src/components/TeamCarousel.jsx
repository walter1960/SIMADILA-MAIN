import { useState, useEffect } from 'react';

const defaultTeamMembers = [
    {
        id: 1,
        name: "Ma'ana KOUBIDINA",
        role: "Président & Initiateur",
        badge: "Fondateur",
        photo: "/staticfiles/img/maana-koubidina.jpg",
        bio: "Juriste de profession et de nationalité française. Initiateur et président de Simadila Educ'Action, engagé pour l'éducation et l'avenir des enfants."
    },
    {
        id: 2,
        name: "Membre Fondateur",
        role: "Secrétaire Général",
        badge: "Bureau",
        photo: null,
        bio: "Coordination administrative, gouvernance statutaire et suivi des partenariats associatifs."
    },
    {
        id: 3,
        name: "Membre Fondateur",
        role: "Trésorier",
        badge: "Bureau",
        photo: null,
        bio: "Gestion rigoureuse des finances, transparence budgétaire et traçabilité des dons."
    },
    {
        id: 4,
        name: "Coordination Terrain",
        role: "Responsable Missions Togo & Bénin",
        badge: "Opérations",
        photo: null,
        bio: "Pilotage direct des distributions de kits, relation avec les écoles et équipes locales."
    },
    {
        id: 5,
        name: "Pôle Éducatif",
        role: "Chargé(e) des Projets Pédagogiques",
        badge: "Pédagogie",
        photo: null,
        bio: "Conception des ateliers, mise en place des bibliothèques et suivi scolaire des élèves."
    },
    {
        id: 6,
        name: "Pôle Partenariats",
        role: "Responsable Bénévoles & Relations",
        badge: "Relations",
        photo: null,
        bio: "Mobilisation de la communauté, accueil des bénévoles et rayonnement de nos actions."
    }
];

const TeamCarousel = ({ members = defaultTeamMembers }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Responsive items per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, members.length - itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Auto-scroll every 6 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [maxIndex, itemsPerPage]);

    return (
        <div className="team-carousel-wrapper">
            <div className="team-carousel-controls-top">
                <button
                    onClick={prevSlide}
                    className="team-nav-btn"
                    aria-label="Membre précédent"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button
                    onClick={nextSlide}
                    className="team-nav-btn"
                    aria-label="Membre suivant"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            <div className="team-carousel-container">
                <div
                    className="team-carousel-track"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                    }}
                >
                    {members.map((member) => (
                        <div
                            key={member.id}
                            className="team-carousel-slide"
                            style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                        >
                            <div className="team-card">
                                <div className="team-avatar-box">
                                    {member.photo ? (
                                        <img src={member.photo} alt={member.name} className="team-avatar-img" />
                                    ) : (
                                        <div className="team-avatar-placeholder">
                                            <i className="fas fa-user"></i>
                                        </div>
                                    )}
                                    <span className="team-badge-tag">{member.badge}</span>
                                </div>

                                <div className="team-info">
                                    <h3 className="team-member-name">{member.name}</h3>
                                    <p className="team-member-role">{member.role}</p>
                                    <p className="team-member-bio">{member.bio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="team-dots-indicator">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                    <button
                        key={idx}
                        className={`team-dot ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Aller au groupe ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamCarousel;
