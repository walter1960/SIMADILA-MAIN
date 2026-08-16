// Vercel Serverless Function for HelloAsso API v5 Checkout Integration
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { amount, payer } = req.body || {};
    const amountInCents = Math.round((parseFloat(amount) || 50) * 100);

    const clientId = process.env.HELLOASSO_CLIENT_ID || '74e7fb91ca0f444fa54eb9cbfa9beb12';
    const clientSecret = process.env.HELLOASSO_CLIENT_SECRET || '+/RywYIGvuqNB1aRE03t720d8+YUF6RH';

    try {
        // 1. Authenticate with HelloAsso OAuth2
        const tokenParams = new URLSearchParams();
        tokenParams.append('grant_type', 'client_credentials');
        tokenParams.append('client_id', clientId);
        tokenParams.append('client_secret', clientSecret);

        const tokenResponse = await fetch('https://api.helloasso.com/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Simadila-Web/1.0'
            },
            body: tokenParams.toString()
        });

        if (!tokenResponse.ok) {
            const errorText = await tokenResponse.text();
            console.error('HelloAsso Token Error:', errorText);
            return res.status(400).json({
                error: 'HelloAsso authentication in progress',
                details: errorText
            });
        }

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // 2. Fetch Organization Slug
        const meResponse = await fetch('https://api.helloasso.com/v5/organizations/me', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'User-Agent': 'Simadila-Web/1.0'
            }
        });

        const meData = await meResponse.json();
        const orgSlug = meData.organizationSlug || 'simadila-educ-action';

        // 3. Create Checkout Intent
        const checkoutResponse = await fetch(`https://api.helloasso.com/v5/organizations/${orgSlug}/checkout-intents`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Simadila-Web/1.0'
            },
            body: JSON.stringify({
                totalAmount: amountInCents,
                initialAmount: amountInCents,
                itemName: "Don - Simadila Educ'Action",
                backUrl: 'https://simadila001.vercel.app/#/donate?status=cancel',
                errorUrl: 'https://simadila001.vercel.app/#/donate?status=error',
                returnUrl: 'https://simadila001.vercel.app/#/donate?status=success',
                containsDonation: true,
                payer: payer || undefined
            })
        });

        const checkoutData = await checkoutResponse.json();
        return res.status(200).json(checkoutData);

    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: err.message });
    }
}
