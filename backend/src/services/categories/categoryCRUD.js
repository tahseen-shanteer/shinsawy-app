import supabase from "../../config/supabase.js";

const getAllCategories = async () => {
  const { data, count, error } = await supabase
    .from("Categories")
    .select("*", { count: "exact" });
  if (error) throw error;
  return { data, count };
};

const getCategoryById = async (id) => {
  const { data, error } = await supabase
    .from("Categories")
    .eq("id", id)
    .select("*")
    .single(); // No count needed for single-row fetch
  if (error) throw error;
  return data;
};

const getCategoryByName = async (name) => {
  const { data, error } = await supabase
    .from("Categories")
    .eq("name", name)
    .select("*")
    .single(); // Also returns a single row
  if (error) throw error;
  return data;
};

const getCategoryByPartial = async (partial) => {
  const { data, count, error } = await supabase
    .from("Categories")
    .ilike("name", `%${partial}%`)
    .select("*", { count: "exact" });
  if (error) throw error;
  return { data, count };
};

const createCategory = async (categoryData) => {
  const { data, error } = await supabase
    .from("Categories")
    .insert(categoryData)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateCategory = async (id, updateData) => {
  const { data, error } = await supabase
    .from("Categories")
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteCategory = async (id) => {
  const { data, error } = await supabase
    .from("Categories")
    .delete()
    .eq("id", id)
    .select()
    .single();
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
