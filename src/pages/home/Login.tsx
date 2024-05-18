import { useEffect } from 'react';
import styled from 'styled-components';

const Login = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <Text>이름을 입력해주세요</Text>
      <Input />
      <Btn>로그인하기</Btn>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Text = styled.p`
  margin-left: 2rem;
  margin-top: 22.5rem;
  color: #000;

  /* Text/Head 2 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
`;

const Input = styled.input`
  width: 235px;
  height: 49px;
`;

const Btn = styled.button`
  width: 165px;
  height: 21px;
  color: black;
  background-color: gray;

  border-radius: 50px;
  background: #d9d9d9;
`;
