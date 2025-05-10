import supabase from '../../config/supabase.js';

const countAllAttractions = async () => {
  const { count, error } = await supabase.from('Attractions').select('*', { count : 'exact', head : true});
  if (error) throw error;
  return count;
};

const countAttractionsByCategory = async (category_id) => {
  const { count, error } = await supabase.from('Attractions').eq('category_id', category_id).select('*', { count : 'exact', head : true});
  if (error) throw error;
  return count;
};

export default {
    countAllAttractions,
    countAttractionsByCategory,
};