import React from 'react';
import { Landmark, User, Hash, Fingerprint } from 'lucide-react';

interface BankTransferDetailsCardProps {
  price: string | null;
}

const BankTransferDetailsCard: React.FC<BankTransferDetailsCardProps> = ({ price }) => {
  const details = [
    {
      icon: <Landmark className="w-5 h-5 text-white/70" />,
      label: "Bank",
      value: "Meezan Bank - Clifton Branch, Karachi",
    },
    {
      icon: <User className="w-5 h-5 text-white/70" />,
      label: "Account Title",
      value: "UMER",
    },
    {
      icon: <Hash className="w-5 h-5 text-white/70" />,
      label: "Account Number",
      value: "01070110369202",
    },
    {
      icon: <Fingerprint className="w-5 h-5 text-white/70" />,
      label: "IBAN",
      value: "PK83MEZN0001070110369202",
    },
  ];

  return (
    <div className="bg-[#1c1c1c] backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/10 h-full">
      <h2 className="text-2xl font-bold mb-6 text-white">3. Bank Transfer Details</h2>
      <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl mb-8 border border-white/10 text-center">
        <p className="text-white/70 mb-2">
          Please transfer
        </p>
        <p className="text-3xl font-bold text-white">
          PKR {price ? Number(price).toLocaleString() : '15,000'}
        </p>
        <p className="text-white/70 mt-2">
          to the account below.
        </p>
      </div>
      <div className="space-y-4">
        {details.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex-shrink-0 mt-1">{item.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white/60 mb-1">{item.label}</p>
              <p className="font-semibold text-white break-words">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankTransferDetailsCard; 