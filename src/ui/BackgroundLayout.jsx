import styled from 'styled-components';

const StyledBackgroundLayout = styled.div`
  min-height: 100vh;
  background-image: url('bg-grunge.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function BackgroundLayout({ children }) {
  return <StyledBackgroundLayout>{children}</StyledBackgroundLayout>;
}

export default BackgroundLayout;
