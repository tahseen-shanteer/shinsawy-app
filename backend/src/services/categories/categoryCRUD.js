import supabase from '../../config/supabase.js';

const getAllCategories = async () => {
  const { data, error } = await supabase.from('Categories').select('*');
  if (error) throw error;
  return data;
};

const getCategoryById = async (id) => {
  const { data, error } = await supabase.from('Categories').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};

const getCategoryByName = async (name) => {
  const { data, error } = await supabase.from('Categories').select('*').eq('name', name).single();
  if (error) throw error;
  return data;
};

const getCategoryByPartial = async (partial) => {
  const { data, error } = await supabase.from('Categories').select('*').ilike('name', `%${partial}%`);
  if (error) throw error;
  return data;
};

const createCategory = async (categoryData) => {
  const { data, error } = await supabase.from('Categories').insert(categoryData).select().single();
  if (error) throw error;
  return data;
};

const updateCategory = async (id, updateData) => {
  const { data, error } = await supabase
    .from('Categories')
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteCategory = async (id) => {
  const { data, error } = await supabase.from('Categories').delete().eq('id', id).select().single();
  if (error) throw error;
  return data;
};

export default {
  getAllCategories,
  getCategoryById,
  getCategoryByName,
  getCategoryByPartial,
  createCategory,
  updateCategory,
  deleteCategory,
};