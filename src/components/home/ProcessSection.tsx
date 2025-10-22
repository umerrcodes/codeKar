"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const ProcessSection = () => {
  return (
    <section className="w-full bg-black text-white py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to start coding in Karachi?
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Join our next 2-day workshop. Limited to 20 students per batch for personalized attention. Spots fill up fast!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sign_up">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90"
          >
            Register for Next Workshop
          </Button>
          </Link>
          {/* <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe0UQHiMZlsXKQrsNBGuaQMFehh80r3BDo_5NnfpNpkJ1Yeyw/viewform?usp=sf_link', '_blank')}
          >
            Join Waitlist
          </Button> */}
        </div>
      </div>
    </section>
  );
}; 