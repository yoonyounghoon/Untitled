import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { requestAddProduct } from '../../api/product';
import useInput from '../../hooks/useInput';
import useTextArea from '../../hooks/useTextArea';
import palette from '../../styles/palette';
import {
  hasDuplicated,
  isValidImageLength,
  isValidTagLength,
} from '../../utils/postUpload';
import Button from '../common/Button';
import Chip from '../common/Chip';
import { Input } from '../common/Input';

const IMAGE_MAX_COUNT = 5;
const TAG_MAX_COUNT = 5;

const ProductRegister = () => {
  const [images, setImages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[] | []>([]);
  const [tagName, setTagName] = useState<string>('');

  const [productName, setProductName] = useInput('');
  const [category, setCategory] = useInput('');
  const [price, setPrice] = useInput('');
  const [shipFee, setShipFee] = useInput('');
  const [shipStart, setShipStart] = useInput('');
  const [content, setContent] = useTextArea('');

  useEffect(() => {
    preventEnterEvent();
  }, []);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nowSelectImageList = e.target.files;
    const nowImageList = [...images];

    if (isValidImageLength(nowImageList)) {
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
    const nowTags = tags.filter((tag) => tag !== clickTag);
    setTags(nowTags);
  };

  const handleTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newTag = e.target.value.replace(/\s/g, '');
    setTagName(newTag);
  };

  const tagItems = tags?.map((tag) => (
    <TagItem key={tag}>
      <Chip onDelete={() => handleDeleteTag(tag)}>{tag}</Chip>
    </TagItem>
  ));

  const preventEnterEvent = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) =>
      input.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          return false;
        }
      }),
    );
  };

  const onKeyUp = useCallback(
    (e) => {
      const nowTag = e.target.value;
      const nowTagList = [...tags];
      if (e.keyCode === 13 && e.target.value.trim() !== '') {
        if (isValidTagLength(nowTagList)) {
          alert('태그 개수 초과');
          return;
        }
        if (hasDuplicated([...tags, nowTag])) {
          alert('중복 태그');
          return;
        }
        const newTag = tagName;
        setTags((prevState) => [...prevState, newTag]);
        setTagName('');
      }
    },
    [tagName, tags],
  );
  const accessToken = 'sdsa';

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await requestAddProduct(
      {
        images,
        productName,
        category,
        price,
        shipFee,
        shipStart,
        tags,
        content,
      },
      accessToken,
    );
  };

  return (
    <RegisterPage>
      <RegisterWrapper onSubmit={onSubmit}>
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

        <Input
          label="상품명"
          placeholder="상품명을 입력해주세요"
          type="text"
          onChange={(e) => setProductName(e)}
        />

        <Input
          label="카테고리"
          placeholder="카테고리를 입력해주세요"
          type="text"
          onChange={(e) => setCategory(e)}
        />

        <Input
          label="가격"
          placeholder="숫자만 입력해주세요"
          type="number"
          behindText="원"
          onChange={setPrice}
        />

        <Input
          label="배송비"
          placeholder="숫자만 입력해주세요"
          type="number"
          behindText="원"
          onChange={(e) => setShipFee(e)}
        />

        <Input
          label="배송 시작일"
          placeholder="숫자만 입력해주세요"
          type="number"
          behindText="일 이내"
          onChange={(e) => setShipStart(e)}
        />

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
          <RegisterTextArea
            value={content}
            onChange={setContent}
            placeholder="상품 설명을 입력해주세요."
          />
        </RegisterItem>
        <ButtonWrapper>
          <Button className="register-button" size="medium" type="submit">
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

const RegisterWrapper = styled.form`
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

const RegisterTitle = styled.label`
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageCount = styled.span`
  color: ${palette.darkGray};
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
