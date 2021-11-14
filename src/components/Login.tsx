import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useLogin from '../hooks/useLogin';
import palette from '../styles/palette';
import Button from './common/Button';

type LoginProps = {};

function Login({}: LoginProps) {
  const { onChange, onSubmit } = useLogin();

  return (
    <LoginBlock>
      <Title>로그인</Title>
      <LoginForm onSubmit={onSubmit}>
        <LoginInput
          type="text"
          placeholder="아이디를 입력해주세요"
          name="email"
          onChange={onChange}
        />
        <LoginInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="password"
          onChange={onChange}
        />
        <FindWrap>
          <StyledLink to="#">아이디 찾기</StyledLink>
          <StyledLink to="#">비밀번호 찾기</StyledLink>
        </FindWrap>
        <LoginBtn>로그인</LoginBtn>
        <Button inverted>회원가입</Button>
      </LoginForm>
    </LoginBlock>
  );
}

export default Login;

const LoginBlock = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h2`
  margin: 0;
`;

const LoginForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled.input`
  height: 54px;
  padding: 0px 19px;
  background-color: #f6f8fa;
  border: none;
  outline: none;
  ::placeholder {
    color: #8492a6;
  }
  &:first-child {
    margin-top: 58px;
    margin-bottom: 32px;
  }
`;

const FindWrap = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 30px;
  margin-bottom: 80px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
`;

const LoginBtn = styled(Button)`
  margin-bottom: 16px;
`;
