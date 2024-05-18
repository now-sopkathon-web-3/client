import styled from 'styled-components';

interface RankingButtonprops {
  title: string;
}

function RankingButton({ title }: RankingButtonprops) {
  return <RankingButtonLayout>{title}</RankingButtonLayout>;
}

export default RankingButton;

const RankingButtonLayout = styled.div``;
