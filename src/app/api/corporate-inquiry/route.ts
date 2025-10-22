import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { companyName, yourName, email, teamSize, goals } = await req.json();
    if (!companyName || !yourName || !email || !teamSize) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Placeholder: In a real app, persist to DB or send to email/Slack/CRM.
    console.log("Corporate inquiry:", { companyName, yourName, email, teamSize, goals });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Corporate inquiry error", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}


