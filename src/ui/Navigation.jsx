import styled from 'styled-components';

const StyledUl = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const StyledLi = styled.li`
  list-style: none;
`;

function Navigation() {
  return (
    <nav>
      <StyledUl>
        <StyledLi>About Me</StyledLi>
        <StyledLi>Portfolio</StyledLi>
        <StyledLi>Proficiencies</StyledLi>
        <StyledLi>Work Experience</StyledLi>
      </StyledUl>
    </nav>
  );
}

export default Navigation;
