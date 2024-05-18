import styled from 'styled-components';
import RankingButton from './RankingButton';

interface RankingContentProps {
  rank?: number;
  nickname?: string;
  foodIslandCount?: number;
  streak?: number;
}

function RankingContent({ rank, nickname, foodIslandCount, streak }: RankingContentProps) {
  return (
    <RankingContentLayout>
      <RankingContentNum>{rank}</RankingContentNum>
      <RankingContentName>{nickname}</RankingContentName>
      <ButtonWrapper>
        <RankingButton title={`획득 메뉴  ${foodIslandCount}개`} colorType="green" />
        <RankingButton title={`${streak}일째`} colorType="yellow" />
      </ButtonWrapper>
    </RankingContentLayout>
  );
}

export default RankingContent;

const RankingContentLayout = styled.div`
  display: flex;
  align-items: center;
  width: 33.5rem;
  height: 6.3rem;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray100};
`;

const RankingContentNum = styled.p`
  width: 3.3rem;
  ${({ theme }) => theme.fonts.number1};
  color: ${({ theme }) => theme.color.black};
  margin-left: 1rem;
`;

const RankingContentName = styled.p`
  width: 12.5rem;
  ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.color.black};
  margin-left: 0.8rem;
`;

const ButtonWrapper = styled.div`
  gap: 0.4rem;
  display: flex;
`;
