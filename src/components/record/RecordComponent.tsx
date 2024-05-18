import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'src/api/config';
import axios from 'axios';
import styled from 'styled-components';

const RecordComponent = () => {
  const BASE_URL = import.meta.env.BASE_URL;
  const [image, setImage] = useState(null);
  const [file, setFile] = useState();
  const [text, setText] = useState('');
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const navigate = useNavigate();

  const handleImg = (event) => {
    const file = event.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setImage(reader.result);
      };
    }
  };

  const handleImageUpload = (isSuccess) => {
    // TODO: text(상태), isSuccess 인자로 받아서 api 요청 시 같이 전달

    const formData = new FormData();
    formData.append('image', file);

    Axios.post('/image/test', formData)
      .then((result) => {
        console.log('요청성공');
        console.log(result);
        setFile(null);
      })
      .catch((error) => {
        console.error('요청실패');
        console.error(error);
      });
  };

  const handleInfo = (e) => {
    setText(e.target.value);
  };

  const handleResult = (isSuccess: boolean) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleImageUpload(isSuccess);
    navigate(isSuccess ? '/record/success' : '/record/fail');
  };

  return (
    <RecordComponentWrapper>
      <UploadFile type="file" accept="image/gif, image/jpeg, image/png" onChange={handleImg} />
      {image && <ImagePreview src={image} alt="Uploaded Preview" />}
      <FileInfo onChange={(e) => handleInfo(e)}></FileInfo>
      <ButtonContainer>
        <Btn onClick={handleResult(true)}>성공</Btn>
        <Btn onClick={handleResult(true)}>실패</Btn>
      </ButtonContainer>
    </RecordComponentWrapper>
  );
};

export default RecordComponent;

const RecordComponentWrapper = styled.div`
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
  margin-bottom: 20px;
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
