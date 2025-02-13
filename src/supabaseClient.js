import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wmyuubddrgxkdnnptbgu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndteXV1YmRkcmd4a2RubnB0Ymd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0ODY0NDQsImV4cCI6MjA1NTA2MjQ0NH0.Uf0p_NxB2JkKpkxPv9rTN-hPVW7toiWY5J27U_SOTN8';

export const supabase = createClient(supabaseUrl, supabaseKey);
