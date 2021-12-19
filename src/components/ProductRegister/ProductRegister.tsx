import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import useTextArea from '../../hooks/useTextArea';
import palette from '../../styles/palette';
import Button from '../common/Button';
import Chip from '../common/Chip';
import { AddProductApi } from '../../api/product';
import { Input } from '../common/Input';
import useInput from '../../hooks/useInput';
import useSelect from '../../hooks/useSelect';
import {
  hasDuplicated,
  isValidImageLength,
  isValidTagLength,
} from '../../utils/postUpload';

const IMAGE_MAX_COUNT = 5;
const TAG_MAX_COUNT = 5;

const ProductRegister = () => {
  const [images, setImages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[] | []>([]);
  const [tagName, setTagName] = useState<string>('');
  const [productName, setProductName] = useInput('');
  const [category, setCategory] = useSelect();
  const [price, setPrice] = useInput('');
  const [shipFee, setShipFee] = useInput('');
  const [shipStart, setShipStart] = useInput('');
  const [content, setContent] = useTextArea('');

  useEffect(() => {
    preventEnterEvent();
  }, []);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target.files 은 :', e.target.files);
    console.log('e.target.files[0]은 : ', e.target.files[0]);
    //    const updateImageFormated = images.map((image) => updateImageFormat(image));
    const nowSelectImageList = e.target.files;
    const nowImageList = [...images];

    if (isValidImageLength(nowImageList)) {
      alert('이미지 개수 초과입니다');
      return;
    }

    for (let i = 0; i < nowSelectImageList!.length; i++) {
      const nowImgUrl = URL.createObjectURL(nowSelectImageList![i]);
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
          alert('태그 개수 초과입니다');
          return;
        }
        if (hasDuplicated([...tags, nowTag])) {
          alert('중복 태그입니다');
          return;
        }
        const newTag = tagName;
        setTags((prevState) => [...prevState, newTag]);
        setTagName('');
      }
    },
    [tagName, tags],
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    images?.forEach((image) => {
      formData.append('productRepImage ', image);
    });
    formData.append('productName  ', productName);
    formData.append('categoryId ', category);
    tags?.forEach((tag) => {
      formData.append('hashtags ', tag);
    });
    formData.append('productPrice ', price);
    formData.append('productDeliveryPrice ', shipFee);

    formData.append('productDeliveryTerm ', shipStart);
    formData.append('productInformation ', content);

    try {
      const response = await AddProductApi(formData);
      if (response.status === 200 || 201) {
        console.log('상품등록 성공');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const CATEGORY = [
    { title: '전체', id: 5 },
    { title: '유리공예품', id: 15 },
    { title: '금속공예품', id: 25 },
    { title: '도자기공예품', id: 35 },
    { title: '음식', id: 45 },
    { title: '한식', id: 55 },
    { title: '양식', id: 65 },
    { title: '궁중간식', id: 75 },
    { title: '졸업작품', id: 75 },
  ];

  return (
    <RegisterPage>
      <RegisterForm onSubmit={onSubmit}>
        <RegisterItem>
          <RegisterTitle>
            상품 이미지 &nbsp;
            <Count>
              {images.length}
              {`/${IMAGE_MAX_COUNT}`}
            </Count>
          </RegisterTitle>

          <FileUploadContainer>
            <Label>
              <LabelText>+</LabelText>
              <InputElement
                type="file"
                accept="image/*"
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
        <RegisterItem>
          <RegisterTitle>카테고리</RegisterTitle>
          <SelectBlock onChange={(e) => setCategory(e)}>
            {CATEGORY.map((name, index) => (
              <option key={index} value={name.id}>
                {name.title}
              </option>
            ))}
          </SelectBlock>
        </RegisterItem>

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

        <RegisterItem>
          <RegisterTitle>
            연관태그 &nbsp;
            <Count>
              {tags.length}
              {`/${TAG_MAX_COUNT}`}
            </Count>
          </RegisterTitle>

          <RegisterInput
            type="text"
            name="input-tag"
            value={tagName}
            placeholder="입력하고 Enter  (최대 5개)"
            onKeyUp={onKeyUp}
            onChange={handleTag}
          />
        </RegisterItem>
        <RegisterItem style={{ display: 'inline-block' }}>
          <RegisterTitle></RegisterTitle>
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
      </RegisterForm>
    </RegisterPage>
  );
};
const RegisterPage = styled.div`
  width: 50rem;
  margin: auto;
  padding: 4.5rem 5.4375rem;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const RegisterForm = styled.form`
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
  background-color: ${palette.lightGrey};
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
  min-height: 60px;
  margin: 15px 0;
`;

const RegisterTitle = styled.label`
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.span`
  color: ${palette.darkGray};
`;

const SelectBlock = styled.select`
  padding: 0.75rem 1.25rem;
  border: none;
  outline: none;
  background-color: #f6f8fa;
`;

const RegisterInput = styled.input`
  width: 100%;
  height: 3.375rem;
  padding: 0 1.2rem;
  background-color: #f6f8fa;
  border: none;
  outline: none;
  ::placeholder {
    color: #8492a6;
  }
`;

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
  padding: 1rem;
  border: none;
  outline: none;
  background-color: #f6f8fa;
  ::placeholder {
    color: #8492a6;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default ProductRegister;
