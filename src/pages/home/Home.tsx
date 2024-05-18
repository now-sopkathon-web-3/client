import Logo from '@assets/logo.svg';
import Icon from '@components/Icon';
import { icons } from '@styles/icons';
import styled from 'styled-components';

const home = () => {
  return (
    <div>
      <BigText>home</BigText>
      <LogoImgBig />
      <Icon icon={icons.search} />
    </div>
  );
};

export default home;

const LogoImgBig = styled(Logo)`
  width: 40rem;
  height: 40rem;
`;

const BigText = styled.p`
  font-size: 5.6rem;
  font-weight: bold;
  color: red;
`;
