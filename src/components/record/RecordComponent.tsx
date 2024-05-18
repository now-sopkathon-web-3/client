import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RecordComponent = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState();
  const [text, setText] = useState('');
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const formData = new FormData();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    formData.append('file', file);
    setFile(file);
  };

  const handleInfo = (e) => {
    setText(e.target.value);
  };

  const handleSuccess = (event) => {
    console.log('success');
    console.log('api에', { text });
    console.log(file);
    // 성공 api 호출?
    navigate('/record/success');
  };

  const handleFail = (event) => {
    console.log('fail');
    // 실패 api 호출? 실패 페이지로 이동?
    navigate('/record/fail');
  };

  return (
    <RecordComponentWrapper>
      <UploadFile type="file" accept="image/gif, image/jpeg, image/png" onChange={handleImageUpload} />
      {image && <ImagePreview src={image} alt="Uploaded Preview" />}
      <input onChange={handleInfo}></input>
      <ButtonContainer>
        <Btn onClick={handleSuccess}>성공</Btn>
        <Btn onClick={handleFail}>실패</Btn>
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
