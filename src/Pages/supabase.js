import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://fyitjrqdacpgpoehmrfn.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5aXRqcnFkYWNwZ3BvZWhtcmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxNDUyMTAsImV4cCI6MjEwNTcyMTIxMH0.EHa1IEnDniSB1y_bDpZq2ycI64pqukv8Y_DpGz-aLVg';

const supabaseClient = createClient(supabaseURL, supabaseKey);