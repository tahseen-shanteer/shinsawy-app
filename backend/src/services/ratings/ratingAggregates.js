import supabase from "../../config/supabase.js";

const getAverageRatingByAttraction = async (attraction_id) => {
  const { data, error } = await supabase
    .from("Ratings")
    .eq("attraction_id", attraction_id)
    .select("avg_rating:rating.avg()");

  if (error) throw error;
  return data?.[0]?.avg_rating ?? null;
};

const getRatingCountByRating = async (rating) => {
  const { count, error } = await supabase
    .from("Ratings")
    .eq("rating", rating)
    .select("*", { count: "exact", head: true });

  if (error) throw error;
  return count ?? 0;
};

const getRatingCountByRatingLte = async (rating) => {
  const { count, error } = await supabase
    .from("Ratings")
    .lte("rating", rating)
    .select("*", { count: "exact", head: true });

  if (error) throw error;
  return count ?? 0;
};

const getRatingCountByRatingGte = async (rating) => {
  const { count, error } = await supabase
    .from("Ratings")
    .gte("rating", rating)
    .select("*", { count: "exact", head: true });

  if (error) throw error;
  return count ?? 0;
};

export default {
  getAverageRatingByAttraction,
  getRatingCountByRating,
  getRatingCountByRatingLte,
  getRatingCountByRatingGte,
};
