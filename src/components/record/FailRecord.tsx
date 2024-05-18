import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FailRecord = () => {
  const navigate = useNavigate();

  const handleHomeBtn = () => {
    navigate('/');
  };
  return (
    <div>
      FailRecord
      <HomeBtn onClick={handleHomeBtn}>홈버튼</HomeBtn>
    </div>
  );
};

export default FailRecord;

const HomeBtn = styled.button``;
