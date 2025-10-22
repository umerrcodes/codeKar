# CodeKar - Quick Start Guide

## 🚀 Get Your Website Running in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Supabase (First Time Only)

**Create `.env.local` file in the project root:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

👉 **Need detailed Supabase setup instructions?** See `SUPABASE_SETUP_GUIDE.md`

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📋 Key Files to Customize

### Content & Branding
- `src/components/home/Hero.tsx` - Main hero section
- `src/components/home/About.tsx` - About section
- `src/components/home/WhatWeDo.tsx` - What students learn
- `src/components/home/WhyChooseUs.tsx` - FAQs
- `src/components/sign_up/sign_up.tsx` - Workshop dates & pricing

### Bank Account Details
- `src/components/checkout/BankTransferDetailsCard.tsx` - Update with your bank info

### Contact Information
- `src/components/checkout/CourseDetailsCard.tsx` - Phone & Instagram handle

---

## 🗄️ Database Schema

The `registrations` table stores:
- `full_name` - Student's full name
- `email` - Email address
- `whatsapp_number` - WhatsApp for contact
- `cohort_date` - Which workshop they registered for
- `profession` - Current profession (e.g., Student, Developer)
- `attendance` - Online or In-person
- `status` - Payment status (default: 'pending_payment')
- `payment_amount` - Workshop fee
- `payment_confirmed_at` - When payment was verified
- `created_at` - Registration timestamp

---

## 🎨 Design System

### Colors
- **Primary Background**: `#1a1a1a` (Dark)
- **Card Background**: `#1c1c1c`
- **Text**: White with opacity variants
- **Accent**: White buttons with black text

### Fonts
- Primary: Manrope
- Weight: 300-800

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Deploy! 🚀

---

## 🔧 Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 📱 Update Workshop Information

### Change Workshop Dates
Edit `src/components/sign_up/sign_up.tsx`:
```tsx
const cohorts = [
  {
    title: "2-Day Beginner Workshop",
    date: "December 7 & 8",  // ← Change this
    time: "10:00 AM to 6:00 PM",  // ← And this
    pricing: {
      in_person: 15000,  // ← And the price
    },
    // ...
  }
];
```

### Update Bank Account
Edit `src/components/checkout/BankTransferDetailsCard.tsx`:
```tsx
const details = [
  {
    label: "Bank",
    value: "Your Bank - Branch, City",  // ← Change
  },
  {
    label: "Account Title",
    value: "YOUR NAME",  // ← Change
  },
  {
    label: "Account Number",
    value: "1234567890",  // ← Change
  },
  {
    label: "IBAN",
    value: "PK00BANK000000000000000",  // ← Change
  },
];
```

---

## 📞 Support

Need help? Check:
1. `SUPABASE_SETUP_GUIDE.md` - Detailed Supabase instructions
2. `README.md` - Project overview
3. [Next.js Docs](https://nextjs.org/docs)
4. [Supabase Docs](https://supabase.com/docs)

---

**Happy Coding! 🎉**

