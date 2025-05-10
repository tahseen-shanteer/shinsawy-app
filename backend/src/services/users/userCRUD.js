import supabase from '../../config/supabase.js';

const getAllUsers = async () => {
  const { data, error } = await supabase.from('Users').select('*');
  if (error) throw error;
  return data;
};

const getUserById = async (id) => {
  const { data, error } = await supabase.from('Users').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};

const getUserByEmail = async (email) => {
  const { data, error } = await supabase.from('Users').select('*').eq('email', email).single();
  if (error) throw error;
  return data;
};

const getUserByUsername = async (username) => {
  const { data, error } = await supabase.from('Users').select('*').eq('username', username).single();
  if (error) throw error;
  return data;
};

const getUserByPartial = async (partial) => {
  const { data, error } = await supabase.from('Users').select('*').or(`username.ilike.%${partial}%,full_name.ilike.%${partial}%`);
  if (error) throw error;
  return data;
};

const createUser = async (userData) => {
  const { data, error } = await supabase.from('Users').insert(userData).select().single();
  if (error) throw error;
  return data;
};

const updateUser = async (id, updateData) => {
  const { data, error } = await supabase
    .from('Users')
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteUser = async (id) => {
  const { data, error } = await supabase.from('Users').delete().eq('id', id).select().single();
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
