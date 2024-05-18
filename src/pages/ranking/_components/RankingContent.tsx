import styled from 'styled-components';
import { RANKING_DATA } from '../_constants/rankingData';
import RankingButton from './RankingButton';

interface RankingContentProps {
  id: number;
  name: string;
  islandNum: number;
  date: number;
}

function RankingContent({ id, name, islandNum, date }: RankingContentProps) {
  return (
    <RankingContentLayout>
      <RankingContentNum>{id}</RankingContentNum>
      <RankingContentName>{name}</RankingContentName>
      <RankingContentIslandNum>섬 {islandNum}개</RankingContentIslandNum>
      <RankingContentDate>{date}일째</RankingContentDate>
    </RankingContentLayout>
  );
}

export default RankingContent;

const RankingContentLayout = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  background-color: ${({ theme }) => theme.color.gray200};
`;

const RankingContentNum = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.gray600};
`;

const RankingContentName = styled.p``;

const RankingContentIslandNum = styled.p``;

const RankingContentDate = styled.p``;
