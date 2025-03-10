import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ztejiskorcvozaqbzcvi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0ZWppc2tvcmN2b3phcWJ6Y3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwODMyOTYsImV4cCI6MjA1NjY1OTI5Nn0.YhLoITcrkWJ2U3qT3Wy-RhRl-z_CPtBeSQNEGjrEcBM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
