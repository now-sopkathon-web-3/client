import Char from '@assets/logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from 'src/api';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleLogin = async () => {
    const result = await loginApi(username);
    const memberId = result?.data?.userId;

    if (memberId) navigate(`my/${memberId}`);
  };

  return (
    <Container>
      <CharImg />
      <Text>이름을 입력해주세요</Text>
      <Input onChange={(e) => setUsername(e.target.value)} value={username} placeholder="이름을 입력해주세요!" />
      <Btn length={username.length} onClick={handleLogin}>
        로그인
      </Btn>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const CharImg = styled(Char)`
  margin-top: 8rem;
`;

const Text = styled.p`
  margin-top: 2.4rem;
  color: #000;
  ${({ theme }) => theme.fonts.head2};
`;

const Input = styled.input`
  margin-top: 1.4rem;
  width: 33.5rem;
  height: 4.8rem;
  padding: 13px 24px;

  border-radius: 8px;
  border: 0.75px solid ${({ theme }) => theme.color.gray400};
  background: ${({ theme }) => theme.color.white};
`;

const Btn = styled.button<{ length: number }>`
  margin-top: 1.2rem;
  width: 335px;
  height: 48px;
  padding: 11px 133px;

  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.fonts.subtitle1};

  border-radius: 8px;

  background: ${({ length, theme }) => (length ? theme.color.main : theme.color.gray400)};
`;
