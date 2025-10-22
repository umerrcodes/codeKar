import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { 
      name, 
      whatsapp, 
      email, 
      cohortDate, 
      profession, 
      attendance 
    } = await req.json();

    if (!name || !whatsapp || !email || !cohortDate || !profession || !attendance) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from('registrations')
      .insert([
        { 
          full_name: name,
          whatsapp_number: whatsapp,
          email,
          cohort_date: cohortDate,
          profession,
          attendance,
          status: 'pending_payment' 
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to create registration' }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Request error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
} 