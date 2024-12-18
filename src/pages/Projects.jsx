import styled from 'styled-components';
import { SiHtml5, SiJavascript, SiTailwindcss } from 'react-icons/si';
import { useReadProjects } from '../features/projects/useReadProjects';

import Tabs from '../ui/Tabs';
import Card from '../ui/Card';
import Heading from '../ui/Heading';

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

function Projects() {
  const { isReadingProjects, readProjects } = useReadProjects();

  return (
    <Tabs>
      <Tabs.TitleGroup>
        <Tabs.Title opens='tab-1'>Web Design</Tabs.Title>
        <Tabs.Title opens='tab-2'>Content</Tabs.Title>
      </Tabs.TitleGroup>

      <Tabs.ContentGroup>
        <Tabs.Content name='tab-1'>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <HeadingGroup>
              <Tags>
                <Tag>
                  <SiHtml5 />
                </Tag>
                <Tag>
                  <SiTailwindcss />
                </Tag>
                <Tag>
                  <SiJavascript />
                </Tag>
              </Tags>
              <Heading as='h3'>Project Name</Heading>
            </HeadingGroup>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus id harum fugiat unde est, pariatur corrupti quaerat
              expedita necessitatibus? Numquam saepe natus alias nesciunt
              voluptas sint eum sed quaerat autem!
            </p>
          </Card>
        </Tabs.Content>

        <Tabs.Content name='tab-2'>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <HeadingGroup>
              <Tags>
                <Tag>
                  <SiHtml5 />
                </Tag>
                <Tag>
                  <SiTailwindcss />
                </Tag>
                <Tag>
                  <SiJavascript />
                </Tag>
              </Tags>
              <Heading as='h3'>Project Name</Heading>
            </HeadingGroup>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus id harum fugiat unde est, pariatur corrupti quaerat
              expedita necessitatibus? Numquam saepe natus alias nesciunt
              voluptas sint eum sed quaerat autem!
            </p>
          </Card>
        </Tabs.Content>
      </Tabs.ContentGroup>
    </Tabs>
  );
}

export default Projects;
