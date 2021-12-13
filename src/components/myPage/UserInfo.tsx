import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { Input } from '../common/Input';
import Postcode from '../Postcode/Postcode';
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
    onSubmit,
  } = useMyPage();

  return (
    <UserInfoBlock>
      <h1>내 정보</h1>
      <form onSubmit={onSubmit}>
        <Input label="닉네임" />
        <Input label="이메일" />
        <Input label="전화번호" onChange={onChangePhoneNumber} />
        <div className="post-code">
          <Input label="우편번호" value={address} readOnly />
          <Postcode handleComplete={handleComplete} />
        </div>
        <Input
          label="상세주소"
          value={detailAddress}
          onChange={onChangeDetailAddress}
        />
        <div className="seller-verification">
          <label>권한</label>
          <Button inverted size="small">
            판매자 등록
          </Button>
        </div>
        <Button>수정하기</Button>
      </form>
    </UserInfoBlock>
  );
}
export default UserInfo;

const UserInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .post-code {
      display: flex;
      align-items: center;
      width: 100%;
      height: 3.375rem;
      margin: 15px 0;
    }

    .seller-verification {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;
