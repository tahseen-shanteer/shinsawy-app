import dotenv from "dotenv";

dotenv.config(); // Loads .env file into process.env

// Destructure and validate critical variables
const { SUPABASE_URL, SUPABASE_ANON_KEY, NODE_ENV, PORT } = process.env;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Missing Supabase configuration in environment variables.");
}

export default {
  supabaseUrl: SUPABASE_URL,
  supabaseKey: SUPABASE_KEY,
  nodeEnv: NODE_ENV || "development",
  port: PORT || 3000,
};
