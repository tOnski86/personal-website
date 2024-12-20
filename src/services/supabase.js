import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.APP_SUPABASE_URL,
  import.meta.env.APP_SUPABASE_KEY
);

export default supabase;
