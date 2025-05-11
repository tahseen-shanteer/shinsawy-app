import supabase from "../../config/supabase.js";

const getAllAttractions = async () => {
  const { data, count, error } = await supabase
    .from("Attractions")
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getAttractionById = async (id) => {
  const { data, error } = await supabase
    .from("Attractions")
    .eq("id", id)
    .select("*")
    .single();

  if (error) throw error;
  return data;
};

const getAttractionsByCategory = async (categoryId) => {
  const { data, count, error } = await supabase
    .from("Attractions")
    .eq("category_id", categoryId)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getAttractionByBusinessOwner = async (business_owner_id) => {
  const { data, count, error } = await supabase
    .from("Attractions")
    .eq("business_owner_id", business_owner_id)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getAttractionsByPartial = async (partial) => {
  const { data, count, error } = await supabase
    .from("Attractions")
    .or(`name.ilike.%${partial}%,description.ilike.%${partial}%`)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const createAttraction = async (attractionData) => {
  const { data, error } = await supabase
    .from("Attractions")
    .insert(attractionData)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateAttraction = async (id, updateData) => {
  const { data, error } = await supabase
    .from("Attractions")
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteAttraction = async (id) => {
  const { data, error } = await supabase
    .from("Attractions")
    .delete()
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export default {
  getAllAttractions,
  getAttractionById,
  getAttractionsByCategory,
  getAttractionByBusinessOwner,
  getAttractionsByPartial,
  createAttraction,
  updateAttraction,
  deleteAttraction,
};
