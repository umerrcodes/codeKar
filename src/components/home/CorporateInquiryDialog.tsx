"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  children: React.ReactNode; // trigger
};

const CorporateInquiryDialog: React.FC<Props> = ({ children }) => {
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-[#111111] text-white border-white/10">
        <DialogHeader>
          <DialogTitle className="text-xl">Corporate Workshop Inquiry</DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="companyName" className="text-white/80">Company Name *</Label>
            <Input
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/40"
              placeholder="Acme Corp"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="yourName" className="text-white/80">Your Name *</Label>
              <Input
                id="yourName"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
                className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-white/80">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                placeholder="john@acme.com"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="teamSize" className="text-white/80">Team Size *</Label>
            <select
              id="teamSize"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="mt-1 w-full h-10 rounded-md bg-white/5 border border-white/10 px-3 text-white"
            >
              <option value="" className="bg-[#111111]">Select team size</option>
              <option className="bg-[#111111]">1-5</option>
              <option className="bg-[#111111]">6-10</option>
              <option className="bg-[#111111]">11-20</option>
              <option className="bg-[#111111]">21-50</option>
              <option className="bg-[#111111]">50+</option>
            </select>
          </div>

          <div>
            <Label htmlFor="goals" className="text-white/80">Goals (optional)</Label>
            <textarea
              id="goals"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              className="mt-1 w-full min-h-28 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40"
              placeholder="What would you like your team to learn? Any specific projects or challenges?"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-white text-black hover:bg-white/90">
            {loading ? "Sending..." : "Send Inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CorporateInquiryDialog;



