import styled from 'styled-components';

interface RankingContentProps {
  name: string;
  islandNum: number;
  date: number;
}

function RankingContent({ name, islandNum, date }: RankingContentProps) {
  return (
    <RankingContentLayout>
      <RankingContentNum />
      <RankingContentName>{name}</RankingContentName>
      <RankingContentIslandNum>섬 {islandNum}개</RankingContentIslandNum>
      <RankingContentDate>{date}일째</RankingContentDate>
    </RankingContentLayout>
  );
}

export default RankingContent;

const RankingContentLayout = styled.article`
  display: flex;
  align-items: center;
  height: 5rem;
  background-color: ${({ theme }) => theme.color.gray200};
`;

const RankingContentNum = styled.div``;

const RankingContentName = styled.p``;

const RankingContentIslandNum = styled.p``;

const RankingContentDate = styled.p``;
