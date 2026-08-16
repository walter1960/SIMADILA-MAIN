import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
    useScrollAnimation('.section-title, .service-card, .tender-card');
    const [activeTab, setActiveTab] = useState('tenders');

    const handleTenderApply = (tender) => {
        const email = 'simadilaeducaction@gmail.com';
        const subject = `[Candidature AO] ${tender.reference} - ${tender.title}`;
        const body = `Bonjour l'équipe Simadila Educ'Action,

Je souhaite vous soumettre une proposition pour l'appel d'offres :
• Référence : ${tender.reference}
• Intitulé : ${tender.title}
• Localisation : ${tender.location}
• Échéance : ${tender.deadline}
• Budget indicatif : ${tender.budget}

--- Informations sur notre structure ---
Nom de l'entreprise / prestataire : 
Personne de contact : 
Téléphone : 
Email : 
Adresse / Pays : 

--- Détails de notre offre ---
Description de la prestation : 
Estimation tarifaire / Devis : 
Délais d'exécution proposés : 

(Vous pouvez modifier ce message et joindre tous vos documents utiles).

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

    const tenders = [
        {
            id: 1,
            title: "Fourniture de 1500 kits scolaires complets",
            reference: "AO-2028-001",
            deadline: "Juillet 2028",
            budget: "8,000 €",
            status: "Ouvert",
            location: "Togo et Bénin",
            description: "Appel d'offres pour la fourniture de 1500 kits scolaires complets (cahiers, stylos, cartables) pour les écoles partenaires au Togo et au Bénin."
        },
        {
            id: 2,
            title: "Mise en place d'une bibliothèque scolaire en milieu rural",
            reference: "AO-2027-002",
            deadline: "Décembre 2027",
            budget: "15,000 €",
            status: "Ouvert",
            location: "Togo et Bénin",
            description: "Appel d'offres pour la mise en place et l'aménagement d'une bibliothèque scolaire en milieu rural avec mobilier et fonds documentaire de lecture au Togo et au Bénin."
        },
        {
            id: 3,
            title: "Formation, sensibilisation et conférences",
            reference: "AO-2028-003",
            deadline: "10 avril 2028",
            budget: "3,000 €",
            status: "Ouvert",
            location: "Togo et Bénin",
            description: "Actions de formation, sensibilisation et conférences sur des thèmes adaptés aux réalités locales pour les acteurs éducatifs et les jeunes au Togo et au Bénin."
        }
    ];

    const partnershipTypes = [
        {
            icon: "handshake",
            title: "Devenir Partenaire Institutionnel",
            description: "Vous êtes une entreprise, une fondation ou une institution ? Collaborons pour amplifier notre impact.",
            benefits: ["Visibilité sur nos supports", "Rapport d'impact dédié", "Événements exclusifs"],
            cta: "Nous contacter"
        },
        {
            icon: "truck",
            title: "Devenir Prestataire",
            description: "Fournisseurs, constructeurs, formateurs : rejoignez notre réseau de prestataires de confiance.",
            benefits: ["Accès aux appels d'offres", "Paiements sécurisés", "Partenariats long terme"],
            cta: "S'inscrire"
        },
        {
            icon: "users",
            title: "Partenariat Associatif",
            description: "Vous êtes une association locale ? Travaillons ensemble sur le terrain pour maximiser notre impact.",
            benefits: ["Partage de ressources", "Formation mutuelle", "Projets communs"],
            cta: "Proposer un projet"
        }
    ];

    return (
        <section className="section" id="services">
            <div className="container">
                <h2 className="section-title">Services & Partenariats</h2>
                <p className="section-subtitle">
                    Découvrez nos appels d'offres en cours et les opportunités de collaboration
                </p>

                {/* Tabs */}
                <div className="services-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'tenders' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tenders')}
                    >
                        <i className="fas fa-gavel"></i> Appels d'offres
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'partnerships' ? 'active' : ''}`}
                        onClick={() => setActiveTab('partnerships')}
                    >
                        <i className="fas fa-handshake"></i> Partenariats
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'policies' ? 'active' : ''}`}
                        onClick={() => setActiveTab('policies')}
                    >
                        <i className="fas fa-file-contract"></i> Politiques
                    </button>
                </div>

                {/* Tenders Tab */}
                {activeTab === 'tenders' && (
                    <div className="tenders-section">
                        <div className="tenders-intro">
                            <i className="fas fa-info-circle"></i>
                            <p>Tous nos appels d'offres sont ouverts et transparents. Les prestataires intéressés peuvent soumettre leur offre ou candidature.</p>
                        </div>

                        <div className="tenders-grid">
                            {tenders.map((tender) => (
                                <div key={tender.id} className="tender-card">
                                    <div className="tender-header">
                                        <span className={`tender-status ${tender.status.toLowerCase()}`}>
                                            {tender.status}
                                        </span>
                                        <span className="tender-reference">{tender.reference}</span>
                                    </div>
                                    <h3 className="tender-title">{tender.title}</h3>
                                    <p className="tender-description">{tender.description}</p>

                                    <div className="tender-details">
                                        <div className="tender-detail">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>{tender.location}</span>
                                        </div>
                                        <div className="tender-detail">
                                            <i className="fas fa-calendar"></i>
                                            <span>Échéance : {tender.deadline}</span>
                                        </div>
                                        <div className="tender-detail">
                                            <i className="fas fa-euro-sign"></i>
                                            <span>Budget : {tender.budget}</span>
                                        </div>
                                    </div>

                                    <div className="tender-actions">
                                        <button
                                            onClick={() => handleTenderApply(tender)}
                                            className="btn btn-outline"
                                            style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                        >
                                            <i className="fas fa-paper-plane"></i> Soumettre une offre
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
