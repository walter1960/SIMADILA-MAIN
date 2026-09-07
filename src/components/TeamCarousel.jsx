import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const defaultTeamMembers = [
    {
        id: 1,
        name: "Ma'ana Koubidina",
        role: "Président & Initiateur de Simadila Educ'Action",
        badge: "PRÉSIDENT-FONDATEUR",
        photo: "/staticfiles/img/maana-koubidina.jpg",
        photoSecondary: "/staticfiles/img/maana-koubidina-2.jpg",
        bio: "Président de l'association Simadila Educ'Action, Ma'ana Koubidina est juriste de formation et praticien en droit public au sein d'une structure en France."
    },
    {
        id: 2,
        name: "Arnaud Bonnefon",
        role: "Vice-Président de l'association Simadila Educ'Action",
        badge: "VICE-PRÉSIDENT",
        photo: "/staticfiles/img/arnaud-bonnefon.jpg",
        photoSecondary: "/staticfiles/img/arnaud-bonnefon-2.jpg",
        bio: "Vice-président de l'association Simadila Educ'Action, Arnaud Bonnefon est auto-entrepreneur en France et passionné de la biodiversité et des métiers manuels."
    },
    {
        id: 3,
        name: "Mayéne Mathilde Koubirma",
        role: "Secrétaire de l'association Simadila Educ'Action",
        badge: "SECRÉTAIRE",
        photo: "/staticfiles/img/mathilde-koubirma.jpg",
        photoSecondary: "/staticfiles/img/mathilde-koubirma-school-full.jpg",
        bio: "Secrétaire de l'association Simadila Educ'Action, Mayéne Mathilde Koubirma est enseignante de Français et d'histoire dans un collège au Togo."
    }
    /*
    // --- Membres fondateurs à décommenter lors de l'ajout de leurs photos ---
    {
        id: 4,
        name: "Membre Fondateur",
        role: "Trésorier de Simadila Educ'Action",
        badge: "TRÉSORIER",
        photo: null,
        photoSecondary: null,
        bio: "Gestion rigoureuse des finances, transparence budgétaire et traçabilité des dons."
    },
    {
        id: 5,
        name: "Coordination Terrain",
        role: "Responsable Missions Togo & Bénin",
        badge: "COORDINATION TERRAIN",
        photo: null,
        photoSecondary: null,
        bio: "Pilotage direct des distributions de kits, relation avec les écoles et équipes locales."
    },
    {
        id: 6,
        name: "Pôle Partenariats",
        role: "Responsable Bénévoles & Relations",
        badge: "RELATIONS & BÉNÉVOLES",
        photo: null,
        photoSecondary: null,
        bio: "Mobilisation de la communauté, accueil des bénévoles et rayonnement de nos actions."
    }
    */
];

