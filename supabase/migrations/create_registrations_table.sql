-- Create registrations table
create table public.registrations (
    id uuid default gen_random_uuid() primary key,
    full_name text not null,
    email text not null,
    whatsapp_number text not null,
    cohort_date text not null,
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