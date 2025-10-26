import { NextRequest, NextResponse } from 'next/server';

// No-op placeholder; Stripe disabled

// Stripe fully disabled. Keep endpoint to avoid 404s in Stripe dashboard
export async function POST(_req: NextRequest) {
  return NextResponse.json({ ok: true, message: 'Stripe webhook disabled' });
}