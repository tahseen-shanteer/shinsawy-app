import supabase from "../../config/supabase.js";

const getAllAttractionImages = async () => {
  const { data, count, error } = await supabase
    .from("Attraction Images")
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getAttractionImageById = async (id) => {
  const { data, error } = await supabase
    .from("Attraction Images")
    .eq("id", id)
    .select("*")
    .single();

  if (error) throw error;
  return data;
};

const getAttractionImagesByAttraction = async (attraction_id) => {
  const { data, count, error } = await supabase
    .from("Attraction Images")
    .eq("attraction_id", attraction_id)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getMainImageByAttraction = async (attraction_id) => {
  const { data, error } = await supabase
    .from("Attraction Images")
    .eq("attraction_id", attraction_id)
    .eq("is_main", true)
    .select("*")
    .single();

  if (error) throw error;
  return data;
};

const createAttractionImage = async (imageData) => {
  const { data, error } = await supabase
    .from("Attraction Images")
    .insert(imageData)
    .select()
    .single();

  if (error) throw error;
  return data;
};

const updateAttractionImage = async (id, updateData) => {
  const { data, error } = await supabase
    .from("Attraction Images")
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

const deleteAttractionImage = async (id) => {
  const { data, error } = await supabase
    .from("Attraction Images")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export default {
  getAllAttractionImages,
  getAttractionImageById,
  getAttractionImagesByAttraction,
  getMainImageByAttraction,
  createAttractionImage,
  updateAttractionImage,
  deleteAttractionImage,
};
