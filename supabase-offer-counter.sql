-- Run this ONCE in Supabase > SQL Editor > New query > Run.
-- It lets the public website read ONE number: how many students are confirmed.
-- Nothing else (names, mobiles, fees) is exposed.
-- To change the number of opening-offer seats, change 20 below and run it again.

create or replace function public.offer_status()
returns json
language sql
security definer
set search_path = public
stable
as $$
  select json_build_object(
    'filled', (select count(*) from public.bookings where status = 'approved'),
    'total', 20
  );
$$;

revoke all on function public.offer_status() from public;
grant execute on function public.offer_status() to anon, authenticated;
