import { NextRequest, NextResponse } from 'next/server';

// Define types for custom fields
interface CustomField {
  key: string;
  text?: { value: string };
  dropdown?: { value: string };
}

// Stripe fully disabled. Keep endpoint to avoid 404s in Stripe dashboard
export async function POST(_req: NextRequest) {
  return NextResponse.json({ ok: true, message: 'Stripe webhook disabled' });
}