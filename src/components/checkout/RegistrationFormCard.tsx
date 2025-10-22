"use client";

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertCircle } from 'lucide-react';

interface RegistrationFormCardProps {
  formData: {
    name: string;
    whatsapp: string;
    email: string;
    profession: string;
    attendance: string;
    agreedToTerms: boolean;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    whatsapp: string;
    email: string;
    profession: string;
    attendance: string;
    agreedToTerms: boolean;
  }>>;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  error: string;
}

const RegistrationFormCard: React.FC<RegistrationFormCardProps> = ({
  formData,
  setFormData,
  handleSubmit,
  loading,
  error,
}) => {
  return (
    <div className="bg-[#1c1c1c] backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/10 h-full">
      <h2 className="text-2xl font-bold mb-6 text-white">2. Your Details</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Full Name
          </label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-white mb-2">
            WhatsApp Number
            <span className="text-xs text-white/50 ml-2">(we will use this to contact you)</span>
          </label>
          <Input
            id="whatsapp"
            type="tel"
            required
            value={formData.whatsapp}
            onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
            className="w-full bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
            placeholder="Enter your WhatsApp number"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="profession" className="block text-sm font-medium text-white mb-2">
            What is your current profession?
            <span className="text-xs text-white/50 ml-2">(e.g., Student, Developer)</span>
          </label>
          <Input
            id="profession"
            type="text"
            required
            value={formData.profession}
            onChange={(e) => setFormData(prev => ({ ...prev, profession: e.target.value }))}
            className="w-full bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
            placeholder="Your Profession"
          />
        </div>

        <div>
          <label htmlFor="attendance" className="block text-sm font-medium text-white mb-2">
            Will you join online or in-person?
            <span className="text-xs text-white/50 ml-2">(In-person is in Clifton, Karachi)</span>
          </label>
          <Input
            id="attendance"
            type="text"
            required
            value={formData.attendance}
            onChange={(e) => setFormData(prev => ({ ...prev, attendance: e.target.value }))}
            className="w-full bg-black/40 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
            placeholder="Online / In-person"
          />
        </div>

        <div className="flex items-start space-x-3 pt-3 bg-white/5 p-4 rounded-xl border border-white/5">
          <Checkbox
            id="terms"
            checked={formData.agreedToTerms}
            onCheckedChange={(checked: boolean) => 
              setFormData(prev => ({ ...prev, agreedToTerms: checked }))
            }
            required
            className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:border-white mt-0.5"
          />
          <label htmlFor="terms" className="text-sm text-white/80 leading-relaxed">
            I understand that my registration will not be confirmed until payment is received and verified.
          </label>
        </div>

        {error && (
          <div className="flex items-center space-x-2 text-red-400 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading || !formData.agreedToTerms}
          className="w-full bg-white text-black hover:bg-white/90 font-semibold text-lg py-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Request to Register'}
        </Button>
      </form>
    </div>
  );
};

export default RegistrationFormCard; 