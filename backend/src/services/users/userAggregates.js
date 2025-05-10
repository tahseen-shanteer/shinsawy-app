import supabase from '../../config/supabase.js';

const countAllUsers = async () => {
  const { count, error } = await supabase.from('Users').select('*', { count : 'exact', head : true});
  if (error) throw error;
  return count;
};

export default {
  countAllUsers,
};