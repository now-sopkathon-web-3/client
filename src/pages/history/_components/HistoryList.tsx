import styled from 'styled-components';
import { HISTORY_DATA } from '../_constants/historyData';
import HistoryContent from './HistoryContent';

function HistoryList() {
  return (
    <HistoryListLayout>
      {HISTORY_DATA.map((data, index) => (
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
