import supabase from "../../config/supabase.js";

const getAllUsers = async () => {
  const { data, count, error } = await supabase
    .from("Users")
    .select("*", { count: "exact" });
  if (error) throw error;
  return { data, count };
};

const getUserById = async (id) => {
  const { data, error } = await supabase
    .from("Users")
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw error;
  return data;
};

const getUserByEmail = async (email) => {
  const { data, error } = await supabase
    .from("Users")
    .eq("email", email)
    .select("*")
    .single();
  if (error) throw error;
  return data;
};

const getUserByUsername = async (username) => {
  const { data, error } = await supabase
    .from("Users")
    .eq("username", username)
    .select("*")
    .single();
  if (error) throw error;
  return data;
};

const getUserByPartial = async (partial) => {
  const { data, count, error } = await supabase
    .from("Users")
    .or(`username.ilike.%${partial}%,full_name.ilike.%${partial}%`)
    .select("*", { count: "exact" });
  if (error) throw error;
  return { data, count };
};

const createUser = async (userData) => {
  const { data, error } = await supabase
    .from("Users")
    .insert(userData)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateUser = async (id, updateData) => {
  const { data, error } = await supabase
    .from("Users")
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteUser = async (id) => {
  const { data, error } = await supabase
    .from("Users")
    .delete()
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export default {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserByUsername,
  getUserByPartial,
  createUser,
  updateUser,
  deleteUser,
};
