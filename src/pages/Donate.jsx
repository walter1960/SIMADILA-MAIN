import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import TrustSignals from '../components/TrustSignals';
import { CBLogo, ApplePayLogo, GooglePayLogo, VisaLogo, MastercardLogo } from '../components/PaymentLogos';

const Donate = () => {
    useScrollAnimation('.section-title, .donation-checkout-container');

    // Selected payment method: 'card' | 'applepay' | 'googlepay' | 'transfer' | 'moov' | 'materials'
    const [selectedMethod, setSelectedMethod] = useState('card');
    const [customAmount, setCustomAmount] = useState('');
    const [copiedField, setCopiedField] = useState(null);

    const iban = "FR76 1027 8027 4000 0509 5150 133";
    const helloAssoUrl = "https://www.helloasso.com/associations/simadila-educ-action";

    const handleCopy = (text, fieldName) => {
        navigator.clipboard.writeText(text);
        setCopiedField(fieldName);
        setTimeout(() => setCopiedField(null), 3000);
    };

    const handleMaterialDonation = () => {
        const subject = encodeURIComponent("Proposition de don (fournitures scolaires, matériel ou espèces) - Simadila Educ'Action");
        const body = encodeURIComponent(
`Bonjour l'équipe Simadila Educ'Action,

Je souhaite faire un don en nature ou en espèces pour soutenir vos actions éducatives au Togo et au Bénin :

- Type de don (fournitures scolaires, livres, matériel pédagogique/informatique, don en espèces) : 
- Description détaillée du don : 
- Quantité / Montant estimé : 
- Ville / Pays de remise ou d'expédition : 
- Nom et Prénom : 
- Téléphone : 

Merci de m'indiquer les modalités pratiques de collecte ou de remise.

Bien cordialement,`
        );

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=simadilaeducaction@gmail.com&su=${subject}&body=${body}`;
        const mailtoUrl = `mailto:simadilaeducaction@gmail.com?subject=${subject}&body=${body}`;

        const newWindow = window.open(gmailUrl, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            window.location.href = mailtoUrl;
        }
    };

    return (
        <section className="section" id="donate">
            <div className="container">
                <h2 className="section-title">Soutenez Nos Actions</h2>
                <p className="donate-intro">
                    Votre contribution change des vies. <strong>Chaque don</strong> est directement investi dans la scolarisation, la cantine et l'équipement des enfants au Togo et au Bénin.
                </p>

                {/* Trust Signals */}
                <TrustSignals />

                {/* Checkout Experience Inspirée du Sélecteur Professionnel */}
                <div className="donation-checkout-container">
                    
                    {/* Header Step 3 Style */}
                    <div className="checkout-step-header">
                        <span className="step-number-circle">3</span>
                        <h3>Choisissez un mode de paiement</h3>
                    </div>

                    {/* Grille de sélection des modes de paiement */}
                    <div className="payment-methods-grid">
                        
                        {/* 1. Carte bancaire */}
                        <button
                            type="button"
                            className={`payment-method-tile ${selectedMethod === 'card' ? 'active' : ''}`}
                            onClick={() => setSelectedMethod('card')}
                        >
                            <div className="tile-icon-box">
                                <i className="fas fa-credit-card"></i>
                            </div>
                            <div className="tile-text-box">
                                <span className="tile-main-title">Carte bancaire</span>
                                <div className="tile-mini-badges">
                                    <span className="mini-badge">CB</span>
                                    <span className="mini-badge">Visa</span>
                                    <span className="mini-badge">Mastercard</span>
                                </div>
                            </div>
                        </button>

                        {/* 2. Apple Pay */}
                        <button
                            type="button"
                            className={`payment-method-tile ${selectedMethod === 'applepay' ? 'active' : ''}`}
                            onClick={() => setSelectedMethod('applepay')}
                        >
                            <div className="tile-icon-box">
                                <ApplePayLogo height={22} />
                            </div>
                            <div className="tile-text-box">
                                <span className="tile-main-title">Apple Pay</span>
                                <span className="tile-subtitle">Paiement instantané Apple</span>
                            </div>
                        </button>

                        {/* 3. Google Pay */}
                        <button
                            type="button"
                            className={`payment-method-tile ${selectedMethod === 'googlepay' ? 'active' : ''}`}
                            onClick={() => setSelectedMethod('googlepay')}
                        >
                            <div className="tile-icon-box">
                                <GooglePayLogo height={22} />
                            </div>
                            <div className="tile-text-box">
                                <span className="tile-main-title">Google Pay</span>
                                <span className="tile-subtitle">Paiement sécurisé en 1 clic</span>
                            </div>
                        </button>

                        {/* 4. Virement bancaire */}
                        <button
                            type="button"
                            className={`payment-method-tile ${selectedMethod === 'transfer' ? 'active' : ''}`}
                            onClick={() => setSelectedMethod('transfer')}
                        >
                            <div className="tile-icon-box">
                                <i className="fas fa-university"></i>
                            </div>
                            <div className="tile-text-box">
                                <span className="tile-main-title">Virement bancaire</span>
                                <span className="tile-subtitle">Crédit Mutuel (IBAN / SEPA)</span>
                            </div>
                        </button>

                        {/* 5. Moov Money Togo */}
                        <button
                            type="button"
                            className={`payment-method-tile ${selectedMethod === 'moov' ? 'active' : ''}`}
                            onClick={() => setSelectedMethod('moov')}
                        >
                            <div className="tile-icon-box">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <div className="tile-text-box">
                                <span className="tile-main-title">Moov Money</span>
                                <span className="tile-subtitle">Togo (QR Code direct)</span>
                            </div>
                        </button>

                        {/* 6. Fournitures & Espèces */}
                        <button
                            type="button"
                            className={`payment-method-tile ${selectedMethod === 'materials' ? 'active' : ''}`}
                            onClick={() => setSelectedMethod('materials')}
                        >
                            <div className="tile-icon-box">
                                <i className="fas fa-boxes"></i>
                            </div>
                            <div className="tile-text-box">
                                <span className="tile-main-title">Fournitures & Espèces</span>
                                <span className="tile-subtitle">Dons en nature ou matériels</span>
                            </div>
                        </button>
                    </div>

                    {/* Panneau de détails dynamique selon le mode sélectionné */}
                    <div className="payment-details-panel">

                        {/* Cas 1, 2 ou 3 : Paiements en ligne (Carte Bancaire, Apple Pay, Google Pay via HelloAsso) */}
                        {(selectedMethod === 'card' || selectedMethod === 'applepay' || selectedMethod === 'googlepay') && (
                            <div className="online-payment-details">
                                <div className="method-header-row">
                                    <div className="method-title-badge">
                                        {selectedMethod === 'card' && <><i className="fas fa-credit-card"></i> Règlement par Carte Bancaire</>}
                                        {selectedMethod === 'applepay' && <><ApplePayLogo height={24} /> Règlement avec Apple Pay</>}
                                        {selectedMethod === 'googlepay' && <><GooglePayLogo height={24} /> Règlement avec Google Pay</>}
                                    </div>
                                    <div className="payment-visual-badges">
                                        <CBLogo height={22} />
                                        <VisaLogo height={22} />
                                        <MastercardLogo height={22} />
                                    </div>
                                </div>

                                <div className="amount-selection-area">
                                    <label className="field-label">Montant de votre don (€) :</label>
                                    <div className="custom-amount-input-box" style={{ maxWidth: '340px', marginTop: '4px' }}>
                                        <input
                                            type="number"
                                            min="1"
                                            placeholder="Saisissez votre montant (ex: 20, 50, 100...)"
                                            value={customAmount}
                                            onChange={(e) => setCustomAmount(e.target.value)}
                                            className="custom-input"
                                        />
                                        <span className="currency-suffix">€</span>
                                    </div>
                                </div>

                                {/* Bouton de validation HelloAsso */}
                                <div className="checkout-action-row">
                                    <a
                                        href={helloAssoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`btn btn-large ${selectedMethod === 'applepay' ? 'btn-apple-pay' : selectedMethod === 'googlepay' ? 'btn-google-pay' : 'btn-gold'}`}
                                        style={{ width: '100%', justifyContent: 'center', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                                    >
                                        <i className="fas fa-lock"></i>
                                        {selectedMethod === 'card' && (customAmount ? `Valider mon don de ${customAmount} € par Carte Bancaire` : "Valider mon don par Carte Bancaire")}
                                        {selectedMethod === 'applepay' && (customAmount ? `Payer ${customAmount} € avec Apple Pay` : "Payer avec Apple Pay")}
                                        {selectedMethod === 'googlepay' && (customAmount ? `Payer ${customAmount} € avec Google Pay` : "Payer avec Google Pay")}
                                    </a>
                                </div>

                                <p className="secure-subtext">
                                    <i className="fas fa-check-circle"></i> Plateforme solidaire certifiée <strong>HelloAsso</strong> (0% de frais, reçu de don immédiat).
                                </p>
                            </div>
                        )}

                        {/* Cas 4 : Virement bancaire (Crédit Mutuel) */}
                        {selectedMethod === 'transfer' && (
                            <div className="transfer-details-box">
                                <div className="method-header-row">
                                    <div className="method-title-badge">
                                        <i className="fas fa-university"></i> Virement Bancaire Direct (Crédit Mutuel)
                                    </div>
                                    <span className="badge-tag">SEPA / RIB</span>
                                </div>

                                <p className="transfer-intro">
                                    Effectuez un virement bancaire ponctuel ou régulier directement sur le compte officiel de l'association :
                                </p>

                                <div className="bank-account-card">
                                    <div className="bank-row">
                                        <span className="row-label">Banque :</span>
                                        <span className="row-value"><strong>Crédit Mutuel</strong></span>
                                    </div>
                                    <div className="bank-row">
                                        <span className="row-label">Titulaire du compte :</span>
                                        <span className="row-value"><strong>Association Simadila Educ'Action</strong></span>
                                    </div>
                                    <div className="bank-row iban-row">
                                        <span className="row-label">IBAN (France / International) :</span>
                                        <div className="iban-code-container">
                                            <code className="iban-code">{iban}</code>
                                            <button
                                                type="button"
                                                onClick={() => handleCopy(iban.replace(/\s+/g, ''), 'iban')}
                                                className="btn-copy-iban"
                                            >
                                                <i className={copiedField === 'iban' ? "fas fa-check" : "fas fa-copy"}></i>
                                                {copiedField === 'iban' ? " Copié !" : " Copier"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Cas 5 : Moov Money Togo */}
                        {selectedMethod === 'moov' && (
                            <div className="moov-details-box">
                                <div className="method-header-row">
                                    <div className="method-title-badge">
                                        <i className="fas fa-mobile-alt"></i> Don par Moov Money Togo
                                    </div>
                                    <span className="badge-tag">Togo</span>
                                </div>

                                <div className="moov-scanner-card">
                                    <img
                                        src="/staticfiles/img/qr-mobile-money.png"
                                        alt="Code QR Moov Money"
                                        className="moov-qr-img"
                                    />
                                    <div className="moov-instructions">
                                        <h4>Comment donner par Moov Money :</h4>
                                        <p>1. Ouvrez votre application ou composez le code USSD Moov Money.</p>
                                        <p>2. Scannez le code QR ci-contre ou effectuez votre transfert.</p>
                                        <p>3. Bénéficiaire officiel : <strong>Simadila Educ'Action</strong>.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Cas 6 : Dons en nature, fournitures & espèces */}
                        {selectedMethod === 'materials' && (
                            <div className="materials-details-box">
                                <div className="method-header-row">
                                    <div className="method-title-badge">
                                        <i className="fas fa-boxes"></i> Dons Matériels, Fournitures & Espèces
                                    </div>
                                    <div className="payment-badges">
                                        <span className="badge-tag">Kits Scolaires</span>
                                        <span className="badge-tag">Livres</span>
                                        <span className="badge-tag">Espèces</span>
                                    </div>
                                </div>

                                <p className="materials-intro">
                                    Vous souhaitez faire un don de <strong>fournitures scolaires, cartables, livres, matériel informatique/pédagogique</strong> ou apporter une <strong>contribution en espèces</strong> ?
                                </p>

                                <div className="materials-action-card">
                                    <p>Cliquez ci-dessous pour nous envoyer votre proposition. Un message prêt à être complété s'ouvrira directement pour convenir des modalités pratiques :</p>
                                    <button
                                        type="button"
                                        onClick={handleMaterialDonation}
                                        className="btn btn-primary"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                                    >
                                        <i className="fas fa-paper-plane"></i> Proposer un don en nature ou espèces
                                    </button>
                                    <p className="contact-direct-subtext">
                                        Contact direct de coordination : <strong>simadilaeducaction@gmail.com</strong>
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Bloc Sécurité et Confidentialité (Inspiré du bloc bleu OVH) */}
                    <div className="checkout-security-box">
                        <div className="security-icon-circle">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <div className="security-text-content">
                            <h4>SÉCURITÉ ET CONFIDENTIALITÉ</h4>
                            <p>
                                Tous les paiements et dons effectués pour Simadila Educ'Action sont 100% sécurisés. Les renseignements personnels que vous nous transmettez demeureront strictement confidentiels et protégés par les normes RGPD.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Transparency Section */}
                <div className="transparency-section" style={{ marginTop: '50px' }}>
                    <h3><i className="fas fa-chart-pie"></i> Où va votre don ?</h3>
                    <div className="transparency-breakdown">
                        <div className="breakdown-item">
                            <div className="breakdown-bar" style={{ width: '80%', backgroundColor: '#4a9d4f' }}></div>
                            <span>80% Programmes sur le terrain</span>
                        </div>
                        <div className="breakdown-item">
                            <div className="breakdown-bar" style={{ width: '12%', backgroundColor: '#f4a261' }}></div>
                            <span>12% Frais de fonctionnement</span>
                        </div>
                        <div className="breakdown-item">
                            <div className="breakdown-bar" style={{ width: '8%', backgroundColor: '#e76f51' }}></div>
                            <span>8% Sensibilisation et communication</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Donate;
