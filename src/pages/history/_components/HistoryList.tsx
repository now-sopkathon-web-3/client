import styled from 'styled-components';
import { useEffect, useState } from 'react';
import HistoryContent from './HistoryContent';
import { useParams } from 'react-router-dom';
import { getHistory } from 'src/api/getHistory';
import { HistoryResponse, History } from '@models/getHistoryResponse';

function HistoryList() {
  //const { id: userId } = useParams<{ id: string }>();
  const userId = 1;
  const [histories, setHistories] = useState<History[]>([]);

  useEffect(() => {
    const getHistories = async () => {
      const response = await getHistory(userId);
      setHistories(response.data.histories);
    };

    getHistories();
  }, [userId]);

  return (
    <HistoryListLayout>
      {histories.map((data, index) => (
        <HistoryContent key={index} createdAt={data.createdAt} foodTitle={data.foodTitle} imageUrl={data.imageUrl} />
      ))}
    </HistoryListLayout>
  );
}

export default HistoryList;

const HistoryListLayout = styled.div`
  display: grid;
  gap: 1.2rem;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  margin: 8.8rem auto;
  max-width: 90%;
  padding-bottom: 3.6rem;
`;
