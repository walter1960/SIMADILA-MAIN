// Logos vectoriels officiels et nets pour les modes de paiement

export const CBLogo = ({ height = 24 }) => (
    <span className="payment-visual-badge cb-badge" title="Carte Bancaire">
        <svg height={height} viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="32" rx="4" fill="#007953" />
            <path d="M25 0H46C48.2091 0 50 1.79086 50 4V28C50 30.2091 48.2091 32 46 32H25V0Z" fill="#004A97" />
            <text x="25" y="22" fill="#ffffff" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="17" textAnchor="middle" letterSpacing="-0.5">cb</text>
        </svg>
    </span>
);

export const ApplePayLogo = ({ height = 24 }) => (
    <span className="payment-visual-badge apple-pay-badge" title="Apple Pay">
        <svg height={height} viewBox="0 0 62 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="62" height="32" rx="4" fill="#000000" />
            {/* Apple shape */}
            <path d="M17.4 12.3c-.6.8-1.5 1.3-2.3 1.2-.1-.9.3-1.8.8-2.4.6-.7 1.6-1.2 2.3-1.2.1 1-.2 1.8-.8 2.4zm.8 1.4c-1.3-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.5-.4 6.2 1 8.2.7 1 1.5 2.1 2.6 2.1s1.4-.7 2.7-.7c1.3 0 1.6.7 2.7.7 1.1 0 1.8-1 2.5-2 .8-1.2 1.1-2.3 1.2-2.4-.1 0-2.2-.9-2.2-3.4 0-2.1 1.7-3.2 1.8-3.2-1-1.5-2.6-1.7-3.2-1.7l-.2.4z" fill="#ffffff" />
            {/* Pay text */}
            <text x="38" y="21.5" fill="#ffffff" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="600" fontSize="13">Pay</text>
        </svg>
    </span>
);

export const GooglePayLogo = ({ height = 24 }) => (
    <span className="payment-visual-badge google-pay-badge" title="Google Pay">
        <svg height={height} viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="67" height="31" rx="3.5" fill="#ffffff" stroke="#d1d5db" />
            {/* Google G */}
            <path d="M19.5 16.1c0-.4 0-.8-.1-1.1h-4.9v2.1h2.8c-.1.7-.5 1.3-1.1 1.7v1.4h1.8c1-1 1.5-2.4 1.5-4.1z" fill="#4285F4" />
            <path d="M14.5 21.2c1.4 0 2.6-.5 3.5-1.3l-1.8-1.4c-.5.3-1.1.5-1.7.5-1.3 0-2.4-.9-2.8-2.1h-1.8v1.4c.9 1.8 2.7 2.9 4.6 2.9z" fill="#34A853" />
            <path d="M11.7 16.9c-.1-.3-.2-.7-.2-1.1s.1-.8.2-1.1v-1.4h-1.8c-.4.8-.6 1.6-.6 2.5s.2 1.7.6 2.5l1.8-1.4z" fill="#FBBC05" />
            <path d="M14.5 12.6c.8 0 1.5.3 2 .8l1.5-1.5c-.9-.9-2.1-1.4-3.5-1.4-1.9 0-3.7 1.1-4.6 2.9l1.8 1.4c.4-1.2 1.5-2.2 2.8-2.2z" fill="#EA4335" />
            {/* Pay text */}
            <text x="37" y="21.5" fill="#5f6368" fontFamily="Product Sans, Roboto, Arial, sans-serif" fontWeight="600" fontSize="13">Pay</text>
        </svg>
    </span>
);

export const VisaLogo = ({ height = 24 }) => (
    <span className="payment-visual-badge visa-badge" title="Visa">
        <svg height={height} viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="32" rx="4" fill="#1434CB" />
            <text x="25" y="22" fill="#ffffff" fontFamily="Arial, Helvetica, sans-serif" fontStyle="italic" fontWeight="900" fontSize="15" textAnchor="middle" letterSpacing="0.5">VISA</text>
        </svg>
    </span>
);

export const MastercardLogo = ({ height = 24 }) => (
    <span className="payment-visual-badge mastercard-badge" title="Mastercard">
        <svg height={height} viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="32" rx="4" fill="#1e293b" />
            <circle cx="20" cy="16" r="9" fill="#EB001B" />
            <circle cx="30" cy="16" r="9" fill="#F79E1B" fillOpacity="0.85" />
        </svg>
    </span>
);
