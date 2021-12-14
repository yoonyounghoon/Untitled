import React from 'react';
import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import Button from '../common/Button';
import ModalTemplate from '../common/ModalTemplate';

function AuthForm() {
  const [isPopUp, handlePopUp] = useToggle();

  return (
    <>
      <AuthButton inverted onClick={handlePopUp}>
        판매자 인증
      </AuthButton>
      {isPopUp && (
        <ModalTemplate
          width="500px"
          height="500px"
          isModal={isPopUp}
          onToggleModal={() => handlePopUp()}
        >
          <AuthTemplate />
        </ModalTemplate>
      )}
    </>
  );
}

export default AuthForm;

const AuthButton = styled(Button)`
  width: 8.125rem;
  height: 3.375rem;
`;

const AuthTemplate = () => {
  return (
    <Form>
      <Row>
        <label htmlFor="file">파일첨부하기</label>
        <input id="file" type="file" />
      </Row>
      <Row>
        <label htmlFor="bank">은행선택</label>
        <select id="bank">
          <option value="">기업은행</option>
          <option value="">신한은행</option>
        </select>
      </Row>
      <Row>
        <label htmlFor="account">계좌번호</label>
        <input id="account" type="text" placeholder="계좌번호를 입력해주세요" />
      </Row>
      <Row>
        <label htmlFor="introduce">판매자 소개</label>
        <textarea placeholder="판매자 소개를 입력해보세요"></textarea>
      </Row>
    </Form>
  );
};

const Form = styled.form`
  height: 100%;
  padding: 2rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 2rem;

  #bank,
  #account {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3.375rem;
    padding: 0px 19px;
    background-color: #f6f8fa;
    border: none;
    outline: none;
    ::placeholder {
      color: #8492a6;
    }
  }

  label {
    margin-bottom: 1rem;
  }
`;
