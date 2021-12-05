import React from 'react';
import styled from 'styled-components';
import {
  EMAIL_INVALID_CODE,
  EMAIL_VALID_CODE,
  ID_INVALID_CODE,
  ID_VALID_CODE,
  NICKNAME_INVALID_CODE,
} from '../../../lib/constants';
import palette from '../../../styles/palette';
import Button from '../../common/Button';
import Postcode from '../../Postcode/Postcode';
import useJoin from './useJoin';

function Join() {
  const {
    form,
    responseCodes,
    onChange,
    onSubmit,
    checkEmail,
    checkCode,
    checkId,
    checkNickname,
    handleComplete,
  } = useJoin();

  const { address, certificationCode } = form;
  return (
    <JoinBlock>
      <h2 className="title">회원가입</h2>
      <form onSubmit={onSubmit}>
        <Row>
          <label htmlFor="email">이메일</label>
          <div className="check-field">
            <input
              id="email"
              placeholder="이메일을 입력해주세요"
              onChange={onChange}
            />
            <CheckBtn onClick={checkEmail} inverted>
              중복확인
            </CheckBtn>
          </div>
        </Row>
        {responseCodes.email === EMAIL_INVALID_CODE && (
          <ErrorMessage>이미 사용중인 이메일입니다.</ErrorMessage>
        )}
        {responseCodes.email === EMAIL_VALID_CODE && (
          <Row>
            <label htmlFor="email">인증번호</label>
            <div className="check-field">
              <input
                placeholder="인증번호"
                id="certificationCode"
                value={certificationCode}
                onChange={onChange}
              />
              <CheckBtn onClick={checkCode}>인증하기</CheckBtn>
            </div>
          </Row>
        )}
        <Row>
          <label htmlFor="id">아이디</label>
          <div className="check-field">
            <input
              id="id"
              placeholder="아이디를 입력해주세요"
              onChange={onChange}
            />
            <CheckBtn onClick={checkId} inverted>
              중복확인
            </CheckBtn>
          </div>
        </Row>
        {responseCodes.id === ID_INVALID_CODE && (
          <ErrorMessage>이미 사용중인 아이디입니다.</ErrorMessage>
        )}
        <Row>
          <label htmlFor="nickname">닉네임</label>
          <div className="check-field">
            <input
              id="nickname"
              placeholder="닉네임을 입력해주세요"
              onChange={onChange}
            />
            <CheckBtn onClick={checkNickname} inverted>
              중복확인
            </CheckBtn>
          </div>
        </Row>
        {responseCodes.nickname === NICKNAME_INVALID_CODE && (
          <ErrorMessage>이미 사용중인 닉네임입니다.</ErrorMessage>
        )}
        <Row>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChange}
          />
        </Row>
        <Row>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <input
            type="password"
            id="passwordCheck"
            placeholder="비밀번호 확인"
            onChange={onChange}
          />
        </Row>
        <Row>
          <label htmlFor="phone">전화번호</label>
          <input id="phone" placeholder="전화번호" onChange={onChange} />
        </Row>
        <Row>
          <label htmlFor="address">우편번호</label>
          <div className="check-field">
            <input
              id="address"
              placeholder="우편번호"
              readOnly={true}
              value={address}
            />
            <Postcode handleComplete={handleComplete} />
          </div>
        </Row>
        <Row>
          <label htmlFor="detailAddress">상세주소</label>
          <input id="detailAddress" placeholder="주소" onChange={onChange} />
        </Row>
        <CheckBtn>등록</CheckBtn>
      </form>
    </JoinBlock>
  );
}

export default Join;

const JoinBlock = styled.div`
  width: 50rem;
  margin: auto;
  padding: 4.5rem 5.4375rem;
  text-align: center;

  .title {
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;

  .check-field {
    display: flex;
    width: 100%;
  }

  label {
    width: 10rem;
  }
  input {
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
`;

export const CheckBtn = styled(Button)`
  width: 11rem;
  margin-left: 1.1rem;
`;

const ErrorMessage = styled.p`
  color: ${palette.red};
`;
