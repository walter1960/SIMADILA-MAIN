import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import TrustSignals from '../components/TrustSignals';
import { CBLogo, ApplePayLogo, GooglePayLogo, VisaLogo, MastercardLogo } from '../components/PaymentLogos';

const Donate = () => {
    useScrollAnimation('.section-title, .donation-card');
    const [copiedField, setCopiedField] = useState(null); // 'iban' | 'phone' | null

    const iban = "FR76 1027 8027 4000 0509 5150 133";
    const mobileMoneyPhone = "+228 96 03 25 36";
    // URL directe vers la page HelloAsso de l'association
    const helloAssoUrl = "https://www.helloasso.com/associations/simadila-educ-action";

    const handleCopy = (text, fieldName) => {
        navigator.clipboard.writeText(text);
        setCopiedField(fieldName);
        setTimeout(() => setCopiedField(null), 3000);
    };

    const [isProcessingHelloAsso, setIsProcessingHelloAsso] = useState(false);

    const handleHelloAssoPayment = async () => {
        setIsProcessingHelloAsso(true);
        try {
            const res = await fetch('/api/helloasso', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 50 })
            });
            const data = await res.json();
            if (data.redirectUrl) {
                window.location.href = data.redirectUrl;
                return;
            }
        } catch (e) {
            console.warn('HelloAsso API checkout error, fallback to portal:', e);
        } finally {
            setIsProcessingHelloAsso(false);
        }
        // Fallback to HelloAsso page
        window.open('https://www.helloasso.com/associations/simadila-educ-action/don', '_blank');
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

                {/* Payment Methods Grid - Placed at Top */}
                <div className="donation-options" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', marginTop: '30px' }}>
                    
                    {/* Method 1: HelloAsso (CB, Apple Pay, Google Pay) */}
                    <div className="donation-card">
                        <div className="payment-method-icon">
                            <i className="fas fa-credit-card fa-2x"></i>
                        </div>
                        <h3>Carte Bancaire & Pay</h3>
                        <div className="payment-visual-badges">
                            <CBLogo height={26} />
                            <ApplePayLogo height={26} />
                            <GooglePayLogo height={26} />
                            <VisaLogo height={26} />
                            <MastercardLogo height={26} />
                        </div>
                        <p className="payment-description">
                            Paiement 100% sécurisé via la plateforme solidaire française <strong>HelloAsso</strong> (0% de frais, reçu de don immédiat).
                        </p>

                        <div className="payment-cta-box" style={{ marginTop: 'auto', paddingTop: '15px' }}>
                            <a
                                href={helloAssoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-gold"
                                style={{ width: '100%', justifyContent: 'center', fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                            >
                                <i className="fas fa-heart"></i> Donner via HelloAsso
                            </a>
                        </div>
                    </div>

                    {/* Method 2: Bank Transfer (Crédit Mutuel) */}
                    <div className="donation-card">
                        <div className="payment-method-icon">
                            <i className="fas fa-university fa-2x"></i>
                        </div>
                        <h3>Virement Bancaire</h3>
                        <div className="payment-badges">
                            <span className="badge-tag">Crédit Mutuel</span>
                            <span className="badge-tag">SEPA / RIB</span>
                        </div>
                        <p className="payment-description">
                            Pour les virements bancaires ponctuels ou réguliers directement sur le compte associatif :
                        </p>

                        <div className="bank-details-box" style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', margin: '15px 0', border: '1px solid #e2e8f0', textAlign: 'left', fontSize: '0.9rem' }}>
                            <p style={{ marginBottom: '6px' }}><strong>Banque :</strong> Crédit Mutuel</p>
                            <p style={{ marginBottom: '6px' }}><strong>Titulaire :</strong> Association Simadila Educ'Action</p>
                            <div style={{ marginTop: '10px' }}>
                                <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 'bold' }}>IBAN (France / International) :</span>
                                <p style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#0f172a', wordBreak: 'break-all', marginTop: '3px', background: '#ffffff', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                                    {iban}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleCopy(iban.replace(/\s+/g, ''), 'iban')}
                            className="btn btn-outline"
                            style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
                        >
                            <i className={copiedField === 'iban' ? "fas fa-check" : "fas fa-copy"}></i>
                            {copiedField === 'iban' ? " IBAN copié !" : " Copier l'IBAN"}
                        </button>
                    </div>

                    {/* Method 3: Dons Matériels & Espèces (Fournitures, Livres, Matériel) */}
                    <div className="donation-card">
                        <div className="payment-method-icon">
                            <i className="fas fa-boxes fa-2x"></i>
                        </div>
                        <h3>Fournitures & Espèces</h3>
                        <div className="payment-badges">
                            <span className="badge-tag">Kits & Livres</span>
                            <span className="badge-tag">Matériel</span>
                            <span className="badge-tag">Espèces</span>
                        </div>
                        <p className="payment-description">
                            Vous souhaitez donner des fournitures scolaires, des livres, du matériel pédagogique ou faire un don direct en espèces :
                        </p>

                        <div className="payment-cta-box" style={{ marginTop: 'auto', paddingTop: '15px' }}>
                            <button
                                onClick={handleMaterialDonation}
                                className="btn btn-outline"
                                style={{ width: '100%', justifyContent: 'center', fontWeight: 'bold', cursor: 'pointer' }}
                            >
                                <i className="fas fa-paper-plane"></i> Proposer un don
                            </button>
                            <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '10px' }}>
                                Contact : <strong>simadilaeducaction@gmail.com</strong>
                            </p>
                        </div>
                    </div>

                    {/* Method 3: Mobile Money Togo (Moov Money) - Discreet */}
                    <div className="donation-card" style={{ opacity: 0.95 }}>
                        <div className="payment-method-icon">
                            <i className="fas fa-mobile-alt fa-2x"></i>
                        </div>
                        <h3>Moov Money</h3>
                        <div className="payment-badges">
                            <span className="badge-tag">Moov Money Togo</span>
                        </div>
                        <p className="payment-description">
                            Option pour vos contributions directes au Togo via Moov Money :
                        </p>

                        <div className="mobile-money-box" style={{ background: '#f8fafc', padding: '15px', borderRadius: '10px', margin: '15px 0', border: '1px solid #e2e8f0' }}>
                            <img
                                src="/staticfiles/img/qr-mobile-money.png"
                                alt="Code QR Moov Money"
                                style={{ width: '110px', height: '110px', margin: '0 auto 8px', display: 'block', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                            />
                            <p style={{ fontSize: '0.8rem', color: '#475569', margin: '4px 0 2px' }}>Scannez le code QR pour effectuer votre don</p>
                            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Bénéficiaire : <strong>Simadila Educ'Action</strong></p>
                        </div>
                    </div>

                </div>

                {/* Impact Equivalences Box - Placed below */}
                <div className="impact-message-box" style={{ marginTop: '40px' }}>
                    <i className="fas fa-heart fa-2x"></i>
                    <div>
                        <h3>Votre Impact Direct</h3>
                        <p><strong>20€</strong> = 1 mois de fournitures scolaires pour 1 enfant</p>
                        <p><strong>50€</strong> = 3 mois de cantine pour 1 enfant</p>
                        <p><strong>100€</strong> = Scolarisation complète pour 9 mois</p>
                    </div>
                </div>

                {/* Transparency Section */}
                <div className="transparency-section" style={{ marginTop: '50px' }}>
                    <h3><i className="fas fa-chart-pie"></i> Où va votre don ?</h3>
                    <div className="transparency-breakdown">
                        <div className="breakdown-item">
                            <div className="breakdown-bar" style={{ width: '80%', backgroundColor: '#4a9d4f' }}></div>
                            <span>80% Actions terrain</span>
                        </div>
                        <div className="breakdown-item">
                            <div className="breakdown-bar" style={{ width: '15%', backgroundColor: '#ffd700' }}></div>
                            <span>15% Frais administratifs</span>
                        </div>
                        <div className="breakdown-item">
                            <div className="breakdown-bar" style={{ width: '5%', backgroundColor: '#6c757d' }}></div>
                            <span>5% Collecte de fonds</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
