import { useQuery } from '@tanstack/react-query';
import { readProjects as readProjectsApi } from '../../services/apiProjects';

export function useReadProjects() {
  const { isPending: isReadingProjects, data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: readProjectsApi,
  });

  return { isReadingProjects, projects };
}
