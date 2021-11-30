import styled from 'styled-components';
import palette from '../../styles/palette';
import Button from '../common/Button';

const ProductRegister = () => {
  return (
    <RegisterPage>
      <RegisterWrapper>
        <RegisterItem>
          <RegisterTitle>상품 이미지</RegisterTitle>
          <FileUploadContainer>
            <Button inverted size="small">
              +
            </Button>
            {/* 등록 한 이미지들 */}
            <PreviewImageContainer>
              <PreviewImage src="./asset/join.jpg" alt="preview-img" />
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
          <RegisterInput type="text" placeholder="숫자만 입력해주세요" />
          <RegisterSubTitle>원</RegisterSubTitle>
        </RegisterItem>
        <RegisterItem>
          <RegisterTitle>배송 시작일</RegisterTitle>
          <RegisterInput type="text" placeholder="숫자만 입력해주세요" />
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
  margin: 0 auto;
  max-width: 1020px;
`;

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FileUploadContainer = styled.div`
  max-height: 120px;
  display: flex;

  overflow-x: auto;
`;

const PreviewImageContainer = styled.div`
  /* position: relative; */
`;

const PreviewImage = styled.img`
  width: 160px;
  height: 120px;
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
