import supabase from "../../config/supabase.js";

const getAllVisits = async () => {
  const { data, count, error } = await supabase
    .from("Visits")
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getVisitById = async (id) => {
  const { data, error } = await supabase
    .from("Visits")
    .eq("id", id)
    .select("*")
    .single();

  if (error) throw error;
  return data;
};

const getVisitsByUser = async (user_id) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("user_id", user_id)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getVisitsByAttraction = async (attraction_id) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("attraction_id", attraction_id)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getAttractionVisitsByUser = async (user_id, attraction_id) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("user_id", user_id)
    .eq("attraction_id", attraction_id)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const createVisit = async (visitData) => {
  const { data, error } = await supabase
    .from("Visits")
    .insert(visitData)
    .select()
    .single();

  if (error) throw error;
  return data;
};

const updateVisit = async (id, updateData) => {
  const { data, error } = await supabase
    .from("Visits")
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

const deleteVisit = async (id) => {
  const { data, error } = await supabase
    .from("Visits")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export default {
  getAllVisits,
  getVisitById,
  getVisitsByUser,
  getVisitsByAttraction,
  getAttractionVisitsByUser,
  createVisit,
  updateVisit,
  deleteVisit,
};
