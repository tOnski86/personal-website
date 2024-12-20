import styled from 'styled-components';

const StyledBackgroundLayout = styled.div`
  background-image: url('bg-grunge.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

function BackgroundLayout({ children }) {
  return <StyledBackgroundLayout>{children}</StyledBackgroundLayout>;
}

export default BackgroundLayout;
