import styled from 'styled-components';
import RankingContent from './_components/RankingContent';

function Ranking() {
  return (
    <RankingLayout>
      <RankingContent name="안녕" />
    </RankingLayout>
  );
}

export default Ranking;

const RankingLayout = styled.div`
  height: 100vh;
  width: 100vw;
`;
