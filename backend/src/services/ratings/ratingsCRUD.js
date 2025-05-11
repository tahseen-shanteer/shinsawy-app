import supabase from "../../config/supabase.js";

const getAllRatings = async () => {
  const { data, count, error } = await supabase
    .from("Ratings")
    .select("*", { count: "exact" });
  if (error) throw error;
  return { data, count };
};

const getRatingById = async (id) => {
  const { data, error } = await supabase
    .from("Ratings")
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw error;
  return data;
};

const getRatingsByAttraction = async (attraction_id) => {
  const { data, count, error } = await supabase
    .from("Ratings")
    .eq("attraction_id", attraction_id)
    .select("*", { count: "exact" });
  if (error) throw error;
  return { data, count };
};

const getAttractionRatingByUser = async (user_id, attraction_id) => {
  const { data, error } = await supabase
    .from("Ratings")
    .eq("user_id", user_id)
    .eq("attraction_id", attraction_id)
    .select("*")
    .single();
  if (error) throw error;
  return data;
};

const getRatingsByUser = async (user_id) => {
  const { data, count, error } = await supabase
    .from("Ratings")
    .eq("user_id", user_id)
    .select("*", { count: "exact" });
  if (error) throw error;
  return { data, count };
};

const createRating = async (ratingData) => {
  const { data, error } = await supabase
    .from("Ratings")
    .insert(ratingData)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const updateRating = async (id, updateData) => {
  const { data, error } = await supabase
    .from("Ratings")
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteRating = async (id) => {
  const { data, error } = await supabase
    .from("Ratings")
    .delete()
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export default {
  getAllRatings,
  getRatingById,
  getRatingsByAttraction,
  getAttractionRatingByUser,
  getRatingsByUser,
  createRating,
  updateRating,
  deleteRating,
  getAverageRatingByAttraction,
};
