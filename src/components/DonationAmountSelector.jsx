import { useState } from 'react';

const DonationAmountSelector = ({ onSelect }) => {
    const [selected, setSelected] = useState(50);
    const [custom, setCustom] = useState('');

    const amounts = [
        { value: 20, impact: "1 mois de fournitures scolaires pour 1 enfant" },
        { value: 50, impact: "3 mois de cantine pour 1 enfant", recommended: true },
        { value: 100, impact: "Scolarisation complète pour 9 mois" },
        { value: 200, impact: "Parrainage annuel d'un enfant" }
    ];

    const handleSelect = (amount) => {
        setSelected(amount);
        setCustom('');
        onSelect(amount);
    };

    const handleCustomChange = (value) => {
        setCustom(value);
        setSelected(null);
        if (value && !isNaN(value)) {
            onSelect(parseInt(value));
        }
    };

    return (
        <div className="amount-selector">
            <div className="amount-options-grid">
                {amounts.map(({ value, impact, recommended }) => (
                    <button
                        key={value}
                        className={`amount-option ${selected === value ? 'selected' : ''} ${recommended ? 'recommended' : ''}`}
                        onClick={() => handleSelect(value)}
                    >
                        {recommended && <span className="recommended-badge">Recommandé</span>}
                        <span className="amount-value">{value}€</span>
                        <span className="amount-impact">{impact}</span>
                    </button>
                ))}
            </div>
            <div className="custom-amount-container">
                <label htmlFor="custom-amount">Ou choisissez votre montant :</label>
                <div className="custom-amount-input">
                    <input
                        id="custom-amount"
                        type="number"
                        min="5"
                        placeholder="Montant personnalisé"
                        value={custom}
                        onChange={(e) => handleCustomChange(e.target.value)}
                    />
                    <span className="currency">€</span>
                </div>
            </div>
        </div>
    );
};

export default DonationAmountSelector;
