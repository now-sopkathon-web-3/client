import styled from 'styled-components';
import Router from './Router';

function App() {
  return (
    <MobileContainer>
      <MaxWidthWrapper>
        <Router />
      </MaxWidthWrapper>
    </MobileContainer>
  );
}

export default App;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MaxWidthWrapper = styled.div`
  width: 37.5rem;
`;
