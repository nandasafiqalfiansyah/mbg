-- PanenLangsung initial migration
-- Scope: katalog produk, profil pengguna, dan audit login.

create extension if not exists "pgcrypto";

create table if not exists public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  role text not null default 'consumer' check (role in ('admin', 'farmer', 'consumer')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.catalog_items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  price numeric(12, 2) not null check (price >= 0),
  unit text not null,
  stock text not null,
  location text not null,
  harvest text not null,
  farmer text not null,
  rating numeric(2, 1) not null check (rating >= 0 and rating <= 5),
  image_key text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.login_activity (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete set null,
  email text,
  login_method text not null default 'password' check (login_method in ('password', 'google', 'local')),
  status text not null default 'success' check (status in ('success', 'failed')),
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists idx_catalog_items_active on public.catalog_items(is_active);
create index if not exists idx_catalog_items_category on public.catalog_items(category);
create index if not exists idx_login_activity_created_at on public.login_activity(created_at desc);

alter table public.user_profiles enable row level security;
alter table public.catalog_items enable row level security;
alter table public.login_activity enable row level security;

drop policy if exists "Users can read own profile" on public.user_profiles;
create policy "Users can read own profile"
  on public.user_profiles
  for select
  using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.user_profiles;
create policy "Users can update own profile"
  on public.user_profiles
  for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

drop policy if exists "Public can read active catalog" on public.catalog_items;
create policy "Public can read active catalog"
  on public.catalog_items
  for select
  using (is_active = true);

drop policy if exists "Authenticated can insert login activity" on public.login_activity;
create policy "Authenticated can insert login activity"
  on public.login_activity
  for insert
  to authenticated
  with check (true);

create or replace function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.user_profiles (id, full_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce(new.raw_user_meta_data->>'role', 'consumer')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;

create trigger on_auth_user_created_profile
  after insert on auth.users
  for each row execute procedure public.handle_new_user_profile();
