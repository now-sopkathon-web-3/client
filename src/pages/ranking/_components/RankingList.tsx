import styled from 'styled-components';
import RankingContent from './RankingContent';
import { RANKING_DATA } from '../_constants/rankingData';

function RankingList() {
  return (
    <RankingListLayout>
      {RANKING_DATA.map((data, index) => (
        <RankingContent key={data.id} id={index + 1} name={data.name} islandNum={data.island} date={data.date} />
      ))}
    </RankingListLayout>
  );
}

export default RankingList;

const RankingListLayout = styled.div`
  max-height: 18rem;
  overflow-y: auto;
`;
