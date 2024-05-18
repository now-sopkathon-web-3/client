import styled from 'styled-components';
import Icon from '@components/Icon';
import { icons } from '@styles/icons';

interface AppBarProps {
  title: string;
}

function AppBar({ title }: AppBarProps) {
  return (
    <AppBarLayout>
      <Icon icon={icons.back} />
      <AppBarTitle>{title}</AppBarTitle>
    </AppBarLayout>
  );
}

export default AppBar;

const AppBarLayout = styled.div`
  height: 5rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
  background-color: none;
`;

const AppBarTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.color.black};
  position: absolute; /* 절대 위치 사용 */
  left: 50%; /* 왼쪽에서 50% 위치 */
  transform: translateX(-50%); /* 자신의 크기의 반만큼 왼쪽으로 이동 */
`;
