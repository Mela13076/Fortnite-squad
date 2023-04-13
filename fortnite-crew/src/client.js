import { createClient } from '@supabase/supabase-js'
const URL = 'https://surifelenwkqzhesddjy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cmlmZWxlbndrcXpoZXNkZGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzNDkyNjgsImV4cCI6MTk5NjkyNTI2OH0.M8kuV7icFcwUoFZbmojNlad_WuaXxyrkxR4j3VD9QbQ';

export const supabase = createClient(URL, API_KEY);