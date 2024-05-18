import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface RecordResultProps {
  src: string;
  alt: string;
  content: string;
}

const RecordResult = (props: RecordResultProps) => {
  const { memberId } = useParams();
  const { src, alt, content } = props;
  const navigate = useNavigate();

  const handleHomeBtn = () => {
    navigate(`/${memberId}`);
  };
  return (
    <RecordResultWrapper>
      <StatusText>{content}</StatusText>
      <StatusImgWrapper>
        <img src={src} alt={alt} />
      </StatusImgWrapper>
      <HomeBtn onClick={handleHomeBtn}>
        <BtnText>홈 화면으로 이동</BtnText>
      </HomeBtn>
    </RecordResultWrapper>
  );
};

export default RecordResult;

const RecordResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
`;

const StatusText = styled.p`
  width: 100%;
  margin-top: 7rem;
  text-align: center;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */

  white-space: pre-wrap;
`;

const StatusImgWrapper = styled.div`
  width: 37.5rem;
  height: 43.1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex-shrink: 0;
  }
`;

const HomeBtn = styled.button`
  padding: 0, 2rem;

  display: flex;
  width: 33.5rem;
  height: 4.8rem;
  padding: 1.1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.8rem;
  background: var(--main, #09d17d);

  margin-bottom: 3.6rem;
`;

const BtnText = styled.p`
  color: var(--gray-white, #fff);
  text-align: center;

  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.064rem;
`;
