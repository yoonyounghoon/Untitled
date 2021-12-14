import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Input } from '../common/Input';
import Postcode from '../Postcode/Postcode';
import AuthForm from './AuthForm';
import useMyPage from './useMyPage';

function UserInfo() {
  const {
    username,
    email,
    phoneNumber,
    address,
    detailAddress,
    onChangePhoneNumber,
    onChangeDetailAddress,
    handleComplete,
    editUserInfo,
  } = useMyPage();

  return (
    <UserInfoBlock>
      <h2 className="title">마이 페이지</h2>
      <form onSubmit={editUserInfo}>
        <Row>
          <label htmlFor="username">닉네임</label>
          <input id="username" readOnly={true} value={username} />
        </Row>
        <Row>
          <label htmlFor="email">이메일</label>
          <input id="email" readOnly={true} value={email} />
        </Row>
        <Row>
          <label htmlFor="phoneNumber">전화번호</label>
          <input
            id="phoneNumber"
            value={phoneNumber}
            onChange={onChangePhoneNumber}
          />
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
          <input
            id="detailAddress"
            placeholder="주소"
            onChange={onChangeDetailAddress}
            value={detailAddress}
          />
        </Row>
        <div className="seller-verification">
          <AuthForm />
        </div>
        <Button size="medium">수정하기</Button>
      </form>
    </UserInfoBlock>
  );
}
export default UserInfo;

const UserInfoBlock = styled.div`
  width: 50rem;
  margin: auto;
  padding: 4.5rem 5.4375rem;
  text-align: center;

  .title {
    text-align: center;
  }
  form {
    .seller-verification {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 3rem;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  .check-field {
    width: 100%;
    display: flex;
  }

  label {
    width: 5rem;
    text-align: center;
    margin-right: 2rem;
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
