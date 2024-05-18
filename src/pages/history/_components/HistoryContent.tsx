import styled from 'styled-components';
import image_1 from '@assets/image_1.jpeg';

interface HistoryContentProps {
  createdAt: string;
  foodTitle: string;
  imageUrl: string;
}

function HistoryContent({ createdAt, foodTitle, imageUrl }: HistoryContentProps) {
  // 날짜 포맷 변경
  const formattedDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
  }).format(new Date(createdAt));

  return (
    <HistoryContentLayout>
      <HistoryContentDate>{formattedDate}</HistoryContentDate>
      <HistoryContentFood>{foodTitle}</HistoryContentFood>
      <HistoryContentImg src={imageUrl} />
    </HistoryContentLayout>
  );
}

export default HistoryContent;

const HistoryContentLayout = styled.article`
  display: flex;
  align-items: center;
  width: 16.1rem;
  height: 16.1rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.gray0};
  overflow: hidden;
  flex-direction: column;
`;

const HistoryContentDate = styled.p`
  font-family: ${({ theme }) => theme.fonts.caption};
  color: ${({ theme }) => theme.color.gray900};
  margin-top: 1.4rem;
`;

const HistoryContentFood = styled.p`
  font-family: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.color.gray900};
  margin-top: 0.2rem;
`;

const HistoryContentImg = styled.img`
  object-fit: cover;
  border-radius: 50% 50% 0 0;
  width: 16.1rem;
  height: 16.1rem;
  margin-top: 1rem;
`;