const TeamCarousel = ({ members = defaultTeamMembers }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [modalActivePhoto, setModalActivePhoto] = useState(0);

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

    // Auto-scroll (18 secondes) avec pause au survol
    useEffect(() => {
        if (isPaused || selectedMember) return;
        const interval = setInterval(nextSlide, 18000);
        return () => clearInterval(interval);
    }, [maxIndex, itemsPerPage, isPaused, selectedMember]);

    // Bloquer le scroll de la page lorsque la modale est ouverte
    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedMember]);

    // Fermeture avec la touche Échap
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedMember(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const openMemberModal = (member, photoIdx = 0) => {
        setSelectedMember(member);
        setModalActivePhoto(photoIdx);
    };

    return (
        <div 
            className="team-carousel-wrapper"
            onMouseEnter={() => setIsPaused(true)}
        >
            {/* Boutons de navigation défilement (commentés car il n'y a que 3 membres pour l'instant) */}
            {/*
            <div className="team-carousel-controls-top">
                <button
                    onClick={prevSlide}
                    className="team-nav-btn team-nav-prev"
                    aria-label="Membre précédent"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button
                    onClick={nextSlide}
                    className="team-nav-btn team-nav-next"
                    aria-label="Membre suivant"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            */}

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
                            <div className="team-card team-card-mockup-exact">
                                {/* Header : Médaillon circulaire + Photo rectangulaire (cliquables pour agrandir) */}
                                <div 
                                    className="team-duo-photos-box clickable-photo-box"
                                    onClick={() => openMemberModal(member, 0)}
                                    title="Cliquez pour agrandir la photo et lire la description complète"
                                >
                                    <div className="team-circle-avatar">
                                        {member.photo ? (
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="team-circle-img"
                                            />
                                        ) : (
                                            <div className="team-avatar-placeholder-circle">
                                                <i className="fas fa-user"></i>
                                            </div>
                                        )}
                                    </div>

                                    {member.photoSecondary ? (
                                        <div 
                                            className="team-rect-photo"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openMemberModal(member, 1);
                                            }}
                                            title="Cliquez pour agrandir cette photo"
                                        >
                                            <img
                                                src={member.photoSecondary}
                                                alt={`${member.name} - Contexte`}
                                                className="team-rect-img"
                                                style={member.id === 3 ? { objectPosition: 'center 20%' } : {}}
                                            />
                                        </div>
                                    ) : (
                                        <div className="team-rect-placeholder">
                                            <i className="fas fa-image"></i>
                                        </div>
                                    )}

                                    <span className="team-zoom-badge">
                                        <i className="fas fa-search-plus"></i> Agrandir
                                    </span>
                                </div>

                                {/* Badge Vert Style Capture */}
                                <div className="team-badge-row">
                                    <span className="team-exact-badge">{member.badge}</span>
                                </div>

                                {/* Contenu Texte */}
                                <div className="team-card-body">
                                    <h3 className="team-exact-name">{member.name}</h3>
                                    <p className="team-exact-role">{member.role}</p>
                                    <p className="team-exact-bio">{member.bio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            {maxIndex > 0 && (
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
            )}

            {/* Modal d'Agrandissement Photo & Description Complète (monté via Portal sur document.body pour centrage parfait) */}
            {selectedMember && typeof document !== 'undefined' && createPortal(
                <div className="team-modal-overlay" onClick={() => setSelectedMember(null)}>
                    <div className="team-modal-container" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="team-modal-close-btn"
                            onClick={() => setSelectedMember(null)}
                            aria-label="Fermer"
                        >
                            <i className="fas fa-times"></i>
                        </button>

                        <div className="team-modal-content-grid">
                            {/* Colonne Médias (Photos Agrandies) */}
                            <div className="team-modal-media-col">
                                <div className="team-modal-large-frame">
                                    <img
                                        src={modalActivePhoto === 0 ? selectedMember.photo : selectedMember.photoSecondary}
                                        alt={selectedMember.name}
                                        className={`team-modal-large-img ${selectedMember.id === 3 && modalActivePhoto === 1 ? 'school-full-fit' : ''}`}
                                    />
                                </div>

                                {selectedMember.photoSecondary && (
                                    <div className="team-modal-photo-switcher">
                                        <button
                                            className={`team-modal-tab-btn ${modalActivePhoto === 0 ? 'active' : ''}`}
                                            onClick={() => setModalActivePhoto(0)}
                                        >
                                            <img src={selectedMember.photo} alt="Portrait" />
                                            <span>Portrait</span>
                                        </button>
                                        <button
                                            className={`team-modal-tab-btn ${modalActivePhoto === 1 ? 'active' : ''}`}
                                            onClick={() => setModalActivePhoto(1)}
                                        >
                                            <img src={selectedMember.photoSecondary} alt="Action" />
                                            <span>
                                                {selectedMember.id === 3 ? "En classe avec les élèves" : selectedMember.id === 2 ? "Biodiversité & Nature" : "Officiel"}
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Colonne Texte & Informations Détaillées */}
                            <div className="team-modal-info-col">
                                <div className="team-modal-badge-wrapper">
                                    <span className="team-exact-badge">{selectedMember.badge}</span>
                                </div>
                                <h2 className="team-modal-title">{selectedMember.name}</h2>
                                <p className="team-modal-role-text">{selectedMember.role}</p>

                                <div className="team-modal-bio-container">
                                    <h4>Présentation & Engagement</h4>
                                    <p>{selectedMember.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default TeamCarousel;
