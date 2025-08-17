import { createClient } from '@supabase/supabase-js';

// Obtiene las variables de entorno de forma segura en Astro
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Crea y exporta el cliente de Supabase para ser usado en el proyecto
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
