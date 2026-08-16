import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import DocumentModal from '../components/DocumentModal';

const Publications = () => {
    useScrollAnimation('.section-title, .publication-card');
    const [activeModal, setActiveModal] = useState(null); // 'statuts' | 'rgpd' | null

    const publications = [
        {
            id: 1,
            key: 'statuts',
            title: "Statuts de l'Association",
            type: "Document officiel",
            icon: "file-contract",
            color: "var(--primary)",
            description: "Statuts officiels et déclarés de Simadila Educ'Action, association régie par la loi du 1er juillet 1901 (Siège à Aképé, Togo & antenne en France)."
        },
        {
            id: 2,
            key: 'rgpd',
            title: "Politique de Protection des Données (RGPD)",
            type: "Document légal & Éthique",
            icon: "shield-alt",
            color: "var(--secondary)",
            description: "Notre charte de conformité RGPD garantissant la stricte protection des données personnelles et la préservation de la dignité et de l'image de nos bénéficiaires."
        }
    ];

    return (
        <>
            <section className="section" id="publications">
                <div className="container">
                    <h2 className="section-title">Documents & Publications</h2>
                    <p className="section-subtitle">
                        Consultez les statuts officiels et les engagements éthiques de Simadila Educ'Action
                    </p>

                    {/* Publications Grid */}
                    <div className="publications-grid" style={{ maxWidth: '900px', margin: '40px auto 0' }}>
                        {publications.map((pub) => (
                            <div key={pub.id} className="publication-card">
                                <div className="publication-icon" style={{ color: pub.color }}>
                                    <i className={`fas fa-${pub.icon} fa-3x`}></i>
                                </div>
                                <div className="publication-content">
                                    <span className="publication-type">{pub.type}</span>
                                    <h3 className="publication-title">{pub.title}</h3>
                                    <p className="publication-description">{pub.description}</p>
                                    <div className="publication-meta" style={{ marginBottom: '20px' }}>
                                        <span><i className="fas fa-file-alt"></i> Texte Intégral</span>
                                        <span><i className="fas fa-check-circle"></i> Document officiel</span>
                                    </div>
                                    <button
                                        onClick={() => setActiveModal(pub.key)}
                                        className="btn btn-download"
                                        style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', border: 'none' }}
                                    >
                                        <i className="fas fa-book-open"></i> Lire et imprimer les statuts
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Document Reader Modal */}
            <DocumentModal
                isOpen={activeModal !== null}
                onClose={() => setActiveModal(null)}
                documentType={activeModal}
            />
        </>
    );
};

export default Publications;
