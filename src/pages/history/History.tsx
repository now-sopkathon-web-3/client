import styled from 'styled-components';
import AppBar from '@components/AppBar';
import HistoryList from './_components/HistoryList';

function History() {
  return (
    <HistoryLayout>
      <AppBar title="히스토리" />
      <HistoryList />
    </HistoryLayout>
  );
}

export default History;

const HistoryLayout = styled.div`
  width: 100%;
  height: 100vh;
`;
