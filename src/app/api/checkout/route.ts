import { NextResponse } from 'next/server';

// Stripe removed. Keep route for compatibility; respond with 501
export async function POST() {
    return NextResponse.json({ error: 'Stripe checkout is disabled' }, { status: 501 });
}