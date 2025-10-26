import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
    const { cohort_date } = await request.json();

    if (!cohort_date) {
        return NextResponse.json({ error: 'Missing cohort date' }, { status: 400 });
    }

    try {
        // Default to payment link if not explicitly disabled
        if (process.env.USE_PAYMENT_LINK !== 'false') {
            // Option 1: Use Payment Link (has custom fields configured in Stripe dashboard)
            const paymentLink = process.env.STRIPE_PAYMENT_LINK_URL || 'https://buy.stripe.com/8x2aEYgf9coQa4ecLL2VG00';
            
            const params = new URLSearchParams({
                'client_reference_id': cohort_date,
                // Add other prefilled data as needed
            });

            const urlWithParams = `${paymentLink}?${params.toString()}`;
            return NextResponse.json({ url: urlWithParams });
        } else {
            // Option 2: Programmatic checkout session (requires custom_fields in code)
            const secretKey = process.env.STRIPE_SECRET_KEY;
            if (!secretKey) throw new Error('STRIPE_SECRET_KEY missing');
            const stripe = new Stripe(secretKey);

            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price: 'price_1RkWfCJLm62bVIdKx8TSJHrG',
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/sign_up`,
                allow_promotion_codes: true,
                // Add custom_fields here for programmatic checkout
                metadata: {
                    cohort_date: cohort_date,
                }
            });

            return NextResponse.json({ url: session.url });
        }

    } catch (error) {
        console.error('Checkout error:', error);
        return NextResponse.json({ error: 'Failed to create payment session' }, { status: 500 });
    }
} 