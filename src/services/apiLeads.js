import supabase from './supabase';

export async function insertLead(newLead) {
  console.log(newLead);

  const { data, error: insertError } = await supabase
    .from('leads')
    .insert([newLead])
    .select();

  if (insertError) throw new Error('Lead cannot be inserted');

  return data;
}
