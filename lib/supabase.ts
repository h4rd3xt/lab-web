import { createClient } from "@supabase/supabase-js";

// Cliente único para toda la app. Usa la clave publishable (pública):
// todo lo que haga pasará por el portero RLS.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);