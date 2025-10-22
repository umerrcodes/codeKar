-- Alter registrations table to add profession and attendance columns
alter table public.registrations
add column profession text,
add column attendance text;

-- Recreate the update policy to include the new columns
drop policy if exists "Allow service role to update registrations" on public.registrations;

create policy "Allow service role to update registrations"
    on public.registrations
    for update
    to service_role
    using (true)
    with check (true); 