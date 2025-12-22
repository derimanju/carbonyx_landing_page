-- Create the leads table (if it doesn't exist)
create table if not exists public.leads (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    company_name text not null,
    rep_name text not null,
    contact_email text not null,
    location text,
    capacity_kw text,
    privacy_agreed boolean default false,
    type text not null, -- 'seller' or 'buyer'
    annual_usage_mwh text,
    target_year text
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;

-- Create a policy to allow public inserts (for the contact form)
create policy "Allow public inserts"
    on public.leads
    for insert
    to public 
    with check (true);

-- (Optional) Create a policy to allow reading only by authenticated users
create policy "Allow read access for authenticated users only"
    on public.leads
    for select
    to authenticated
    using (true);
