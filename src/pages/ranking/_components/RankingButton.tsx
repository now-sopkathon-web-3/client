import styled from 'styled-components';

interface RankingButtonprops {
  title: string;
}

function RankingButton({ title }: RankingButtonprops) {
  return <RankingButtonLayout>{title}</RankingButtonLayout>;
}

export default RankingButton;

const RankingButtonLayout = styled.div`
  border-radius: 60px;
  height: 2.5rem;
  padding: 0.4rem 1rem;
  background-color: ${({ theme }) => theme.color.main};

  font-family: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.color.white};
`;
