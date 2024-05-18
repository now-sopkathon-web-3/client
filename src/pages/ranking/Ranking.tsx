import styled from 'styled-components';
import RankingContent from './_components/RankingContent';

function Ranking() {
  return (
    <RankingLayout>
      <RankingContent name="이채원" islandNum={1} date={11} />
    </RankingLayout>
  );
}

export default Ranking;

const RankingLayout = styled.div`
  height: 100vh;
  width: 100vw;
`;
