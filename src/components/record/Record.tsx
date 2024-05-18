import React, { useState, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'src/api/config';
import styled from 'styled-components';
import Back from 'src/assets/icn_back.svg';

const Record: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleImg = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (isSuccess: boolean) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    formData.append('foodTitle', text);
    formData.append('isSuccess', isSuccess.toString());

    Axios.post('/histories', formData, {
      headers: {
        Authorization: `${memberId}`,
      },
    })
      .then((result) => {
        setFile(null);
        navigate(isSuccess ? `/record/success/${memberId}` : `/record/fail/${memberId}`);
      })
      .catch((error) => {
        console.error('요청실패', error);
      });
  };

  const handleInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleIsSuccess = (isSuccess: boolean) => {
    setSuccess(isSuccess);
  };

  const handleHomeBtn = () => {
    navigate(`/${memberId}`);
  };

  return (
    <RecordWrapper>
      <BackIcon onClick={handleHomeBtn} />
      <Title>기록</Title>
      <ButtonContainer>
        <Btn $isTrue={success} border={true} onClick={() => handleIsSuccess(true)}>
          성공
        </Btn>
        <Btn $isTrue={!success} border={false} onClick={() => handleIsSuccess(false)}>
          실패
        </Btn>
      </ButtonContainer>
      <FileInfo placeholder="오늘 무엇을 드셨나요?" onChange={handleInfo} />
      <ImgContainer>
        <label htmlFor="file">
          <InputText>사진을 업로드해 주세요.</InputText>
        </label>
        <UploadFile type="file" accept="image/gif, image/jpeg, image/png" onChange={handleImg} />
        {image && <ImagePreview src={image} alt="Uploaded Preview" />}
      </ImgContainer>
      <UploadBtn onClick={() => handleImageUpload(success)}>등록</UploadBtn>
    </RecordWrapper>
  );
};

export default Record;

const RecordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

const BackIcon = styled(Back)`
  position: absolute;
  left: 2rem;
  top: 2.4rem;
`;

const Title = styled.p`
  width: 100%;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  margin-top: 2.9rem;
`;

const FileInfo = styled.input`
  width: 335px;
  height: 48px;
  padding: 13px 24px;
  border-radius: 8px;
  border: 0.75px solid #9ca3af;
  background: #fff;
  margin-top: 1.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.3rem;
  margin-top: 4.1rem;
`;

const Btn = styled.button<{ $isTrue: boolean; border: boolean }>`
  display: flex;
  width: 161px;
  height: 66px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${({ border, theme }) => (border ? theme.color.main : '#E72121')};
  color: ${({ $isTrue, theme }) => ($isTrue ? theme.color.white : theme.color.gray400)};
  background: ${({ $isTrue, border, theme }) => ($isTrue ? (border ? theme.color.main : '#E72121') : 'transparent')};
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.064px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 335px;
  border-radius: 8px;
  background: #e5e7eb;
  margin-top: 1.2rem;
`;

const InputText = styled.div``;

const UploadFile = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const ImagePreview = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #e5e7eb;
`;

const UploadBtn = styled.button`
  width: 335px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #9ca3af;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.064px;
  margin-top: 1.8rem;

  &:hover {
    background: ${({ theme }) => theme.color.main};
  }
`;
