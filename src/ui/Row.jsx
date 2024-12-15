import styled from 'styled-components';

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(
      ${props => props.$columns},
      minmax(auto, 1fr)
    );
  }
`;

function Row({ children, columns }) {
  return <StyledRow $columns={columns}>{children}</StyledRow>;
}

export default Row;
