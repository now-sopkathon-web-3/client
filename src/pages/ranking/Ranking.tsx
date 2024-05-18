import styled from 'styled-components';
import RankingList from './_components/RankingList';
import AppBar from '@components/AppBar';
import RankingInfo from './_components/RankingInfo';

function Ranking() {
  return (
    <RankingLayout>
      <AppBar title="랭킹" />
      <RankingInfo rank={1} nickname="이채원" foodIslandCount={1} streak={2} />
      <RankingList />
    </RankingLayout>
  );
}

export default Ranking;

const RankingLayout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  //padding-left: 2rem;
`;
