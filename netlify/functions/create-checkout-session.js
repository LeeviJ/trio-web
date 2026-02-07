import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Map period values to Stripe Price IDs (set these in Netlify environment variables)
const PRICE_MAP = {
  '12': process.env.STRIPE_PRICE_12MO, // 120 € / vuosi
  '6': process.env.STRIPE_PRICE_6MO,   // 65 € / 6 kk
  '1': process.env.STRIPE_PRICE_1MO,   // 12 € / kk
}

const PERIOD_LABELS = {
  '12': 'TrioLasku — 12 kuukautta (120 €)',
  '6': 'TrioLasku — 6 kuukautta (65 €)',
  '1': 'TrioLasku — 1 kuukausi (12 €)',
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  try {
    const { period, email } = JSON.parse(event.body)

    if (!period || !PRICE_MAP[period]) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid period selected' }),
      }
    }

    const priceId = PRICE_MAP[period]

    if (!priceId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Stripe Price ID not configured for this period' }),
      }
    }

    const origin = event.headers.origin || event.headers.referer || 'https://triotools.netlify.app'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}?payment=cancelled#order`,
      metadata: {
        period,
        product: 'TrioLasku',
      },
    })

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url }),
    }
  } catch (error) {
    console.error('Stripe error:', error.message)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create checkout session' }),
    }
  }
}
