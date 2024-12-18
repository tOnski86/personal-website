import supabase from './supabase';

export async function readProjects() {
  let { data: projects, error: readError } = await supabase
    .from('projects')
    .select('*')
    .order('category', { ascending: true })
    .order('created_at', { ascending: false });

  if (readError) throw new Error('Something went wrong');

  return projects;
}
