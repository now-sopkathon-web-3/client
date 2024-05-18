import styled from 'styled-components';
import BackIcon from '@assets/icn_back.svg';

interface AppBarProps {
  title: string;
}

function AppBar({ title }: AppBarProps) {
  return (
    <AppBarLayout>
      <BackIcon />
      <AppBarTitle>{title}</AppBarTitle>
    </AppBarLayout>
  );
}

export default AppBar;

const AppBarLayout = styled.div`
  height: 7.6rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.bg};
  padding-left: 2rem;
  background-color: none;
  position: sticky;
`;

const AppBarTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.color.black};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
