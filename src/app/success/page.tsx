import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
            <div className="text-center max-w-lg mx-auto p-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Payment Successful!
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                    Thank you for your registration. Your spot is confirmed! We&apos;ve sent a confirmation email with all the details.
                </p>
                <Link href="/">
                    <Button>
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
} 