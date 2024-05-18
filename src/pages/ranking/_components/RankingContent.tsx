import styled from 'styled-components';

interface RankingContentProps {
  name: string;
}

function RankingContent({ name }: RankingContentProps) {
  return (
    <RankingContentLayout>
      <RankingContentNum />
      <RankingContentName>{name}</RankingContentName>
    </RankingContentLayout>
  );
}

export default RankingContent;

const RankingContentLayout = styled.article`
  display: flex;
  align-items: center;
`;

const RankingContentNum = styled.div``;

const RankingContentName = styled.p``;
