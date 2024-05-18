import styled from 'styled-components';
import RankingList from './_components/RankingList';
import AppBar from '@components/AppBar';

function Ranking() {
  return (
    <RankingLayout>
      <AppBar title="랭킹" />
      <RankingList />
    </RankingLayout>
  );
}

export default Ranking;

const RankingLayout = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: beige;
`;
