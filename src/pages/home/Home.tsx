import Logo from '@assets/logo.svg';
import Icon from '@components/Icon';
import { icons } from '@styles/icons';
import { useEffect } from 'react';
import { getTestApi } from 'src/api';
import styled from 'styled-components';

const home = () => {
  useEffect(() => {
    const getTest = async () => {
      const result = await getTestApi();
      console.log(result);
    };

    getTest();
  }, []);

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
  width: 25rem;
  height: 30rem;
`;

const BigText = styled.p`
  font-size: 5.6rem;
  font-weight: bold;
  color: red;
`;
