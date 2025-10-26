"use client";

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BankTransferDetailsCard from '@/components/checkout/BankTransferDetailsCard';
import RegistrationFormCard from '@/components/checkout/RegistrationFormCard';
import CourseDetailsCard from '@/components/checkout/CourseDetailsCard';

function CheckoutForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cohortDate = searchParams.get('cohort_date');
  const price = searchParams.get('price');
  const registrationType = searchParams.get('type');
  
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    profession: '',
    attendance: '',
    agreedToTerms: false
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/register-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          cohortDate,
          price,
          registrationType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-black py-12 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-[#1c1c1c] backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/10"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Registration Request Sent!</h2>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Thank you for your interest! We’ve received your registration request. After we receive your payment, you will receive an Email with more information.
            </p>
            <Button
              onClick={() => router.push('/')}
              className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-full font-semibold"
            >
              Return Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Complete Your Registration</h1>
          <p className="text-xl text-white/70">Follow the three simple steps below to secure your spot.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}>
            <CourseDetailsCard cohortDate={cohortDate} registrationType={registrationType} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}>
            <RegistrationFormCard
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              loading={loading}
              error={error}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}>
            <BankTransferDetailsCard price={price} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-black py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-white/70">Loading...</p>
        </div>
      </div>
    }>
      <CheckoutForm />
    </Suspense>
  );
} 