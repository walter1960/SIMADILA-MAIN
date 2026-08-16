const TrustSignals = () => {
    const signals = [
        { icon: 'shield-alt', text: 'Paiement sécurisé', color: '#4a9d4f' },
        { icon: 'users', text: '+50 donateurs', color: '#2c5530' }
    ];

    return (
        <div className="trust-signals-container">
            {signals.map(({ icon, text, color }) => (
                <div key={text} className="trust-badge">
                    <i className={`fas fa-${icon}`} style={{ color }}></i>
                    <span>{text}</span>
                </div>
            ))}
        </div>
    );
};

export default TrustSignals;
