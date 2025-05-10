import supabase from '../../config/supabase.js';

const getAllAttractions = async () => {
  const { data, error } = await supabase.from('Attractions').select('*');
  if (error) throw error;
  return data;
};

const getAttractionById = async (id) => {
  const { data, error } = await supabase.from('Attractions').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};

const getAttractionsByCategory = async (categoryId) => {
  const { data, error } = await supabase.from('Attractions').select('*').eq('category_id', categoryId);
  if (error) throw error;
  return data;
};

const getAttractionsByPartial = async (partial) => {
  const { data, error } = await supabase
    .from('Attractions')
    .select('*')
    .or(`name.ilike.%${partial}%,description.ilike.%${partial}%`);
  if (error) throw error;
  return data;
};

const createAttraction = async (attractionData) => {
  const { data, error } = await supabase.from('Attractions').insert(attractionData).select().single();
  if (error) throw error;
  return data;
};

const updateAttraction = async (id, updateData) => {
  const { data, error } = await supabase
    .from('Attractions')
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteAttraction = async (id) => {
  const { data, error } = await supabase.from('Attractions').delete().eq('id', id).select().single();
  if (error) throw error;
  return data;
};

export default {
  getAllAttractions,
  getAttractionById,
  getAttractionsByCategory,
  getAttractionsByPartial,
  createAttraction,
  updateAttraction,
  deleteAttraction,
};
