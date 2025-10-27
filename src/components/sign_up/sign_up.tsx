"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Building, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const STRIPE_PAYMENT_LINK = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "";

const SignUpPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cohorts = [
        {
            title: "2-Day Beginner Workshop",
            date: "November 8 & 9",
            time: "2:00 PM to 6:00 PM",
            type: "In-Person" as const,
            location: "Karachi, Pakistan",
            pricing: {
                in_person: 5000,
            },
            description: [
                "A beginner-friendly, hands-on 2-day experience",
                "Limited to 20 students for personalized attention",
                "Build and deploy a real, working app from scratch",
                "Get real-time support and guidance from instructors",
            ],
            tags: ["NEW", "Beginner Friendly", "No Coding Experience Needed"],
            spots: {
                in_person: { total: 20, filled: 0 },
            },
            show_spots: true,
        },
    ];

    const carouselImages = [
        "/assets/images/new-img.png",
        "/assets/images/new-img-2.jpeg",
        "/assets/images/new-img-3.jpeg",
        "/assets/images/new-img-4.jpeg",
    ];

    const handleSignUpClick = async (cohortDate: string, price: number, type: string) => {
        setLoading(true);
        setError(null);

        try {
            if (STRIPE_PAYMENT_LINK) {
                window.location.href = STRIPE_PAYMENT_LINK;
            } else {
                const params = new URLSearchParams({
                    cohort_date: cohortDate,
                    price: price.toString(),
                    type: type,
                });
                window.location.href = `/checkout?${params.toString()}`;
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
            setLoading(false);
        }
    };

    return (
        <>
            <style jsx global>{`
                html {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                html::-webkit-scrollbar {
                    display: none;
                }
                body {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                body::-webkit-scrollbar {
                    display: none;
                }
                
                @keyframes scroll-slow {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll-slow {
                    animation: scroll-slow 15s linear infinite;
                }
            `}</style>
            <div className="bg-black min-h-screen pt-8 md:pt-16 overflow-x-hidden">
                <main className="container mx-auto px-4 py-12 md:py-24 text-white">
                    {/* Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-3">
                            <span>
                                CodeKar — Karachi Workshops
                            </span>
                        </h1>
                        <p className="text-lg text-white/80">
                            Join our 2-day beginner-friendly workshop in Karachi. Learn to code with AI and build real apps for personal projects, school, or your career.
                        </p>
                    </motion.div>

                    {/* Feature Highlights */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap justify-center items-center gap-8 mb-16 text-white/80"
                    >
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/10">
                            <Calendar className="w-5 h-5 text-white" />
                            <span>2-day intensive</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/10">
                            <MapPin className="w-5 h-5 text-white" />
                            <span>In-person · Karachi</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-white/10">
                            <Users className="w-5 h-5 text-white" />
                            <span>Limited Spots</span>
                        </div>
                    </motion.div>

                    {/* Cohort Cards */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid gap-8 max-w-xl mx-auto mb-24 justify-items-center"
                        id="cohort-selection"
                    >
                        {cohorts.map((cohort, index) => {
                            const isSoldOut = (() => {
                                const inPersonLeft = cohort.spots.in_person.total - cohort.spots.in_person.filled;
                                return inPersonLeft <= 0;
                            })();

                            return (
                                <motion.div 
                                    key={index}
                                    whileHover={{ 
                                        y: -8, 
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" 
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className={cn(
                                        "bg-[#1c1c1c] text-white rounded-2xl p-8 shadow-xl relative overflow-hidden flex flex-col w-full border border-white/10",
                                        { 'opacity-60': isSoldOut }
                                    )}
                                >
                                    {/* NEW Tag */}
                                    <div className="absolute top-6 right-6 bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">
                                        NEW
                                    </div>
                                    
                                    {/* Header */}
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold mb-3 text-white">{cohort.title}</h2>
                                        <div className="flex items-center gap-4 text-sm text-white/70">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-white/60" />
                                                <span>{cohort.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-white/60" />
                                                <span>{cohort.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Pricing */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg border border-white/10">
                                            <div className="flex items-center gap-2">
                                                <Building className="w-4 h-4 text-white/70" />
                                                <span className="text-sm font-medium text-white/80">In-person</span>
                                            </div>
                                            <span className="text-xl font-bold text-white">PKR {cohort.pricing.in_person.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    {/* Spots Available */}
                                    {cohort.show_spots && (
                                        <div className="mb-6">
                                            <div className="flex items-center justify-between bg-gradient-to-r from-[#FFD700]/20 to-[#FFF8DC]/10 p-4 rounded-lg border border-[#FFD700]/40 shadow-[0_2px_12px_0_rgba(255,215,0,0.10)]">
                                                <div className="flex items-center gap-2">
                                                    <Users className="w-4 h-4 text-[#FFD700]/90 drop-shadow-[0_0_4px_#FFD700]" />
                                                    <span className="text-sm font-medium text-[#FFD700] drop-shadow-[0_0_2px_#FFD700]">Spots available</span>
                                                </div>
                                                <span className="text-sm font-semibold text-[#FFD700] drop-shadow-[0_0_2px_#FFD700]">{cohort.spots.in_person.total - cohort.spots.in_person.filled}</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Description */}
                                    <div className="mb-8 flex-grow">
                                        <p className="text-white/80 leading-relaxed">
                                            Perfect for beginners! Learn to code with AI tools, build a real working app, and leave with skills to continue your coding journey for personal projects, school, or career.
                                        </p>
                                    </div>
                                    
                                    {/* Action Button */}
                                    <div className="mt-auto">
                                        <Button 
                                            size="lg"
                                            disabled={isSoldOut || loading} 
                                            className="w-full bg-white text-black hover:bg-white/90 transition-all h-12 font-semibold"
                                            onClick={() => handleSignUpClick(cohort.date, cohort.pricing.in_person, "In-Person")}
                                        >
                                            {loading ? 'Processing...' : (
                                                isSoldOut ? 'Fully Booked' : 'Register (In-person)'
                                            )}
                                        </Button>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    







          {/* Image Carousel Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="max-w-7xl mx-auto mt-24 mb-16"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-white">
                                Workshop Highlights
                            </h2>
                        </div>
                        
                        {/* Infinite Carousel */}
                        <div className="relative overflow-hidden">
                            <div className="flex animate-scroll-slow" style={{ width: 'fit-content' }}>
                                {/* First set of images */}
                                {carouselImages.map((image, index) => (
                                    <div key={`first-${index}`} className="flex-shrink-0 w-80 sm:w-96 md:w-[400px] lg:w-[500px] xl:w-[600px] px-2 sm:px-4">
                                        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                            <Image
                                                src={image}
                                                alt={`Workshop highlight ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                        </div>
                                    </div>
                                ))}
                                
                                {/* Duplicate set for seamless loop */}
                                {carouselImages.map((image, index) => (
                                    <div key={`second-${index}`} className="flex-shrink-0 w-80 sm:w-96 md:w-[400px] lg:w-[500px] xl:w-[600px] px-2 sm:px-4">
                                        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                            <Image
                                                src={image}
                                                alt={`Workshop highlight ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>









                    {/* Waitlist Section removed per latest request */}

                    {/* Important Info Section */}
                    {/* <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-[#27272a]/90 backdrop-blur-sm p-8 rounded-2xl border border-[#a3e635]/20 max-w-4xl mx-auto mb-24 shadow-lg relative overflow-hidden"
                    > */}
                        {/* Decorative gradient */}
                        {/* <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-[#1a2e05]/30 via-[#a3e635]/10 to-transparent rounded-full blur-2xl"></div>
                        
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative text-white">
                            <Info className="w-5 h-5 text-[#a3e635]" /> Ready to build with AI?
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 text-white/80 relative">
                            <div className="flex gap-4 bg-[#1a2e05]/50 p-4 rounded-xl transition-transform hover:-translate-y-1 duration-300 border border-[#a3e635]/20">
                                <MapPin className="w-6 h-6 flex-shrink-0 mt-1 text-[#a3e635]" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">In-Person Workshop</h4>
                                    <p>Join us at our venue in Clifton, Karachi for an immersive learning experience.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 bg-[#1a2e05]/50 p-4 rounded-xl transition-transform hover:-translate-y-1 duration-300 border border-[#a3e635]/20">
                                <CreditCard className="w-6 h-6 flex-shrink-0 mt-1 text-[#a3e635]" />
                                <div>
                                    <h4 className="font-semibold text.white mb-1">Registration & Payment</h4>
                                    <p>Your spot is confirmed only upon payment completion.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 bg-[#1a2e05]/50 p-4 rounded-xl transition-transform hover:-translate-y-1 duration-300 border border-[#a3e635]/20">
                                <Users className="w-6 h-6 flex-shrink-0 mt-1 text-[#a3e635]" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Limited Capacity</h4>
                                    <p>Each session is limited to ensure personalized attention. Early registration recommended.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 bg-[#1a2e05]/50 p-4 rounded-xl transition-transform hover:-translate-y-1 duration-300 border border-[#a3e635]/20">
                                <Laptop className="w-6 h-6 flex-shrink-0 mt-1 text-[#a3e635]" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">What You&apos;ll Need</h4>
                                    <p>A computer with an internet connection. No software installation required.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <Button 
                                size="lg"
                                className="bg-[#a3e635] text-black hover:bg-[#1a2e05] hover:text-white transition-all group"
                                onClick={() => window.location.href = '#cohort-selection'}
                            >
                                <span>Choose Your Cohort & Register</span>
                                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div> */}

                    {/* What You'll Build Section */}
                    {/* <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="max-w-7xl mx-auto mb-24"
                    >
                        <div className="text-center mb-12">
                             <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-[#fafafa]">
                                What You'll Build
                             </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {whatYouWillBuild.map((item, index) => (
                                <motion.div 
                                    key={item.title} 
                                    className="bg-[#27272a]/90 backdrop-blur-sm p-8 rounded-2xl border border-[#a3e635]/20 text-center shadow-lg relative overflow-hidden"
                                    whileHover={{ 
                                        y: -10,
                                        boxShadow: "0 25px 50px -12px rgba(163, 230, 53, 0.25)"
                                    }}
                                    transition={{
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 20
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { delay: 1.0 + (index * 0.2) } 
                                    }}
                                > */}
                                    {/* Decorative gradient */}
                                    {/* <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-b from-[#a3e635]/20 to-transparent rounded-full blur-xl"></div>
                                    
                                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#1a2e05]/50 border border-[#a3e635]/30">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                    <p className="text-white/70">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div> */}
                </main>
            </div>
        </>
    );
};

export default SignUpPage;