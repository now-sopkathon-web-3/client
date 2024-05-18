import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SuccessRecord = () => {
  const navigate = useNavigate();

  const handleHomeBtn = () => {
    navigate('/');
  };
  return (
    <div>
      SuccessRecord
      <HomeBtn onClick={handleHomeBtn}>홈버튼</HomeBtn>
    </div>
  );
};

export default SuccessRecord;

const HomeBtn = styled.button``;
