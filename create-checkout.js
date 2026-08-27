// api/create-checkout.js
// Vercel serverless function — creates a real Stripe Checkout session.
// This MUST run server-side because it uses your Stripe SECRET key,
// which should never be exposed in the app's client-side code.
//
// SETUP (one-time):
// 1. Create a free Stripe account: https://dashboard.stripe.com/register
// 2. In Stripe Dashboard → Products, create 3 recurring Prices:
//      - Weekly   (e.g. interval: week)
//      - Monthly  (e.g. interval: month)
//      - Yearly   (e.g. interval: year)
//    Copy each Price ID (looks like "price_1AbC...").
// 3. In your Vercel project → Settings → Environment Variables, add:
//      STRIPE_SECRET_KEY      = sk_live_...  (or sk_test_... while testing)
//      STRIPE_PRICE_WEEKLY    = price_...
//      STRIPE_PRICE_MONTHLY   = price_...
//      STRIPE_PRICE_YEARLY    = price_...
//      APP_URL                = https://your-deployed-domain.com
// 4. Add the "stripe" package: run `npm install stripe` in your project
//    root (creates/updates package.json so Vercel installs it on deploy).
// 5. Put this file at api/create-checkout.js in your project (same
//    location it's in this handoff) and redeploy.
//
// That's it — Stripe's own Checkout page automatically shows Apple Pay
// and Google Pay wallet buttons on top of the card form when the
// visitor's browser/device supports them. No separate Apple or Google
// merchant registration is needed for this to work.

const Stripe = require('stripe');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    // Stripe isn't configured yet on this deployment. Respond with a clear
    // error so the app's client-side code can fall back to free-beta access
    // instead of hanging or crashing.
    res.status(503).json({ error: 'Payments are not configured on this deployment yet.' });
    return;
  }

  const stripe = Stripe(secretKey);

  try {
    const { plan, uid, email } = req.body || {};

    const priceMap = {
      weekly: process.env.STRIPE_PRICE_WEEKLY,
      monthly: process.env.STRIPE_PRICE_MONTHLY,
      yearly: process.env.STRIPE_PRICE_YEARLY,
    };
    const priceId = priceMap[plan];
    if (!priceId) {
      res.status(400).json({ error: 'Unknown or unconfigured plan: ' + plan });
      return;
    }

    const appUrl = process.env.APP_URL || `https://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/?checkout=success`,
      cancel_url: `${appUrl}/?checkout=cancelled`,
      customer_email: email || undefined,
      client_reference_id: uid || undefined,
      // Stripe Checkout auto-detects and shows Apple Pay / Google Pay wallet
      // buttons for eligible visitors on top of the card form — no extra
      // config needed here for that part.
      metadata: { app: 'fitroyale', uid: uid || '', plan },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('[create-checkout] Stripe error:', err.message);
    res.status(500).json({ error: 'Could not start checkout.' });
  }
};
