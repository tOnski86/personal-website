import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qqtdkhcbbxphhbegufad.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxdGRraGNiYnhwaGhiZWd1ZmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NzMwMzUsImV4cCI6MjA1MDA0OTAzNX0.CNih7aH8c6-5c7OyjwJQRfkvlpeU2YgvqOMrobjiQ4Q';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
