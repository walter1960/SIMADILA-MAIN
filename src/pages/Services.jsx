import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
    useScrollAnimation('.section-title, .service-card, .tender-card');
    const [activeTab, setActiveTab] = useState('tenders');

    const handleProjectSupport = (project) => {
        const email = 'simadilaeducaction@gmail.com';
        const subject = `[Financement / Don] ${project.reference} - ${project.title}`;
        const body = `Bonjour l'équipe Simadila Educ'Action,

Je souhaite apporter mon soutien financier / une subvention pour le projet suivant :
• Référence : ${project.reference}
• Intitulé : ${project.title}
• Localisation : ${project.location}
• Échéance : ${project.deadline}
• Objectif de financement : ${project.budget}

--- Informations sur le donateur / organisme mécène ---
Nom du donateur / Entreprise / Fondation : 
Personne de contact : 
Téléphone : 
Email : 
Adresse / Pays : 

--- Modalités de soutien envisagées ---
Montant envisagé du don ou de la subvention : 
Nature du soutien (don financier, mécénat, subvention institutionnelle, don en nature) : 
Commentaires / Précisions : 

Cordialement,
[Votre Nom / Votre Structure]`;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    };

    const handlePartnershipContact = (type) => {
        const email = 'simadilaeducaction@gmail.com';
        const subject = `[Partenariat] ${type.title}`;
        const body = `Bonjour l'équipe Simadila Educ'Action,

Je vous contacte concernant l'opportunité : ${type.title}.

--- Informations sur notre organisme ---
Nom de l'organisation / entreprise : 
Représentant : 
Téléphone : 
Email : 

--- Objet de notre démarche ---
Description de notre proposition de collaboration : 

Cordialement,
[Votre Nom]`;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    };

    const projects = [
        {
            id: 1,
            title: "Financement de 1500 kits scolaires complets",
            reference: "DON-2028-001",
            deadline: "Juillet 2028",
            budget: "8,000 €",
            status: "Appel en cours",
            location: "Togo et Bénin",
            description: "Appel aux dons et subventions pour financer l'acquisition et la distribution de 1500 kits scolaires complets (cahiers, stylos, cartables) au profit des écoliers du Togo et du Bénin."
        },
        {
            id: 2,
            title: "Création et aménagement d'une bibliothèque scolaire en milieu rural",
            reference: "DON-2027-002",
            deadline: "Décembre 2027",
            budget: "15,000 €",
            status: "Appel en cours",
            location: "Togo et Bénin",
            description: "Appel aux dons et subventions pour financer la création et l'aménagement d'une bibliothèque scolaire en milieu rural avec mobilier et fonds documentaire de lecture au Togo et au Bénin."
        },
        {
            id: 3,
            title: "Ateliers éducatifs, sensibilisation et conférences locales",
            reference: "DON-2028-003",
            deadline: "10 avril 2028",
            budget: "3,000 €",
            status: "Appel en cours",
            location: "Togo et Bénin",
            description: "Appel aux dons et subventions pour financer des actions de formation, sensibilisation et conférences sur des thèmes adaptés aux réalités locales pour les acteurs éducatifs et les jeunes au Togo et au Bénin."
        }
    ];

    const partnershipTypes = [
        {
            icon: "handshake",
            title: "Devenir Partenaire Institutionnel",
            description: "Vous êtes une institution publique, une collectivité ou un organisme d'aide ? Collaborons pour amplifier notre impact éducatif.",
            benefits: ["Visibilité sur nos supports", "Rapport d'impact dédié", "Partenariats pluriannuels"],
            cta: "Nous contacter"
        },
        {
            icon: "hand-holding-usd",
            title: "Mécénat d'Entreprise & Fondations",
            description: "Entreprises, fondations d'entreprise et fonds de dotation : associez votre engagement RSE au soutien de nos projets éducatifs prioritaires.",
            benefits: ["Reçu fiscal & déductibilité", "Suivi transparent des fonds", "Valorisation solidaire"],
            cta: "Soutenir un projet"
        },
        {
            icon: "users",
            title: "Partenariat Associatif & Terrain",
            description: "Vous êtes une association locale ou internationale ? Travaillons ensemble sur le terrain pour maximiser les résultats auprès des enfants.",
            benefits: ["Partage de ressources", "Actions conjointes", "Projets éducatifs partagés"],
            cta: "Proposer un projet"
        }
    ];

    return (
        <section className="section" id="services">
            <div className="container">
                <h2 className="section-title">Appels aux Dons & Partenariats</h2>
                <p className="section-subtitle">
                    Découvrez nos appels aux dons et projets en recherche de financement ainsi que les opportunités de mécénat
                </p>

                {/* Tabs */}
                <div className="services-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'tenders' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tenders')}
                    >
                        <i className="fas fa-hand-holding-heart"></i> Appels aux dons
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'partnerships' ? 'active' : ''}`}
                        onClick={() => setActiveTab('partnerships')}
                    >
                        <i className="fas fa-handshake"></i> Partenariats & Mécénat
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'policies' ? 'active' : ''}`}
                        onClick={() => setActiveTab('policies')}
                    >
                        <i className="fas fa-file-contract"></i> Politiques & Statuts
                    </button>
                </div>

                {/* Tenders / Funding Tab */}
                {activeTab === 'tenders' && (
                    <div className="tenders-section">
                        <div className="tenders-intro">
                            <i className="fas fa-info-circle"></i>
                            <p>Tous nos appels aux dons et subventions sont présentés en toute transparence. Donateurs, entreprises partenaires, mécènes et institutions peuvent apporter leur concours financier ou matériel pour donner vie à ces actions.</p>
                        </div>

                        <div className="tenders-grid">
                            {projects.map((project) => (
                                <div key={project.id} className="tender-card">
                                    <div className="tender-header">
                                        <span className="tender-status ouvert">
                                            {project.status}
                                        </span>
                                        <span className="tender-reference">{project.reference}</span>
                                    </div>
                                    <h3 className="tender-title">{project.title}</h3>
                                    <p className="tender-description">{project.description}</p>

                                    <div className="tender-details">
                                        <div className="tender-detail">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="tender-detail">
                                            <i className="fas fa-calendar"></i>
                                            <span>Échéance : {project.deadline}</span>
                                        </div>
                                        <div className="tender-detail">
                                            <i className="fas fa-euro-sign"></i>
                                            <span>Objectif : {project.budget}</span>
                                        </div>
                                    </div>

                                    <div className="tender-actions">
                                        <button
                                            onClick={() => handleProjectSupport(project)}
                                            className="btn btn-outline"
                                            style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                        >
                                            <i className="fas fa-heart"></i> Soutenir ce projet
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Partnerships Tab */}
                {activeTab === 'partnerships' && (
                    <div className="partnerships-section">
                        <div className="partnerships-grid">
                            {partnershipTypes.map((type, index) => (
                                <div key={index} className="partnership-card">
                                    <div className="partnership-icon">
                                        <i className={`fas fa-${type.icon} fa-3x`}></i>
                                    </div>
                                    <h3>{type.title}</h3>
                                    <p>{type.description}</p>
                                    <div className="partnership-benefits">
                                        <strong>Avantages :</strong>
                                        <ul>
                                            {type.benefits.map((benefit, i) => (
                                                <li key={i}><i className="fas fa-star"></i> {benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button
                                        onClick={() => handlePartnershipContact(type)}
                                        className="btn"
                                        style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                    >
                                        <i className="fas fa-paper-plane"></i> {type.cta}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Policies Tab */}
                {activeTab === 'policies' && (
                    <div className="policies-section">
                        <div className="policy-card">
                            <h3><i className="fas fa-file-contract"></i> Statuts Officiels de l'Association</h3>
                            <p>Association régie par la loi du 1er juillet 1901. Consultez nos statuts constitutifs fixant nos objectifs éducatifs, notre fonctionnement et nos engagements.</p>
                            <Link to="/publications" className="btn btn-outline">Consulter les statuts</Link>
                        </div>
                        <div className="policy-card">
                            <h3><i className="fas fa-heart"></i> Gouvernance & Bénévolat Intégral (Art. 15)</h3>
                            <p>Toutes les fonctions d'administration et du bureau sont gratuites et bénévoles. L'intégralité des ressources est dédiée au service des enfants et des écoles.</p>
                            <Link to="/mission" className="btn btn-outline">Notre charte d'action</Link>
                        </div>
                        <div className="policy-card">
                            <h3><i className="fas fa-shield-alt"></i> Protection des Données & Dignité (RGPD)</h3>
                            <p>Respect scrupuleux des normes RGPD et préservation absolue de la dignité et de l'image de l'enfance sur l'ensemble de nos actions.</p>
                            <Link to="/publications" className="btn btn-outline">Voir nos engagements</Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;
