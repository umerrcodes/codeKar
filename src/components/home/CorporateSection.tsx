"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CorporateSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [goals, setGoals] = useState("");

  const reset = () => {
    setCompanyName("");
    setYourName("");
    setEmail("");
    setTeamSize("");
    setGoals("");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !yourName || !email || !teamSize) {
      alert("Please complete the required fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/corporate-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName, yourName, email, teamSize, goals }),
      });
      if (!res.ok) throw new Error("Request failed");
      setOpen(false);
      reset();
      alert("Thanks! We received your inquiry and will get back to you.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-black text-white py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Corporate workshops for teams in Karachi</h2>
            <p className="mt-3 text-white/80 text-lg">
              Want to upskill your team with AI-powered coding? We offer customized 2-day workshops for companies in Karachi. Perfect for teams starting their coding journey or exploring AI tools.
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-6 text-base">Get Custom Proposal</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl bg-[#111111] text-white border-white/10">
              <DialogHeader>
                <DialogTitle className="text-2xl">Corporate Workshop Inquiry</DialogTitle>
              </DialogHeader>
              <p className="text-white/70">
                Tell us about your team and we’ll design a custom AI coding workshop for your company.
              </p>
              <form onSubmit={onSubmit} className="space-y-4 mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="bg-black/40 border-white/15 text-white placeholder:text-white/40" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <Label htmlFor="yourName">Your Name *</Label>
                    <Input id="yourName" value={yourName} onChange={(e) => setYourName(e.target.value)} className="bg-black/40 border-white/15 text-white placeholder:text-white/40" placeholder="John Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-black/40 border-white/15 text-white placeholder:text-white/40" placeholder="john@acme.com" />
                </div>
                <div>
                  <Label htmlFor="teamSize">Team Size *</Label>
                  <select
                    id="teamSize"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full h-10 rounded-md bg-black/40 border border-white/15 px-3 text-white"
                  >
                    <option value="">Select team size</option>
                    <option>1-5</option>
                    <option>6-10</option>
                    <option>11-20</option>
                    <option>21-50</option>
                    <option>50+</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="goals">Tell us about your goals</Label>
                  <textarea
                    id="goals"
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    className="w-full min-h-28 rounded-md bg-black/40 border border-white/15 px-3 py-2 text-white placeholder:text-white/40"
                    placeholder="What would you like your team to learn? Any specific projects or challenges?"
                  />
                </div>
                <div className="pt-2">
                  <Button type="submit" disabled={loading} className="w-full bg-white text-black hover:bg-white/90">
                    {loading ? "Sending..." : "Send Inquiry"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;


