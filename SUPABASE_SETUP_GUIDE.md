# Supabase Setup Guide for CodeKar

This guide will walk you through setting up your own Supabase database for the CodeKar website.

## Step 1: Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"** or **"Sign Up"**
3. Sign up using your GitHub account, Google, or email
4. Verify your email if required

## Step 2: Create a New Project

1. Once logged in, click **"New Project"**
2. Fill in the project details:
   - **Name**: `codekar-production` (or any name you prefer)
   - **Database Password**: Create a strong password (SAVE THIS - you'll need it!)
   - **Region**: Choose the closest region to Pakistan (e.g., `Southeast Asia (Singapore)` or `Mumbai, India`)
   - **Pricing Plan**: Select **Free** to start
3. Click **"Create new project"**
4. Wait 2-3 minutes for your database to be provisioned

## Step 3: Get Your API Credentials

Once your project is ready:

1. In the left sidebar, click on **"Settings"** (gear icon at bottom)
2. Click on **"API"** in the settings menu
3. You'll see these important credentials:

   **Copy these values (you'll need them next):**
   - **Project URL**: `https://xxxxxxxxxxxxx.supabase.co`
   - **anon/public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (long string)
   - **service_role key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (different long string)
   
   ⚠️ **IMPORTANT**: Keep the `service_role` key SECRET! Never commit it to public repositories.

## Step 4: Create Environment Variables File

1. In your project root (`/Users/umer/Downloads/secedatech-web-main/`), create a new file called `.env.local`

2. Add the following content (replace with your actual values):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Stripe Payment Link (optional - if you want to use Stripe)
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=
```

3. Save the file

4. **Verify `.env.local` is in `.gitignore`** (it should already be there)

## Step 5: Create the Database Table

Now we need to create the `registrations` table in your Supabase database.

### Option A: Using SQL Editor (Recommended)

1. In Supabase dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"+ New query"**
3. Copy and paste this SQL code:

```sql
-- Create registrations table
create table public.registrations (
    id uuid default gen_random_uuid() primary key,
    full_name text not null,
    email text not null,
    whatsapp_number text not null,
    cohort_date text not null,
    profession text,
    attendance text,
    status text not null default 'pending_payment',
    payment_confirmed_at timestamp with time zone,
    payment_amount numeric,
    payment_reference text,
    notes text,
    created_at timestamp with time zone default now() not null,
    updated_at timestamp with time zone default now() not null
);

-- Enable Row Level Security (RLS)
alter table public.registrations enable row level security;

-- Create policy to allow only authenticated users to read registrations
create policy "Allow authenticated users to read registrations"
    on public.registrations
    for select
    to authenticated
    using (true);

-- Create policy to allow service role to insert registrations
create policy "Allow service role to insert registrations"
    on public.registrations
    for insert
    to service_role
    with check (true);

-- Create policy to allow service role to update registrations
create policy "Allow service role to update registrations"
    on public.registrations
    for update
    to service_role
    using (true)
    with check (true);

-- Create updated_at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

create trigger handle_registrations_updated_at
    before update on public.registrations
    for each row
    execute function public.handle_updated_at();
```

4. Click **"Run"** (or press `Ctrl/Cmd + Enter`)
5. You should see "Success. No rows returned"

### Option B: Using Table Editor (Alternative - Manual)

If you prefer a visual approach:

1. Click **"Table Editor"** in the left sidebar
2. Click **"Create a new table"**
3. Set table name to `registrations`
4. Enable RLS (Row Level Security)
5. Add these columns:

| Column Name | Type | Default Value | Is Nullable |
|------------|------|---------------|-------------|
| id | uuid | gen_random_uuid() | No (Primary Key) |
| full_name | text | - | No |
| email | text | - | No |
| whatsapp_number | text | - | No |
| cohort_date | text | - | No |
| profession | text | - | Yes |
| attendance | text | - | Yes |
| status | text | 'pending_payment' | No |
| payment_confirmed_at | timestamptz | - | Yes |
| payment_amount | numeric | - | Yes |
| payment_reference | text | - | Yes |
| notes | text | - | Yes |
| created_at | timestamptz | now() | No |
| updated_at | timestamptz | now() | No |

6. Then run the SQL from Option A for policies and triggers

## Step 6: Configure Row Level Security (RLS) Policies

The SQL above already includes RLS policies, but here's what they do:

- **Read access**: Only authenticated users can view registrations
- **Insert access**: Only the service role (your backend) can create new registrations
- **Update access**: Only the service role can update registrations

This keeps your data secure!

## Step 7: Test Your Setup

1. Make sure your `.env.local` file has the correct credentials
2. Start your development server:
   ```bash
   npm run dev
   ```
3. Go to `http://localhost:3000/sign_up`
4. Try to register for a workshop
5. Check the Supabase dashboard → **Table Editor** → **registrations** to see if the data appears

## Step 8: View Your Registrations

To view registrations in Supabase:

1. Click **"Table Editor"** in the left sidebar
2. Click on **"registrations"** table
3. You'll see all submitted registrations with their details

You can also:
- Filter by status (pending_payment, confirmed, etc.)
- Search by name or email
- Edit records manually if needed

## Step 9: (Optional) Set Up Email Notifications

If you want to receive email notifications when someone registers:

1. In Supabase, go to **"Database"** → **"Webhooks"**
2. Click **"Create a new webhook"**
3. Configure it to trigger on INSERT to the `registrations` table
4. Point it to an email service like SendGrid, Resend, or your own API endpoint

## Common Issues & Solutions

### Issue: "Invalid API key"
**Solution**: Double-check that you copied the full anon key and service role key from Supabase settings.

### Issue: "relation 'registrations' does not exist"
**Solution**: Make sure you ran the SQL in Step 5 to create the table.

### Issue: "Row Level Security policy violation"
**Solution**: Ensure the RLS policies were created (check Step 6).

### Issue: Environment variables not loading
**Solution**: 
1. Restart your dev server after creating `.env.local`
2. Make sure the file is named exactly `.env.local` (not `.env.local.txt`)
3. Clear your browser cache and try again

## Security Best Practices

✅ **DO:**
- Keep your `service_role` key private
- Use `.env.local` for local development
- Use environment variables in production (Vercel, Netlify, etc.)
- Enable RLS on all tables

❌ **DON'T:**
- Commit `.env.local` to Git
- Share your service_role key publicly
- Use the anon key for admin operations
- Disable RLS without good reason

## Deploying to Production

When deploying to Vercel/Netlify:

1. Go to your hosting platform's dashboard
2. Find **"Environment Variables"** settings
3. Add these three variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Redeploy your site

## Need Help?

- **Supabase Docs**: https://supabase.com/docs
- **Supabase Discord**: https://discord.supabase.com
- **Next.js with Supabase**: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs

---

**That's it! Your CodeKar website is now connected to your own Supabase database! 🎉**

