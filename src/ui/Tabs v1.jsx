import styled from 'styled-components';

import Heading from './Heading';
import Card from './Card';

const StyledTabs = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

const TabTitleGroup = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: var(--border-sm);
`;

const TabTitle = styled.button`
  padding: 1.2rem 3rem;
  border: none;
  font-weight: 500;
  background-color: transparent;
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    color: var(--color-primary-light);
    background-color: var(--color-grey-3);
  }
`;

const TabContentGroup = styled.div`
  padding: 2rem;
`;

const TabContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(24rem, 1fr));
  }

  @media (min-width: 1020px) {
    grid-template-columns: repeat(3, minmax(20rem, 1fr));
  }
`;

function Tabs() {
  return (
    <StyledTabs>
      <TabTitleGroup>
        <TabTitle opens='tab-1'>Web Design</TabTitle>
        <TabTitle opens='tab-2'>Content</TabTitle>
      </TabTitleGroup>

      <TabContentGroup>
        <TabContent name='tab-1'>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus id harum fugiat unde est, pariatur corrupti quaerat
              expedita necessitatibus? Numquam saepe natus alias nesciunt
              voluptas sint eum sed quaerat autem!
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex
              recusandae eaque autem cupiditate est. Aliquam eum tempora, saepe
              asperiores, laborum maxime, eos iure odio nesciunt provident illum
              aut? Nostrum.
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium ex placeat similique error eveniet animi sequi aliquid
              repellat.
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis maxime, ex quae vero expedita fugit soluta nemo
              quaerat similique rem?
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              aspernatur beatae repellat veniam debitis ea dignissimos est. Ut
              rerum esse aliquam facere aut voluptatum vitae.
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium dolor eligendi magni sed dolorem! Odio suscipit ab
              nesciunt dolores quibusdam rem cum dolor.
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus id harum fugiat unde est, pariatur corrupti quaerat
              expedita necessitatibus?
            </p>
          </Card>
        </TabContent>
      </TabContentGroup>
    </StyledTabs>
  );
}

export default Tabs;
