import React from 'react';
import { AlertRedLine, AlertGreenLine, postCodeStyle, JoinContainer, InputForm, MainTitle, InputWapper,  
  InputTitle, CheckButton, Input, ZoneCodeTitle, SearchButton, Button, HasButtonInput} from './JoinStyle';
import DaumPostCode from 'react-daum-postcode'; // 우편주소 검색 리액트 라이브러리
import { Link } from 'react-router-dom';
import useJoin from '../../hooks/useJoin';

const Join = () => {

  const { onChange, onCheckId, onCheckEmail, onCheckNickname, handleAddress, onSubmitForm, setPopup, onChangeCertificationCode, onCertifyCertificationCode, 
  form, signUpSuccess, isOverlap, certificationCode, isCheck, popup, } = useJoin();

  const popupHandler = () => setPopup(true);

  return(
    <JoinContainer>
      <MainTitle>회원가입</MainTitle>
      <InputForm onSubmit={onSubmitForm}>
        <InputWapper>
          <InputTitle htmlFor="userid">아이디</InputTitle>
          <HasButtonInput id="userid" name="userid" type="text" placeholder="id를 입력해주세요." onChange={onChange}/>
          <CheckButton type="button" onClick={onCheckId}>아이디 인증</CheckButton>
          {isOverlap.id === '' ?  <AlertRedLine>{isOverlap.id}</AlertRedLine> : <AlertGreenLine>{isOverlap.id}</AlertGreenLine>}
        </InputWapper>
        <InputWapper>
          <InputTitle htmlFor="email">이메일</InputTitle>
          <HasButtonInput id="email" type="text" name="email" placeholder="email을 입력해주세요." onChange={onChange}/>
          <CheckButton type="button" onClick={onCheckEmail}>이메일 인증</CheckButton>
          {isOverlap.email === '' ? <AlertRedLine>{isOverlap.email}</AlertRedLine> : <AlertGreenLine>{isOverlap.email}</AlertGreenLine> }
        </InputWapper>
        <InputWapper>
          <InputTitle htmlFor="certificationCode">인증코드</InputTitle>
          <HasButtonInput id="certificationCode" type="text" name="certificationCode" placeholder="인증코드를 입력해주세요." value={certificationCode.user} onChange={onChangeCertificationCode} />
          <CheckButton type="button" onClick={onCertifyCertificationCode}>코드 확인</CheckButton>
          {isCheck ? <AlertGreenLine>인증이 완료되었습니다.</AlertGreenLine> : <AlertRedLine>인증이 완료되지 않았습니다.</AlertRedLine>}
        </InputWapper>
        <InputWapper>
          <InputTitle htmlFor="username">닉네임</InputTitle>
          <HasButtonInput type="text" id="username" name="username" max-length="10" placeholder="닉네임을 입력해주세요." onChange={onChange}/>
          <CheckButton type="button" onClick={onCheckNickname}>닉네임 인증</CheckButton>
          {isOverlap.username === '' ? <AlertRedLine>{isOverlap.username}</AlertRedLine>: <AlertGreenLine>{isOverlap.username}</AlertGreenLine>}
        </InputWapper>
        <InputWapper>
          <InputTitle htmlFor="password">비밀번호</InputTitle>
          <Input id="password" name="password" onChange={onChange} type="password"
          placeholder="문자, 숫자, 특수문자를 포함한 8~15자리의 비밀번호를 입력해주세요."/>
        </InputWapper> 
        <InputWapper>
          <InputTitle>재확인</InputTitle>
          <Input type="password" placeholder="비밀번호를 재입력해주세요." />
        </InputWapper> 
        <InputWapper>
          <InputTitle htmlFor="phoneNumber">전화번호</InputTitle>
          <Input id="phoneNumber" name="phoneNumber" type="text" placeholder="전화번호를 입력해주세요." onChange={onChange}/>
        </InputWapper> 
        <InputWapper>
          <ZoneCodeTitle htmlFor="postcode">우편번호</ZoneCodeTitle>
          <HasButtonInput id="postcode" name="postcode" type="text" defaultValue={form.postcode} placeholder="우편번호를 입력해주세요."/>
          <SearchButton type="button" onClick={popupHandler}>우편번호 검색</SearchButton>
          {popup && <DaumPostCode
            onComplete={handleAddress}
            autoClose
            style={postCodeStyle}/>
          }
        </InputWapper> 
        <InputWapper>
          <InputTitle htmlFor="address">주소</InputTitle>
          <Input id="address" name="address" type="text" defaultValue={form.address} placeholder="주소를 입력해주세요."/>
        </InputWapper> 
        <InputWapper>
          <InputTitle htmlFor="detailAddress">상세주소</InputTitle>
          <Input id="detailAddress" name="detailAddress" type="text" placeholder="상세주소를 입력해주세요." onChange={onChange}/>
        </InputWapper> 
        <Button type="submit">등록</Button>
      </InputForm>
      
      <div>
        {signUpSuccess && <p>회원가입 되었습니다! 로그인 해주세요.</p>}
        <p>
          이미 회원이신가요?&nbsp;
          <Link to="/login">로그인 하러가기</Link>
        </p> 
      </div>
    </JoinContainer>
    
  );
}


export default Join;