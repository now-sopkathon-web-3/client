import styled from 'styled-components';
import RankingList from './_components/RankingList';
import AppBar from '@components/AppBar';
import RankingInfo from './_components/RankingInfo';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRanking } from 'src/api/getRanking';
import { UserRankResponse, UserRank } from '@models/getRankingResponse';

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
