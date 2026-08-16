import React from 'react';

const DocumentModal = ({ isOpen, onClose, documentType }) => {
    if (!isOpen) return null;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="doc-modal-overlay" onClick={onClose}>
            <div className="doc-modal-container" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header */}
                <div className="doc-modal-header">
                    <div>
                        <span className="doc-modal-badge">
                            {documentType === 'statuts' ? 'Document Officiel' : 'Charte & Éthique'}
                        </span>
                        <h2>
                            {documentType === 'statuts'
                                ? "Statuts de l'Association « Simadila Educ'Action »"
                                : "Politique de Protection des Données et Respect de la Dignité (RGPD)"}
                        </h2>
                    </div>
                    <div className="doc-modal-actions">
                        <button onClick={handlePrint} className="btn-modal-print" title="Imprimer ou enregistrer en PDF">
                            <i className="fas fa-print"></i> Imprimer / PDF
                        </button>
                        <button onClick={onClose} className="btn-modal-close" aria-label="Fermer">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                {/* Modal Body */}
                <div className="doc-modal-body">
                    {documentType === 'statuts' ? (
                        <div className="statuts-document">
                            <div className="statuts-preamble">
                                <h3>Préambule</h3>
                                <p>
                                    Simadila Educ’Action est une initiative nécessaire et urgente de partage d’idées à travers l’action éducative, la connexion au monde et une volonté accrue d’apprendre, de recevoir et de transmettre la connaissance. En effet, le constat est tel qu’en milieux ruraux ou dans certaines contrées lointaines d’Afrique de l’Ouest, l’accès à l’éducation et aux activités socio-culturelles n’est pas aisé. C’est dans ce contexte que s’inscrit notre objectif d’accompagnement et notre projet de participer un tant soit peu aux soutiens scolaires afin d’insuffler l’espoir auprès des jeunes publics isolés.
                                </p>
                            </div>

                            <div className="statuts-section">
                                <h3>Titre I — L’Association : dénomination, but, siège social</h3>
                                
                                <div className="statuts-article">
                                    <h4>Article 1 – Dénomination</h4>
                                    <p>Il est fondé entre les adhérents aux présents statuts une association régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, ayant pour dénomination : <strong>Simadila Educ’Action</strong>.</p>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 2 – Objet</h4>
                                    <p>L’association a pour objet de :</p>
                                    <ul>
                                        <li>Mettre en œuvre des actions éducatives, culturelles, sociales et sportives destinées à favoriser l’épanouissement, l’inclusion et la réussite éducative des enfants, des jeunes en zones reculées d’Afrique de l’Ouest.</li>
                                        <li>Organiser des activités pédagogiques, des ateliers, des formations, des conférences et des évènements favorisant l’accès au savoir et au développement personnel.</li>
                                        <li>Soutenir les familles et les acteurs éducatifs par des outils, des ressources et un accompagnement personnalisé.</li>
                                    </ul>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 3 – Siège social</h4>
                                    <p>Le siège social est fixé à <strong>Aképé Maison KOUBIDINA Amoussou, quartier : Sogbosito (Togo)</strong>.</p>
                                    <p>Il pourra être transféré par simple décision du conseil d’administration, ratifiée par l’assemblée générale. L’association disposera d’une antenne en France dans le cadre d’éventuels partenariats ou collaborations sur le territoire Européen.</p>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 4 – Durée</h4>
                                    <p>La durée de l’association est illimitée.</p>
                                </div>
                            </div>

                            <div className="statuts-section">
                                <h3>Titre II — Moyens d’action, composition, admission, adhésion, radiation</h3>

                                <div className="statuts-article">
                                    <h4>Article 5 – Moyens d’action</h4>
                                    <p>Pour réaliser ses objectifs, l’association pourra notamment :</p>
                                    <ul>
                                        <li>Organiser des activités éducatives, artistiques, culturelles et sportives.</li>
                                        <li>Mettre en place des partenariats avec des établissements scolaires, des collectivités et d’autres associations.</li>
                                        <li>Rechercher et mobiliser des financements publics et privés.</li>
                                        <li>Produire et diffuser des supports pédagogiques.</li>
                                    </ul>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 6 – Composition</h4>
                                    <p>L’association se compose de :</p>
                                    <ol>
                                        <li><strong>Les Fondateurs / Fondatrices :</strong> Personnes ayant contribué activement à la création et à la continuité de l’association dont la liste figure au règlement intérieur.</li>
                                        <li><strong>Membres actifs :</strong> Personnes physiques ou morales participant régulièrement aux activités et s’acquittant de la cotisation annuelle. Ce sont aussi les parents des bénéficiaires mineurs des programmes de l’Association qui sont, dans les trois premières années, dispensés du paiement des cotisations. Ils y adhèrent au nom de leurs enfants et possèdent un droit de regard sur les projets et programmes sectoriels les concernant directement.</li>
                                        <li><strong>Membres bienfaiteurs :</strong> Personnes ou organismes soutenant financièrement l’association.</li>
                                        <li><strong>Membres d’honneur :</strong> Personnalités reconnues pour leurs services rendus à l’association, dispensées de cotisation.</li>
                                        <li><strong>Les membres de droit :</strong> Représentants de l’État, collectivités, institutions ou organismes apportant un soutien déterminant.</li>
                                        <li><strong>Partenaires associés & experts :</strong> Personnes retenues pour leur expertise que le Conseil d'Administration souhaite associer aux réflexions et activités.</li>
                                    </ol>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 7 – Admission</h4>
                                    <p>Pour faire partie de l’association, il faut :</p>
                                    <ul>
                                        <li>Adhérer aux présents statuts.</li>
                                        <li>Être agréé par le bureau, qui statue sur les demandes d’adhésion.</li>
                                    </ul>
                                    <p>Toute personne physique ou morale désireuse d’adhérer peut en faire la demande par lettre manuscrite déposée directement au siège ou par courriel. Le Conseil d’Administration statue dans un délai de deux mois au maximum.</p>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 8 – Affiliation</h4>
                                    <p>Simadila Educ’Action peut adhérer à des associations, unions ou structures partenaires par décision du conseil d’Administration.</p>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 9 – Perte de la qualité de membre</h4>
                                    <p>La qualité de membre se perd par démission écrite, non-renouvellement de la cotisation, radiation prononcée pour motif grave ou décès.</p>
                                </div>
                            </div>

                            <div className="statuts-section">
                                <h3>Titre III — Fonctionnement</h3>

                                <div className="statuts-article">
                                    <h4>Article 10 – Assemblée Générale Ordinaire (AGO)</h4>
                                    <p>L’assemblée générale ordinaire comprend tous les membres à jour de cotisation et se réunit au moins une fois par an. Elle entend les rapports moraux, d'activités et financiers, approuve les comptes annuels et fixe les orientations ainsi que le montant des cotisations.</p>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 11 – Assemblée Générale Extraordinaire (AGE)</h4>
                                    <p>Convoquée pour modification des statuts ou dissolution de l'association, à la demande du/de la président(e) ou de la moitié plus un des membres ayant voix délibérative.</p>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 12 – Conseil d’Administration</h4>
                                    <p>L'association est administrée par un conseil d’administration constitué au minimum de trois (3) membres (membres fondateurs inamovibles et adhérents élus). Il se réunit au moins deux fois par an.</p>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 13 – Le Bureau</h4>
                                    <p>Élu par le Conseil d’Administration, le Bureau comprend : la présidence, un(e) ou plusieurs vice-président(e)s, un(e) secrétaire (et adjoint) et un(e) trésorier(ère) (et adjoint). Il assure la gestion courante de l'association.</p>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 14 – La Présidence</h4>
                                    <p>Coopté(e) par ses pairs membres fondateurs, le/la président(e) préside l'AG, le CA et le Bureau, et représente l'association dans tous les actes de la vie civile.</p>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 15 – Bénévolat & Indemnités</h4>
                                    <p><strong>Toutes les fonctions, y compris celles des membres du Conseil d’Administration et du Bureau, sont gratuites et bénévoles.</strong> Seuls les frais occasionnés par l’accomplissement de leur mandat sont remboursés sur justificatifs.</p>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 16 – Règlement intérieur</h4>
                                    <p>Un règlement intérieur peut être établi par le conseil d’administration et approuvé par l’assemblée générale pour préciser les modalités de fonctionnement interne.</p>
                                </div>
                            </div>

                            <div className="statuts-section">
                                <h3>Titre IV — Ressources annuelles et suivi financier</h3>

                                <div className="statuts-article">
                                    <h4>Article 17 – Ressources</h4>
                                    <p>Les ressources comprennent les cotisations des membres, les subventions publiques, les dons manuels et mécénats, ainsi que les recettes d'activités autorisées par la loi.</p>
                                </div>

                                <div className="statuts-article">
                                    <h4>Article 18 – Suivi Financier</h4>
                                    <p>Les comptes et bilans peuvent être certifiés par un comptable agréé ou un commissaire aux comptes. Les excédents de gestion sont affectés exclusivement aux réserves et aux missions de l'association.</p>
                                </div>
                            </div>

                            <div className="statuts-section">
                                <h3>Titre V — Dissolution</h3>

                                <div className="statuts-article">
                                    <h4>Article 19 – Dissolution</h4>
                                    <p>En cas de dissolution, l’actif net est obligatoirement dévolu à une ou plusieurs associations poursuivant des objectifs similaires ou à tout organisme à but non lucratif.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="rgpd-document">
                            <div className="statuts-preamble">
                                <h3>Charte Éthique, RGPD et Protection de l'Enfance</h3>
                                <p>
                                    L'association Simadila Educ'Action place la dignité, la sécurité et la protection de la vie privée de ses bénéficiaires, donateurs et bénévoles au cœur absolu de ses principes d'action.
                                </p>
                            </div>

                            <div className="statuts-section">
                                <h3>1. Protection de l'Image et Dignité des Enfants</h3>
                                <p>Toutes les photographies et témoignages diffusés sur nos supports respectent scrupuleusement le consentement éclairé des tuteurs légaux et des équipes éducatives locales. Nous rejetons toute mise en scène misérabiliste au profit d'une valorisation positive et respectueuse de l'épanouissement scolaire.</p>
                            </div>

                            <div className="statuts-section">
                                <h3>2. Données Personnelles des Donateurs & Adhérents</h3>
                                <p>Les informations collectées lors des dons ou adhésions sont strictement confidentielles et utilisées uniquement pour la gestion des relations associatives. Aucune donnée n'est jamais vendue, louée ou cédée à des tiers.</p>
                            </div>

                            <div className="statuts-section">
                                <h3>3. Exercice de vos Droits</h3>
                                <p>Conformément à la réglementation RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant à tout moment à : <strong>simadilaeducaction@gmail.com</strong>.</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className="doc-modal-footer">
                    <button onClick={onClose} className="btn-doc-close">
                        Fermer
                    </button>
                    <button onClick={handlePrint} className="btn-doc-print">
                        <i className="fas fa-print"></i> Imprimer / Enregistrer PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DocumentModal;
