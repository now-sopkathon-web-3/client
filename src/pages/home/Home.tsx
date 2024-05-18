import Logo from '@assets/logo.svg';
import { useEffect } from 'react';
import { getTestApi } from 'src/api';
import styled from 'styled-components';
import Login from './Login';

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
      {/* <BigText>home</BigText>
      <LogoImgBig />
      <Icon icon={icons.search} /> */}

      <Login />
    </div>
  );
};

export default home;

const LogoImgBig = styled(Logo)`
  width: 25rem;
  height: 30rem;
`;

const BigText = styled.p`
  ${({ theme }) => theme.fonts.head1};
`;
