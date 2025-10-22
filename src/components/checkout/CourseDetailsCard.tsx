"use client";

import React from 'react';
import { ClipboardList, Banknote, MailCheck, Phone, Instagram } from 'lucide-react';

interface CourseDetailsCardProps {
  cohortDate: string | null;
  registrationType: string | null;
}

const CourseDetailsCard: React.FC<CourseDetailsCardProps> = ({ cohortDate, registrationType }) => {
  const steps = [
    {
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      text: "Complete your registration information, providing us your contact details.",
    },
    {
      icon: <Banknote className="w-6 h-6 text-white" />,
      text: "Submit your payment using the bank transfer method below.",
    },
    {
      icon: <MailCheck className="w-6 h-6 text-white" />,
      text: "Receive confirmation from us through WhatsApp and Email.",
    },
  ];

  return (
    <div className="bg-[#1c1c1c] backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/10 h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-white">Your Registration Summary</h2>
      
      <div className="bg-black/40 p-5 rounded-xl mb-6 border border-white/5">
        <h3 className="font-semibold text-white mb-2">Selected Cohort</h3>
        <p className="text-white/70">{cohortDate || 'Not specified'}</p>
        <p className="text-white/90 font-medium">{registrationType || 'Standard'}</p>
      </div>

      <div className="space-y-6 flex-grow">
        <h3 className="font-semibold text-white text-lg mb-4">Next Steps</h3>
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex-shrink-0 mt-1">{step.icon}</div>
            <p className="text-white/80 leading-relaxed"><span className="font-bold text-white">Step {index + 1}:</span> {step.text}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/70 space-y-4">
        <p className="leading-relaxed">
          We will send you the cohort agenda and all relevant information closer to the date!
        </p>
        <div className="space-y-3 bg-white/5 p-4 rounded-xl">
          <p className="font-semibold text-white">Have questions?</p>
          <div className="flex items-center space-x-2 text-white/80">
            <Phone className="w-4 h-4 text-white/60" />
            <span>+923343534053</span>
          </div>
          <div className="flex items-center space-x-2 text-white/80">
            <Instagram className="w-4 h-4 text-white/60" />
            <span>@codekar.pk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard; 