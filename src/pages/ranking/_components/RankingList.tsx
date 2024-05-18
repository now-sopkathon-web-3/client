import styled from 'styled-components';
import RankingContent from './RankingContent';
import { RANKING_DATA } from '../_constants/rankingData';

function RankingList() {
  return (
    <RankingListLayout>
      {RANKING_DATA.map((data, index) => (
        <RankingContent
          rank={index + 1} // 순위는 인덱스 + 1
          nickname={data.nickname}
          foodIslandCount={data.foodIslandCount}
          streak={data.streak}
        />
      ))}
    </RankingListLayout>
  );
}

export default RankingList;

const RankingListLayout = styled.div`
  overflow-y: auto;
  //max-width: 56.7rem;
  margin-top: 0.6rem;
  width: 33.5rem;
  overflow-y: auto;
  margin-bottom: 2.4rem;
  margin-left: 2rem;
`;
