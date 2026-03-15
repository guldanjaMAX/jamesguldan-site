export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { email, priceId, productSlug } = await request.json();

    if (!email || !priceId) {
      return new Response(JSON.stringify({ error: 'Email and priceId are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Allowed price IDs (prevent abuse)
    const allowedPrices = {
      'price_1SrRjcFArNSFW9mBLBIHdv2W': 'site-in-sixty',       // $27
      'price_1TB5AzFArNSFW9mBrF1j3EKA': 'bundle',              // $67
    };

    if (!allowedPrices[priceId]) {
      return new Response(JSON.stringify({ error: 'Invalid price' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const slug = productSlug || allowedPrices[priceId];
    const origin = new URL(request.url).origin;

    // Create Stripe Checkout Session via API
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'payment_method_types[]': 'card',
        'line_items[0][price]': priceId,
        'line_items[0][quantity]': '1',
        'mode': 'payment',
        'success_url': `${origin}/thank-you/?product=${slug}&session_id={CHECKOUT_SESSION_ID}`,
        'cancel_url': request.headers.get('Referer') || `${origin}/`,
        'customer_email': email,
        'allow_promotion_codes': 'true',
      }),
    });

    const session = await response.json();

    if (session.error) {
      return new Response(JSON.stringify({ error: session.error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
