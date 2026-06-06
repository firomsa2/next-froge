# Supabase Setup — Contact Form

The contact form inserts submissions into a Supabase table called
`contact_messages` directly from the browser, using the **public anon key**
plus a **Row-Level-Security (RLS) INSERT policy**. No secret keys live in the
frontend, and the anon key cannot read or delete rows — it can only insert.

Follow these 4 steps.

---

## 1. Create the table + RLS policy

In your Supabase project, open **SQL Editor → New query**, paste this, and click **Run**:

```sql
-- 1. Table for contact submissions
create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  service     text,
  budget      text,
  message     text not null,
  created_at  timestamptz not null default now()
);

-- 2. Turn on Row Level Security (blocks everything by default)
alter table public.contact_messages enable row level security;

-- 3. Allow the public (anon) role to INSERT only — no select/update/delete.
create policy "Anyone can submit a contact message"
  on public.contact_messages
  for insert
  to anon
  with check (true);
```

> **Why this is safe:** RLS is enabled and only an INSERT policy exists for
> `anon`. The anon key therefore *cannot* read other people's submissions,
> edit them, or delete them — it can only add new rows. You read submissions
> from the Supabase dashboard (or with the service role on a server), never
> from the browser.

### Optional: basic spam hardening
Add a length guard so junk rows are rejected at the database:

```sql
create policy "Validate contact message"
  on public.contact_messages
  for insert
  to anon
  with check (
    char_length(name) between 2 and 120
    and char_length(message) between 10 and 5000
    and position('@' in email) > 1
  );
```
(If you add this, drop the simpler `with check (true)` policy so they don't conflict.)

---

## 2. Get your API keys

Supabase Dashboard → **Project Settings → API**. Copy:

- **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
- **Project API keys → `anon` `public`** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

These two are designed to be public and exposed in the browser.

---

## 3. Add them to `.env.local`

A `.env.local` file already exists in the project root with empty values.
Fill it in:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...your-anon-key...
```

(`.env.local` is gitignored, so your keys won't be committed.
`.env.local.example` is the committed template.)

---

## 4. Restart the dev server

Env vars are read at startup, so after editing `.env.local`:

```bash
# stop the server (Ctrl+C) then:
npm run dev
```

Submit the form — you should see the "Message Sent!" success state, and a new
row in **Table Editor → contact_messages**.

---

## Reading / getting notified of submissions

- **View:** Dashboard → **Table Editor → contact_messages**.
- **Email alerts (optional):** Dashboard → **Database → Webhooks**, or a
  Supabase **Edge Function** triggered on insert, to forward each new row to
  your email / Slack / Telegram.

## Troubleshooting

| Symptom | Fix |
|---|---|
| "isn't connected yet" message | One of the two env vars is empty, or you didn't restart `npm run dev`. |
| `new row violates row-level security policy` | The INSERT policy wasn't created, or RLS is on with no matching policy. Re-run step 1. |
| `relation "contact_messages" does not exist` | Table wasn't created — re-run the `create table` block. |
| Works locally, not in production | Add the same two `NEXT_PUBLIC_*` vars to your host (e.g. Vercel → Project → Settings → Environment Variables) and redeploy. |

## How it's wired in code
- Client: [`src/lib/supabase.ts`](src/lib/supabase.ts) — creates the browser client from the env vars.
- Form: [`src/components/sections/Contact.tsx`](src/components/sections/Contact.tsx) — `onSubmit` inserts into `contact_messages` and shows success or an error.
