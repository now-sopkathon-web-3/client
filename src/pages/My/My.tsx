import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled as mStyled } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MyIcon from '../../assets/MyIcon.svg';
import FloatingIcon from '../../assets/floatingIcon.svg';
import Main1_1 from '../../assets/main1-1.svg';
import Main1_2 from '../../assets/main1-2.svg';
import Main1_3 from '../../assets/main1-3.svg';
import Main2_1 from '../../assets/main2-1.svg';
import Main2_2 from '../../assets/main2-2.svg';
import Main2_3 from '../../assets/main2-3.svg';
import Main3_1 from '../../assets/main3-1.svg';
import Main3_2 from '../../assets/main3-2.svg';
import Main3_3 from '../../assets/main3-3.svg';
// import { relative } from 'path';

const My = () => {
  const { memberId } = useParams();
  const [username, setusername] = useState(0);
  const [foodIslandCount, setfoodIslandCount] = useState(0);
  const [streak, setstreak] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await axios.get(`https://api.34sktweb3.o-r.kr/members`, {
          headers: {
            Authorization: memberId,
          },
        });

        setusername(getData.data.data.username);
        setfoodIslandCount(getData.data.data.foodIslandCount);
        setstreak(getData.data.data.streak);
      } catch (e) {}
    };

    fetchData();
  }, []);

  console.log(streak);

  const renderComponent = () => {
    switch (streak % 10) {
      case 1:
        return <Main1 />;
      case 2:
        return <Main2 />;
      case 3:
        return <Main3 />;
      case 4:
        return <Main4 />;
      case 5:
        return <Main5 />;
      case 6:
        return <Main6 />;
      case 7:
        return <Main7 />;
      case 8:
        return <Main8 />;
      case 9:
        return <Main9 />;
      default:
        return null; // 0 또는 기타 경우는 아무것도 렌더링하지 않음
    }
  };

  return (
    <MyPageWrapper>
      <UpperWrapper>
        <TextWrapper>
          <Text>{username} 님, 오늘도 잘 드셨나요?</Text>
          <ChipSection>
            <GetMenu>획득 메뉴 {foodIslandCount}개</GetMenu>
            <DayChip>연속 {streak}일째</DayChip>
          </ChipSection>
        </TextWrapper>
        <MyIcon />
      </UpperWrapper>

      {renderComponent()}
      <FloatingWrapper onClick={() => navigate(`/record/${memberId}`)}>
        <FloatingIcon />
      </FloatingWrapper>
      <BottomSheet>
        <Wrapper>
          <BorderLinearProgress
            variant="determinate"
            value={((streak % 30) * 100) / 30}
            sx={{
              border: '1px solid #E5E7EB',
            }}
          />
          <ProgressTextWrapper>
            <ProgressText>{streak}일</ProgressText>
            <ProgressText2>째 기록하는 중</ProgressText2>
          </ProgressTextWrapper>
        </Wrapper>
        <BtnSection>
          <MoveBtn onClick={() => navigate(`/history/${memberId}`)}>히스토리</MoveBtn>
          <MoveBtn onClick={() => navigate(`/ranking/${memberId}`)}>랭킹</MoveBtn>
        </BtnSection>
      </BottomSheet>
    </MyPageWrapper>
  );
};

export default My;

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.bg};
  z-index: 0;
`;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3.2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-top: 2rem;
  padding-left: 2.4rem;
  padding-right: 0;
  padding-bottom: 1.6rem;
  border-radius: 1.2rem;
  background-color: rgba(255, 255, 255, 0.5);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.3rem;
  gap: 0.9rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.fonts.title2};
`;

const ChipSection = styled.div`
  width: 18.5rem;
  margin-right: 14.6rem;
  gap: 0.8rem;
  display: flex;
  flex-direction: row;
`;
const GetMenu = styled.div`
  /* width: 8.5rem; */
  padding: 0.4rem 1rem;
  background-color: ${({ theme }) => theme.color.main};
  border-radius: 6rem;
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.color.white};
`;

const DayChip = styled.div`
  /* width: 7.2rem; */
  padding: 0.4rem 1rem;
  background-color: ${({ theme }) => theme.color.sub};
  border-radius: 6rem;
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.color.white};
`;

const FloatingWrapper = styled.div`
  margin-top: 30rem;
  padding-left: 29.1rem;
  padding-right: 2.4rem;
  z-index: 1;
`;

const BottomSheet = styled.div`
  width: 100%;
  padding: 2.4rem 2rem 3.6rem 2rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 30px 30px 0 0;
  bottom: 0;
  margin-top: 2rem;
  margin-bottom: 0;
  z-index: 1;
`;

const BtnSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 33.5rem;
  gap: 1.3rem;
  justify-content: center;
  margin-top: 1.6rem;
`;

const MoveBtn = styled.button`
  width: 16.1rem;
  padding: 1.3rem 5.25rem;
  background-color: ${({ theme }) => theme.color.main};
  ${({ theme }) => theme.fonts.subtitle1};
  color: ${({ theme }) => theme.color.white};
  justify-content: center;

  border-radius: 8px;
`;

const BorderLinearProgress = mStyled(LinearProgress)(({}) => ({
  width: 335,
  height: 36,
  borderRadius: 20,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#E5E7EB',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
}));

const ProgressTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0.8rem;
  left: 1.6rem;
`;

const ProgressText = styled.p`
  ${({ theme }) => theme.fonts.body4};
`;

const ProgressText2 = styled.p`
  ${({ theme }) => theme.fonts.body3};
`;

const Wrapper = styled.div`
  position: relative;
`;

const Main1 = styled(Main1_1)`
  position: absolute;
  width: 37.5rem;
  top: -32rem;
`;

const Main2 = styled(Main1_2)`
  position: absolute;
  width: 37.5rem;
  top: -32rem;
`;

const Main3 = styled(Main1_3)`
  position: absolute;
  width: 37.5rem;
  top: -32rem;
`;

const Main4 = styled(Main2_1)`
  position: absolute;
  width: 37.5rem;
  top: -32rem;
`;

const Main5 = styled(Main2_2)`
  position: absolute;
  width: 37.5rem;
  top: -32rem;
`;

const Main6 = styled(Main2_3)`
  position: absolute;
  width: 37.5rem;
  top: -32rem;
`;

const Main7 = styled(Main3_1)`
  position: absolute;
  width: 37.5rem;
  top: -32rem;
`;

const Main8 = styled(Main3_2)`
  position: absolute;
  width: 37.5rem;
  top: -32rem;
`;

const Main9 = styled(Main3_3)`
  position: absolute;
  width: 37.5rem;
  top: -32rem;
`;
