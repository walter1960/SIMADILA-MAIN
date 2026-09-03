import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import TrustSignals from '../components/TrustSignals';

const Donate = () => {
    useScrollAnimation('.section-title, .donation-card');
    const [copiedField, setCopiedField] = useState(null); // 'iban' | 'phone' | null

    const iban = "FR76 1027 8027 4000 0509 5150 133";
    const mobileMoneyPhone = "+228 96 03 25 36";

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
                        <div className="payment-logos" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', margin: '12px 0', flexWrap: 'wrap' }}>
                            {/* Apple Pay */}
                            <div style={{ background: '#000000', borderRadius: '8px', padding: '6px 14px', display: 'flex', alignItems: 'center', height: '36px' }}>
                                <svg viewBox="0 0 165.521 105.965" width="50" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#fff" d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.897 9.897 0 0 0-4.35 4.35 10.484 10.484 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.274 3.11a10.46 10.46 0 0 0 .975 2.96 9.897 9.897 0 0 0 4.35 4.35c.953.49 1.953.83 2.958.974 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.003.953-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.975 9.901 9.901 0 0 0 4.35-4.35c.49-.953.83-1.953.974-2.96.184-1.025.246-2.073.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.09-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.901 9.901 0 0 0-4.35-4.35A10.458 10.458 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a63.312 63.312 0 0 0-1.43-.022C151.83 0 151.263 0 150.698 0z"/>
                                    <path fill="#000" d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.021.793.022 1.719.064 2.583.22.75.136 1.38.352 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.517 1.235.653 1.985.157.865.198 1.79.22 2.581.013.46.019.92.022 1.36.004.563.004 1.126.004 1.667v76.318c0 .54 0 1.106-.004 1.684-.003.436-.009.873-.022 1.339-.022.793-.063 1.716-.22 2.583-.136.75-.347 1.38-.653 1.984a6.397 6.397 0 0 1-2.804 2.807c-.6.306-1.235.516-1.984.652-.864.157-1.79.198-2.583.22l-1.36.022c-.56.003-1.12.003-1.672.003H14.823c-.008 0-.015 0-.023-.001-.553 0-1.107 0-1.666-.002-.46-.003-.921-.01-1.36-.022-.793-.022-1.718-.063-2.584-.22-.75-.137-1.38-.347-1.984-.652a6.397 6.397 0 0 1-2.804-2.807c-.306-.6-.517-1.235-.653-1.984-.157-.865-.198-1.79-.22-2.583-.013-.467-.019-.903-.022-1.339-.004-.575-.004-1.14-.004-1.684V14.824c0-.54 0-1.104.004-1.682.003-.438.009-.895.022-1.346.022-.792.063-1.717.22-2.581.136-.75.347-1.385.653-1.985a6.392 6.392 0 0 1 2.804-2.807c.604-.296 1.235-.512 1.984-.648.866-.156 1.79-.198 2.584-.22.438-.013.899-.018 1.36-.02.558-.004 1.12-.004 1.666-.004h135.875"/>
                                    <path fill="#fff" d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.96-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858m2.082 1.477c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.449.05-6.648 2-8.398 5.1-3.6 6.2-.95 15.4 2.55 20.45 1.7 2.5 3.749 5.25 6.449 5.15 2.55-.1 3.549-1.65 6.649-1.65 3.1 0 4 1.65 6.699 1.6 2.8-.05 4.549-2.5 6.249-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.399-2.1-5.449-8.3-.05-5.15 4.199-7.65 4.399-7.8-2.4-3.55-6.149-3.95-7.452-3.95m24.129-6.83v42.394h6.567V56.582h9.085c8.304 0 14.146-5.697 14.146-13.891 0-8.194-5.735-13.752-13.93-13.752H69.72zm6.567 5.58h7.559c5.702 0 8.953 3.047 8.953 8.39 0 5.344-3.25 8.42-8.985 8.42H76.286V35.997zm36.32 37.14c4.125 0 7.95-2.088 9.688-5.393h.128v5.072h6.082V49.424c0-6.116-4.886-10.05-12.413-10.05-7.046 0-12.22 3.998-12.413 9.492h5.897c.482-2.603 2.895-4.31 6.292-4.31 4.062 0 6.345 1.895 6.345 5.393v2.365l-8.298.504c-7.721.472-11.9 3.628-11.9 9.112 0 5.546 4.312 9.207 10.592 9.207zm1.762-5.137c-3.546 0-5.803-1.703-5.803-4.31 0-4.396 2.568-5.34 7.463-5.637l7.38-.44v2.426c0 4.652-3.931 7.96-9.04 7.96zm23.267 17.83c6.41 0 9.424-2.45 12.06-9.88l11.568-32.43h-6.665l-7.752 25.1h-.128l-7.752-25.1h-6.857l11.118 30.78-.6 1.896c-1.01 3.22-2.641 4.467-5.558 4.467-.514 0-1.508-.065-1.91-.128v5.105c.386.097 2.025.19 2.476.19z"/>
                                </svg>
                            </div>
                            {/* Google Pay */}
                            <div style={{ background: '#ffffff', borderRadius: '8px', padding: '6px 14px', display: 'flex', alignItems: 'center', height: '36px', border: '1px solid #dadce0' }}>
                                <svg viewBox="0 0 435.97 173.13" width="56" height="22" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#5F6368" d="M206.2,84.58v50.36H190.54V10h41.04c10.18,0,18.89,3.39,25.99,10.18,7.28,6.79,10.89,15.08,10.89,24.88s-3.58,18.18-10.89,24.88c-7.08,6.79-15.78,10.18-25.99,10.18h-25.37l-.01.46Zm0-59.07v43.6h25.73c5.98,0,10.98-2.08,14.88-6.19,4.09-4.09,6.09-9.07,6.09-14.58s-2.08-10.58-6.09-14.68c-3.88-4.09-8.88-6.19-14.88-6.19h-25.73v.04Z"/>
                                    <path fill="#5F6368" d="M314.63,43.7c11.52,0,20.62,3.08,27.31,9.28,6.69,6.19,10.02,14.68,10.02,25.47v51.49h-14.92v-11.58h-.69c-6.42,9.58-14.98,14.38-25.62,14.38-9.09,0-16.69-2.69-22.79-8.08-6.09-5.39-9.09-12.19-9.09-20.38,0-8.62,3.29-15.48,9.78-20.48,6.5-5.08,15.18-7.58,25.99-7.58,9.22,0,16.82,1.69,22.78,5.08v-3.58c0-5.39-2.2-9.97-6.49-13.77-4.29-3.78-9.27-5.69-14.88-5.69-8.62,0-15.42,3.62-20.38,10.89l-13.77-8.69C289.2,49,299.88,43.7,314.63,43.7Zm-20.09,60.18c0,4.09,1.79,7.48,5.28,10.18,3.49,2.69,7.58,4.08,12.17,4.08,6.59,0,12.38-2.5,17.48-7.48,5.08-4.98,7.58-10.78,7.58-17.38-4.88-3.88-11.72-5.78-20.38-5.78-6.29,0-11.52,1.58-15.78,4.68-4.22,3.15-6.35,6.94-6.35,11.7Z"/>
                                    <path fill="#5F6368" d="M436,46.49l-52.28,120.22h-16.12l19.39-41.94-34.36-78.28h16.96l24.88,60.08h.34l24.22-60.08h16.96Z"/>
                                    <path fill="#4285F4" d="M142.91,73.41c0-4.78-.4-9.38-1.19-13.77H73.01v26.05h39.24c-1.69,9.09-6.79,16.77-14.48,21.95v18.28h23.47C133.52,114.53,142.91,95.76,142.91,73.41Z"/>
                                    <path fill="#34A853" d="M73.01,144.04c19.6,0,36.02-6.5,48.03-17.6l-23.47-18.23c-6.5,4.35-14.81,6.93-24.56,6.93-18.88,0-34.87-12.75-40.56-29.9H8.24v18.84C20.15,128.12,44.81,144.04,73.01,144.04Z"/>
                                    <path fill="#FBBC04" d="M32.45,85.24c-1.48-4.35-2.31-9.01-2.31-13.82s.83-9.47,2.31-13.82V38.76H8.24C2.96,49.28,0,61.02,0,73.41s2.96,24.13,8.24,34.65l24.21-22.82Z"/>
                                    <path fill="#EA4335" d="M73.01,29.7c10.64,0,20.19,3.66,27.7,10.85l20.78-20.78C109,8.43,92.58,2.79,73.01,2.79,44.81,2.79,20.15,18.71,8.24,42.74l24.21,18.84C38.14,44.44,54.13,29.7,73.01,29.7Z"/>
                                </svg>
                            </div>
                            {/* CB / Visa / Mastercard */}
                            <div style={{ background: '#ffffff', borderRadius: '8px', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '6px', height: '36px', border: '1px solid #dadce0' }}>
                                <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="4" width="22" height="16" rx="3" fill="#1a1f71"/>
                                    <rect x="1" y="14" width="22" height="3" fill="#f7b600"/>
                                    <text x="12" y="12.5" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold" fontFamily="Arial">CB</text>
                                </svg>
                                <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="4" width="22" height="16" rx="3" fill="#fff" stroke="#e0e0e0"/>
                                    <circle cx="9.5" cy="12" r="5" fill="#eb001b"/>
                                    <circle cx="14.5" cy="12" r="5" fill="#f79e1b"/>
                                    <path d="M12 8.2a5 5 0 0 1 0 7.6 5 5 0 0 1 0-7.6z" fill="#ff5f00"/>
                                </svg>
                            </div>
                        </div>
                        <p className="payment-description">
                            Paiement 100% sécurisé via la plateforme solidaire française <strong>HelloAsso</strong> (0% de frais, reçu de don immédiat).
                        </p>

                        <div className="payment-cta-box" style={{ marginTop: '25px' }}>
                            <button
                                onClick={handleHelloAssoPayment}
                                disabled={isProcessingHelloAsso}
                                className="btn btn-gold"
                                style={{ width: '100%', justifyContent: 'center', fontWeight: 'bold', cursor: 'pointer' }}
                            >
                                <i className="fas fa-heart"></i> {isProcessingHelloAsso ? "Connexion sécurisée..." : "Donner via HelloAsso"}
                            </button>
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
