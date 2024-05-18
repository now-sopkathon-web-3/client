import AppBar from '@components/AppBar';
import { UserRank } from '@models/getRankingResponse';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRanking } from 'src/api/getRanking';
import styled from 'styled-components';
import RankingInfo from './_components/RankingInfo';
import RankingList from './_components/RankingList';

function Ranking() {
  const { id: userId } = useParams<{ id: string }>();
  const [rank, setRank] = useState<UserRank>();
  const [rankArr, setRankArr] = useState<UserRank[]>([]);

  useEffect(() => {
    const getRank = async () => {
      const response = await getRanking(userId);

      const data = response.data;

      console.log('hi', data);

      setRank(data.myRank);
      setRankArr(data.rank);
    };

    getRank();
  }, [userId]);

  return (
    <RankingLayout>
      <AppBar title="랭킹" />
      <RankingInfo
        rank={rank?.rank}
        nickname={rank?.username}
        foodIslandCount={rank?.foodIslandCount}
        streak={rank?.streak}
      />
      <RankingList rank={rankArr} />
    </RankingLayout>
  );
}

export default Ranking;

const RankingLayout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
