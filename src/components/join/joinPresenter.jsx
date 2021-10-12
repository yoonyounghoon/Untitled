import React,{useState, useRef} from 'react';
import styled from 'styled-components';
import DaumPostCode from 'react-daum-postcode'; // 우편주소 검색 리액트 라이브러리

const Join = () => {
  const [popup, setPopup] = useState(false);
  const [address, setAddress] = useState(''); //주소 state
  const [zoneCode, setZoneCode] = useState(''); // 우편번호 state
  const [passwordType, setPasswordType] = useState({  //password type 변경용 state
    type: 'password',
    visible: false,
  });

  const buttonRef = useRef();

  //우편번호 검색페이지 주소생성함수
  const handleAddress = data => {
    let AllAddress = data.address;  
    let zonecode = data.zonecode; // 우편번호
    let extraAddress = ''; // 전체 주소(상세주소 제외)
    
    if (data.addressType === 'R') {     
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {  
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {   // 건물명
        extraAddress +=
          extraAddress !== '' ? ', ' + data.buildingName : data.buildingName;
      }
      AllAddress += extraAddress !== '' ? `(${extraAddress})` : ''; 
    }   
    setAddress(AllAddress);
    setZoneCode(zonecode);
   };

   //우편번호 검색 페이지 관련 CSS
   const postCodeStyle = {
    position: 'absolute',
    top: '50%',
    left: 'width/2',
    width: '500px',
    height: '500px',
    display: 'block',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '1px black solid',
    zIndex: 500,
  };

  const handleCheck = e => {
    const div = document.createElement('div');
    div.innerHTML = `<div>중복되는 이메일입니다.</div>`;
    div.style.textAlign = 'center';
    div.style.color = 'red';
    div.style.marginTop = '15px';
    e.target.parentNode.appendChild(div);
  }

  //password type 변경하는 함수
  const handlePasswordType = e => {
      setPasswordType(() => {
        if (!passwordType.visible) {
            return { type: 'text', visible: true };
        }
        return { type: 'password', visible: false };
    })
  }

  // form 기본기능 방지
  const handleCreate = e => {
    e.preventDefault();
  }

  return(
    <Container>
      <JoinWapper>
        <JoinTitle>회원가입</JoinTitle>
        <InputForm onSubmit={handleCreate}>
          <InputWapper>
            <InputTitle for="email">이메일</InputTitle>
            <EmailInput id="email" type="text" placeholder="email을 입력해주세요."/>
            <CheckButton ref={buttonRef} onClick={handleCheck}>중복확인</CheckButton>
          </InputWapper>
          <InputWapper>
            <InputTitle for="nickname">닉네임</InputTitle>
            <Input id="nickname" type="text" max-length="10" placeholder="닉네임을 입력해주세요."/>
          </InputWapper>
            <AlertLine>사용할 수 있는 이메일입니다.</AlertLine>
            <AlertLine>사용할 수 없는 이메일입니다.</AlertLine>
          <InputWapper>
            <InputTitle for="password">비밀번호</InputTitle>
            <PWInput id="password" minLength='8' maxLength='16' type={passwordType.type} placeholder="비밀번호를 입력해주세요."/>
            <CheckPW onClick={handlePasswordType}>
            	{passwordType.visible ? <span>비밀번호 숨기기</span> : <span>비밀번호 보기</span>}
            </CheckPW> 
          </InputWapper> 
          <InputWapper>
            <InputTitle for="PWcheck">재확인</InputTitle>
            <PWInput id="PWcheck" minLength='8' maxLength="16" type={passwordType.type} placeholder="비밀번호를 재입력해주세요."/>
            <CheckPW onClick={handlePasswordType}>
            	{passwordType.visible ? <span>비밀번호 숨기기</span> : <span>비밀번호 보기</span>}
            </CheckPW> 
          </InputWapper> 
          <InputWapper>
            <InputTitle for="phone-number">전화번호</InputTitle>
            <Input id="phone-number" type="text" placeholder="전화번호를 입력해주세요."/>
          </InputWapper> 
          <InputWapper>
            <ZoneCodeTitle for="zone-code">우편번호</ZoneCodeTitle>
            <ZoneCodeInput id="zone-code" value={zoneCode} type="text" placeholder="우편번호를 입력해주세요."/>
            <SearchButton onClick={ () => setPopup(true) }>우편번호 검색</SearchButton>
            {popup && <DaumPostCode
                    onComplete={handleAddress}
                    autoClose
                    style={postCodeStyle}
                  />}
          </InputWapper> 
          <InputWapper>
            <InputTitle for="address">주소</InputTitle>
            <Input id="address" value={address} type="text" placeholder="주소를 입력해주세요."/>
          </InputWapper> 
          <InputWapper>
            <InputTitle for="detail-address">상세주소</InputTitle>
            <Input id="detail-address" type="text" placeholder="상세주소를 입력해주세요."/>
          </InputWapper> 
        </InputForm>
        <Button>등록</Button>
      </JoinWapper>
    </Container>
  );
}

const Container = styled.section`
  width: 570px;
  border: 1px black solid;
  margin: 10px auto;
  padding: 10px 0px;
  text-align: center;
  padding: 30px;
`;

const JoinWapper = styled.div`
  align-items: center;
`;

const InputForm = styled.form`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  margin: 0px 30px;
`;

const JoinTitle = styled.h1`
  margin: 40px 0px;
  font-size: 32px;
`;

const InputWapper = styled.div`
  width: 100%;
  margin: 20px 0px;
`;

const AlertLine = styled.div`
 color: red;
 display: block;
 width: 100%;
 text-align: center;
`;

const InputTitle = styled.label`
  position: absolute;
  margin-right:20px;
  width: 130px;
  line-height: 60px;
  font-size: 23px;
`;

const EmailInput = styled.input`
  position: relative;
  width: 205px;
  height: 30px;
  left: 110px;
  padding: 18px;
  font-size: 1.1em;
  background-color: #F6F8FA;
  border: 0px;
  &::placeholder{
    color: #8492A6;
    font-size: 16px;
  }
  &:focus{
    outline: none;
  }
  border-radius: 6px;
`;

const CheckButton = styled.button`
  margin: auto;
  background-color: transparent;
  border: 2px #9980FA solid;
  padding: 15px 33px;
  color: #9980FA;
  border-radius: 5px;
  margin-left: 15px;
  left: 110px;
  position: relative;
  cursor: pointer;
  font-size: 20px;
`;

const Input = styled.input`
  position: relative;
  width: 370px;
  height: 30px;
  &:focus {
    outline: none;
  }
  padding: 18px;
  left: 100px;
  font-size: 1.1em;
  margin: 0px 10px;
  background-color: #F6F8FA;
  border: 0px;
  &::placeholder{
    color: #8492A6;
    font-size: 16px;
  }
  border-radius: 6px;
`;

const PWInput = styled.input`
  position: relative;
  width: 250px;
  height: 30px;
  &:focus {
    outline: none;
  }
  padding: 18px;
  margin: 0px 10px;
  left: 100px;
  font-size: 1.1em;
  background-color: #F6F8FA;
  border: 0px;
  &::placeholder{
    color: #8492A6;
    font-size: 16px;
  }
  border-radius: 6px;
`;

const CheckPW = styled.span`
  color: #9980FA;
  position: relative;
  left: 100px;
`;

const ZoneCodeTitle = styled.label`
  position: absolute;
  margin-right:20px;
  width: 130px;
  line-height: 83px;
  font-size: 23px;
`;

const ZoneCodeInput = styled.input`
  position: relative;
  width: 190px;
  height: 30px;
  left: 110px;
  font-size: 1.1em;
  padding: 18px;
  background-color: #F6F8FA;
  border: 0px;
  &::placeholder{
    color: #8492A6;
    font-size: 16px;
  }
  &:focus{
    outline: none;
  }
  border-radius: 6px;
`;


const SearchButton = styled.button`
  margin: auto;
  background-color: transparent;
  border: 2px #9980FA solid;
  padding: 15px 18px;
  color: #9980FA;
  border-radius: 5px;
  margin-left:15px;
  margin-top:15px;
  left: 110px;
  position: relative;
  cursor: pointer;
  font-size: 20px;
`;

const Button = styled.button`
  border:0px;
  font-size: 20px;
  background-color: #9980FA;
  border-radius: 5px;
  padding: 10px 45px;
  color: #fff;
  margin: auto;
  margin: 30px 0px;
`;

export default Join;