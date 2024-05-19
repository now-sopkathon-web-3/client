import RankingLogo from '@assets/ranking_logo.svg';
import styled from 'styled-components';
import RankingButton from './RankingButton';

interface RankingInfoProps {
  rank?: number;
  nickname?: string;
  foodIslandCount?: number;
  streak?: number;
}

function RankingInfo({ rank, nickname, foodIslandCount, streak }: RankingInfoProps) {
  return (
    <RankingInfoLayout>
      <RankingInfoContnet>
        <RankingInfoMy>
          <div>
            {nickname} 님은 지금, <RankSpan>{rank}</RankSpan> 위
          </div>
        </RankingInfoMy>
        <ButtonWrapper>
          <RankingButton title={`획득 메뉴  ${foodIslandCount}개`} colorType="green" />
          <RankingButton title={`연속 ${streak}일째`} colorType="yellow" />
        </ButtonWrapper>
      </RankingInfoContnet>
      <RankingLogoStyled />
    </RankingInfoLayout>
  );
}

export default RankingInfo;

const RankingLogoStyled = styled(RankingLogo)`
  /* margin-left: 1.1rem; */
`;
const RankingInfoLayout = styled.div`
  background-color: ${({ theme }) => theme.color.gray50};
  width: 34.5rem;
  height: 9.5rem;
  border-radius: 12px;
  margin-top: 7.6rem;
  padding-left: 1.5rem;
  display: flex;
  margin-left: 2rem;
`;

const RankingInfoContnet = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`;

const ButtonWrapper = styled.div`
  gap: 0.8rem;
  display: flex;
  margin-top: 0.9rem;
  justify-content: end;
`;

const RankingInfoMy = styled.h2`
  ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.color.gray900};
  flex-direction: row;
`;

const RankSpan = styled.span`
  ${({ theme }) => theme.fonts.number2};
`;
