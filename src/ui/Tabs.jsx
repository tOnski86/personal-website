import { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

  &.active {
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    color: var(--color-primary-light);
    background-color: var(--color-grey-3);
  }

  &:hover {
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    color: var(--color-primary-light);
  }
`;

const TabContentGroup = styled.div`
  padding: 2rem;
`;

const TabContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(10rem, 1fr));
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(24rem, 1fr));
  }

  @media (min-width: 1020px) {
    grid-template-columns: repeat(3, minmax(20rem, 1fr));
  }
`;

const TabsContext = createContext();

function Tabs({ children }) {
  const [tabName, setTabName] = useState('tab-1');

  return (
    <TabsContext.Provider value={{ tabName, setTabName }}>
      <StyledTabs>{children}</StyledTabs>
    </TabsContext.Provider>
  );
}

function TitleGroup({ children }) {
  return <TabTitleGroup>{children}</TabTitleGroup>;
}

function Title({ children, opens }) {
  const { tabName, setTabName } = useContext(TabsContext);

  return (
    <TabTitle
      onClick={() => setTabName(opens)}
      className={tabName === opens ? 'active' : ''}
    >
      {children}
    </TabTitle>
  );
}

function ContentGroup({ children }) {
  return <TabContentGroup>{children}</TabContentGroup>;
}

function Content({ children, name }) {
  const { tabName } = useContext(TabsContext);

  return <>{tabName === name && <TabContent>{children}</TabContent>}</>;
}

Tabs.TitleGroup = TitleGroup;
Tabs.Title = Title;
Tabs.ContentGroup = ContentGroup;
Tabs.Content = Content;

export default Tabs;
