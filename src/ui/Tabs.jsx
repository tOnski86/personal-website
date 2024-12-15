import styled from 'styled-components';

const TabTitleGroup = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: var(--border-sm);
`;

const TabTitle = styled.button`
  padding: 1.2rem 4rem;
  border: none;
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

function Tabs() {
  return (
    <TabTitleGroup>
      <TabTitle>App Development</TabTitle>
      <TabTitle>Frontend Design</TabTitle>
      <TabTitle>Content and Design</TabTitle>
    </TabTitleGroup>
  );
}

export default Tabs;
