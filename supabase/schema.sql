create table public.chat_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid()
    references auth.users(id) on delete cascade,
  prompt text not null,
  response text,
  created_at timestamptz default now()
);

alter table public.chat_history enable row level security;

create policy "baca data sendiri" on public.chat_history
  for select using (auth.uid() = user_id);
create policy "tambah data sendiri" on public.chat_history
  for insert with check (auth.uid() = user_id);
