import { useCallback, useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Button from '../common/Button';
import Chip from '../common/Chip';

const IMAGE_MAX_COUNT = 5;
const TAG_MAX_COUNT = 5;

const ProductRegister = () => {
  const [images, setImages] = useState<string[]>([]);
  const [tagName, setTagName] = useState<string>('');
  const [tagArr, setTagArr] = useState<string[] | []>([]);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleDeleteTag = (clickTag: string) => {
    const nowTags = tagArr.filter((tag) => tag !== clickTag);
    setTagArr(nowTags);
  };

  const tagItems = tagArr?.map((tag) => (
    <TagItem key={tag}>
      <Chip onDelete={() => handleDeleteTag(tag)}>{tag}</Chip>
    </TagItem>
  ));

  const handleTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newTag = e.target.value.replace(/\s/g, '');
    setTagName(newTag);
  };

  const onKeyUp = useCallback(
    (e) => {
      if (e.keyCode === 13 && e.target.value.trim() !== '') {
        if (tagArr.length >= TAG_MAX_COUNT) {
          alert('태그 개수 초과');
          return;
        }
        const newTag = tagName;
        setTagArr((prevState) => [...prevState, newTag]);
        setTagName('');
      }
    },
    [tagName, tagArr],
  );

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
        <RegisterItem style={{ height: '40px' }}>
          <RegisterTitle>연관태그</RegisterTitle>
          <RegisterInput
            type="text"
            name="input-tag"
            value={tagName}
            placeholder="입력하고 Enter  (최대 5개)"
            onKeyUp={onKeyUp}
            onChange={handleTag}
          />
          <TagWrapper>{tagItems}</TagWrapper>
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

const LabelText = styled.span``;

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

const TagWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const TagItem = styled.li`
  margin-right: 12px;
`;

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
