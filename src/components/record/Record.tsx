import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'src/api/config';
import styled from 'styled-components';

const Record: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>('');
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
        Authorization: 1,
      },
    })
      .then((result) => {
        console.log('요청성공', result);
        setFile(null);
        navigate(isSuccess ? '/record/success' : '/record/fail');
      })
      .catch((error) => {
        console.error('요청실패', error);
      });
  };

  const handleInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <RecordWrapper>
      <UploadFile type="file" accept="image/gif, image/jpeg, image/png" onChange={handleImg} />
      {image && <ImagePreview src={image} alt="Uploaded Preview" />}
      <FileInfo onChange={handleInfo} />
      <ButtonContainer>
        <Btn onClick={() => handleImageUpload(true)}>성공</Btn>
        <Btn onClick={() => handleImageUpload(false)}>실패</Btn>
      </ButtonContainer>
    </RecordWrapper>
  );
};

export default Record;

const RecordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 5rem;
  gap: 5rem;
`;

const UploadFile = styled.input`
  cursor: pointer;

  &::file-selector-button {
    cursor: pointer;
  }
`;

const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
`;

const FileInfo = styled.input``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Btn = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: gray;
`;
