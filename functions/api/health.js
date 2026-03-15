export async function onRequestGet(context) {
  const { env } = context;
  const checks = {
    timestamp: new Date().toISOString(),
    status: 'ok',
    checks: {}
  };

  // 1. Check that STRIPE_SECRET_KEY is configured
  if (!env.STRIPE_SECRET_KEY) {
    checks.status = 'error';
    checks.checks.stripe_key = { status: 'missing', message: 'STRIPE_SECRET_KEY not set in environment' };
  } else {
    checks.checks.stripe_key = { status: 'ok', message: 'Key is configured' };

    // 2. Verify Stripe API connection by fetching account info
    try {
      const accountResponse = await fetch('https://api.stripe.com/v1/account', {
        headers: {
          'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
        },
      });

      if (accountResponse.ok) {
        const account = await accountResponse.json();
        checks.checks.stripe_connection = {
          status: 'ok',
          message: `Connected to Stripe account: ${account.settings?.dashboard?.display_name || account.id}`,
        };
      } else {
        const error = await accountResponse.json();
        checks.status = 'error';
        checks.checks.stripe_connection = {
          status: 'error',
          message: error.error?.message || 'Failed to connect to Stripe',
        };
      }
    } catch (err) {
      checks.status = 'error';
      checks.checks.stripe_connection = {
        status: 'error',
        message: `Network error: ${err.message}`,
      };
    }

    // 3. Verify each allowed price still exists in Stripe
    const allowedPrices = {
      'price_1SrRjcFArNSFW9mBLBIHdv2W': 'Site In Sixty ($27)',
      'price_1TB5AzFArNSFW9mBrF1j3EKA': 'Deep Work Bundle ($67)',
    };

    checks.checks.prices = {};

    for (const [priceId, name] of Object.entries(allowedPrices)) {
      try {
        const priceResponse = await fetch(`https://api.stripe.com/v1/prices/${priceId}`, {
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
          },
        });

        if (priceResponse.ok) {
          const price = await priceResponse.json();
          checks.checks.prices[name] = {
            status: price.active ? 'ok' : 'warning',
            active: price.active,
            amount: `$${(price.unit_amount / 100).toFixed(2)}`,
          };
          if (!price.active) {
            checks.status = checks.status === 'error' ? 'error' : 'warning';
          }
        } else {
          checks.status = 'error';
          checks.checks.prices[name] = {
            status: 'error',
            message: 'Price not found',
          };
        }
      } catch (err) {
        checks.status = 'error';
        checks.checks.prices[name] = {
          status: 'error',
          message: `Network error: ${err.message}`,
        };
      }
    }
  }

  const statusCode = checks.status === 'ok' ? 200 : checks.status === 'warning' ? 200 : 503;

  return new Response(JSON.stringify(checks, null, 2), {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
