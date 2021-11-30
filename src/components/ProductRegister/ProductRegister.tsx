import { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Button from '../common/Button';

const IMAGE_MAX_COUNT = 5;

const ProductRegister = () => {
  const [images, setImages] = useState([]);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    const nowSelectImageList = e.target.files;
    const nowImageList = [...images]; // 기존 이미지들

    if (images.length === IMAGE_MAX_COUNT) {
      alert('이미지 개수 초과');
      return;
    }
    for (let i = 0; i < nowSelectImageList.length; i++) {
      const nowImgUrl = URL.createObjectURL(nowSelectImageList[i]);
      nowImageList.push(nowImgUrl);
    }

    setImages(nowImageList);
    console.log(images);
  };

  return (
    <RegisterPage>
      <RegisterWrapper>
        <RegisterItem>
          <RegisterTitle>
            상품 이미지 &nbsp;
            <ImageCount>
              {images.length}
              {`/${IMAGE_MAX_COUNT}`}
            </ImageCount>
          </RegisterTitle>

          <FileUploadContainer>
            <Label>
              <LabelText>+</LabelText>
              <InputElement
                type="file"
                onChange={handleUploadImage}
              ></InputElement>
            </Label>
            <PreviewImageContainer>
              {!!images.length &&
                images.map((img, index) => (
                  <PreviewImage
                    src={img}
                    alt="preview-img"
                    key={`preview-image-${index + 1}`}
                  />
                ))}
            </PreviewImageContainer>
          </FileUploadContainer>
        </RegisterItem>
        <RegisterItem>
          <RegisterTitle>상품명</RegisterTitle>
          <RegisterInput type="text" placeholder="상품명을 입력해주세요" />
        </RegisterItem>
        <RegisterItem>
          <RegisterTitle>카테고리</RegisterTitle>
          <RegisterInput type="text" placeholder="카테고리를 입력해주세요" />
        </RegisterItem>
        <RegisterItem>
          <RegisterTitle>가격</RegisterTitle>
          <RegisterInput type="number" placeholder="숫자만 입력해주세요" />
          <RegisterSubTitle>원</RegisterSubTitle>
        </RegisterItem>
        <RegisterItem>
          <RegisterTitle>배송비</RegisterTitle>
          <RegisterInput type="number" placeholder="숫자만 입력해주세요" />
          <RegisterSubTitle>원</RegisterSubTitle>
        </RegisterItem>
        <RegisterItem>
          <RegisterTitle>배송 시작일</RegisterTitle>
          <RegisterInput type="number" placeholder="숫자만 입력해주세요" />
          <RegisterSubTitle>일 이내</RegisterSubTitle>
        </RegisterItem>
        <RegisterItem>
          <RegisterTitle>설명</RegisterTitle>
          <RegisterTextArea placeholder="상품 설명을 입력해주세요." />
        </RegisterItem>
        <ButtonWrapper>
          <Button className="register-button" size="medium">
            상품 등록
          </Button>
        </ButtonWrapper>
      </RegisterWrapper>
    </RegisterPage>
  );
};

const RegisterPage = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FileUploadContainer = styled.div`
  max-height: 120px;
  display: flex;
`;

const Label = styled.label`
  display: block;
  width: 120px;
  height: 100%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.purple};
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const LabelText = styled.span`
  margin: 0 0 0.3rem 0.4rem;
`;

const InputElement = styled.input`
  display: none;
  width: 100px;
  height: 100px;
`;

const PreviewImageContainer = styled.div`
  display: flex;
  height: 120px;
`;

const PreviewImage = styled.img`
  width: 120px;
  height: 100%;
  margin: 0 5px;
`;

const RegisterItem = styled.div`
  display: flex;
  min-height: 50px;
  margin: 15px 0;
`;

const RegisterTitle = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageCount = styled.span`
  color: ${palette.darkGray};
`;

const RegisterSubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const RegisterInput = styled.input``;

const RegisterTextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default ProductRegister;
