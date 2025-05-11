import supabase from "../../config/supabase.js";

const getAverageRatingByAttraction = async (attraction_id) => {
  const { data, error } = await supabase.rpc("get_avg_rating_by_attraction", {
    attraction_id: attraction_id,
  });

  if (error) throw error;
  return data;
};

const getAttractionIndividualRatingCount = async (attraction_id, rating) => {
  const { data, error } = await supabase.rpc(
    "get_attraction_individual_rating_count",
    {
      attraction_id: attraction_id,
      rating: rating,
    }
  );

  if (error) throw error;
  return data;
};
