import styled from 'styled-components';
import { SiHtml5, SiJavascript, SiTailwindcss } from 'react-icons/si';
import { useReadProjects } from '../features/projects/useReadProjects';

import Tabs from '../ui/Tabs';
import Card from '../ui/Card';
import Spinner from '../ui/Spinner';
import ProjectCard from '../features/projects/ProjectCard';

const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-radius: 50rem;
  padding: 0.8rem;
  font-size: 1.4rem;
  color: var(--color-grey-1);
  border: var(--border-sm);
`;

const Loading = styled.div`
  height: ${`calc(100vh - 20rem)`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Projects() {
  const { isReadingProjects, projects } = useReadProjects();

  if (isReadingProjects)
    return (
      <Loading>
        <Spinner />
      </Loading>
    );

  return (
    <Tabs>
      <Tabs.TitleGroup>
        <Tabs.Title opens='tab-1'>All</Tabs.Title>
        <Tabs.Title opens='tab-2'>Web</Tabs.Title>
        <Tabs.Title opens='tab-3'>Content</Tabs.Title>
      </Tabs.TitleGroup>

      <Tabs.ContentGroup>
        <Tabs.Content name='tab-1'>
          {projects.map(project => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </Tabs.Content>

        <Tabs.Content name='tab-2'>
          {projects.map(
            project =>
              project.category === 'web-design' && (
                <ProjectCard project={project} key={project.id} />
              )
          )}
        </Tabs.Content>

        <Tabs.Content name='tab-3'>
          {projects.map(
            project =>
              project.category === 'content' && (
                <ProjectCard project={project} key={project.id} />
              )
          )}
        </Tabs.Content>
      </Tabs.ContentGroup>
    </Tabs>
  );
}

export default Projects;
