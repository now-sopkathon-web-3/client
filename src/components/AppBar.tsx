import styled from 'styled-components';
import BackIcon from '@assets/icn_back.svg';
import { useNavigate } from 'react-router-dom';

interface AppBarProps {
  title: string;
}

function AppBar({ title }: AppBarProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <AppBarLayout>
      <BackIconWrapper onClick={goBack}>
        <BackIcon />
      </BackIconWrapper>
      <AppBarTitle>{title}</AppBarTitle>
    </AppBarLayout>
  );
}

export default AppBar;

const AppBarLayout = styled.div`
  width: 100%;
  height: 7.6rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  background-color: none;
  position: fixed;
  top: 0;
`;

const AppBarTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.color.black};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const BackIconWrapper = styled.button`
  margin-left: 2rem;
`;
