import supabase from "../../config/supabase.js";

const getVisitsByDate = async (visit_date) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("visit_date", visit_date)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getVisitsBeforeDate = async (date) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .lt("visit_date", date)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getVisitsAfterDate = async (date) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .gt("visit_date", date)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getVisitsInRange = async (startDate, endDate) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .gte("visit_date", startDate)
    .lte("visit_date", endDate)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getVisitsByUserBeforeDate = async (user_id, beforeDate) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("user_id", user_id)
    .lt("visit_date", beforeDate)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getVisitsByUserAfterDate = async (user_id, afterDate) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("user_id", user_id)
    .gt("visit_date", afterDate)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getVisitsByUserInRange = async (user_id, startDate, endDate) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("user_id", user_id)
    .gte("visit_date", startDate)
    .lte("visit_date", endDate)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getVisitsByAttractionBeforeDate = async (attraction_id, beforeDate) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("attraction_id", attraction_id)
    .lt("visit_date", beforeDate)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getVisitsByAttractionAfterDate = async (attraction_id, afterDate) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("attraction_id", attraction_id)
    .gt("visit_date", afterDate)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getVisitsByAttractionInRange = async (attraction_id, startDate, endDate) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("attraction_id", attraction_id)
    .gte("visit_date", startDate)
    .lte("visit_date", endDate)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getAttractionVisitsByUserBeforeDate = async (user_id, attraction_id, beforeDate) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("user_id", user_id)
    .eq("attraction_id", attraction_id)
    .lt("visit_date", beforeDate)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getAttractionVisitsByUserAfterDate = async (user_id, attraction_id, afterDate) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("user_id", user_id)
    .eq("attraction_id", attraction_id)
    .gt("visit_date", afterDate)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

const getAttractionVisitsByUserInRange = async (user_id, attraction_id, startDate, endDate) => {
  const { data, count, error } = await supabase
    .from("Visits")
    .eq("user_id", user_id)
    .eq("attraction_id", attraction_id)
    .gte("visit_date", startDate)
    .lte("visit_date", endDate)
    .select("*", { count: "exact" });

  if (error) throw error;
  return { data, count };
};

export default {
  getVisitsByDate,
  getVisitsAfterDate,
  getVisitsBeforeDate,
  getVisitsInRange,
  getVisitsByUserBeforeDate,
  getVisitsByUserAfterDate,
  getVisitsByUserInRange,
  getVisitsByAttractionBeforeDate,
  getVisitsByAttractionAfterDate,
  getVisitsByAttractionInRange,
  getAttractionVisitsByUserBeforeDate,
  getAttractionVisitsByUserAfterDate,
  getAttractionVisitsByUserInRange,
}
