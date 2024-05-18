import styled, { css } from 'styled-components';

interface RankingButtonProps {
  title: string;
  colorType: 'yellow' | 'green';
}

function RankingButton({ title, colorType = 'yellow' }: RankingButtonProps) {
  return <RankingButtonLayout colorType={colorType}>{title}</RankingButtonLayout>;
}

export default RankingButton;

const RankingButtonLayout = styled.div<{ colorType: 'yellow' | 'green' }>`
  border-radius: 60px;
  height: 2.5rem;
  padding: 0.4rem 0.6rem;
  ${({ theme, colorType }) => css`
    background-color: ${colorType === 'yellow' ? theme.color.sub : theme.color.main};
    ${theme.fonts.body2};
  `}
  color: ${({ theme }) => theme.color.white};
`;
