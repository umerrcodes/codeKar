import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Define types for custom fields
interface CustomField {
  key: string;
  text?: { value: string };
  dropdown?: { value: string };
}

export async function POST(req: NextRequest) {
  const buf = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err: unknown) {
    console.error(`Webhook signature verification failed: ${(err as Error).message}`);
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      
      // Get cohort date from client_reference_id (for payment links)
      const cohortDate = session.client_reference_id;
      if (!cohortDate) {
        console.error('Cohort date missing from session');
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
      }

      // Log successful payment
      console.log('Payment successful:', {
        email: session.customer_details?.email,
        cohort_date: cohortDate,
        session_id: session.id,
        amount_total: session.amount_total,
      });

      // Process custom fields if needed for logging
      const customFields = (session.custom_fields || []) as CustomField[];
      customFields.forEach((field: CustomField) => {
        console.log('Custom field received:', {
          key: field.key,
          value: field.text?.value || field.dropdown?.value
        });
      });
      break;

    default:
      console.warn(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
} 