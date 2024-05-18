import { RankingListProps, UserRank } from '@models/getRankingResponse';
import styled from 'styled-components';
import RankingContent from './RankingContent';

function RankingList({ rank }: RankingListProps) {
  return (
    <RankingListLayout>
      {rank?.map((one: UserRank, index: number) => (
        <RankingContent
          rank={index + 1} // 순위는 인덱스 + 1
          nickname={one.nickname}
          foodIslandCount={one.foodIslandCount}
          streak={one.streak}
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
