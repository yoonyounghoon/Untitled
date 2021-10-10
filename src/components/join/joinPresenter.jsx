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
            <InputTitle>이메일</InputTitle>
            <EmailInput type="text" placeholder="email을 입력해주세요."/>
            <CheckButton ref={buttonRef} onClick={handleCheck}>중복확인</CheckButton>
          </InputWapper>
          <InputWapper>
            <InputTitle>닉네임</InputTitle>
            <Input type="text" max-length="10" placeholder="닉네임을 입력해주세요."/>
          </InputWapper>
            <AlertLine>사용할 수 있는 이메일입니다.</AlertLine>
            <AlertLine>사용할 수 없는 이메일입니다.</AlertLine>
          <InputWapper>
            <InputTitle>비밀번호</InputTitle>
            <PWInput minLength='8' maxLength='16' type={passwordType.type} placeholder="비밀번호를 입력해주세요."/>
            <CheckPW onClick={handlePasswordType}>
            	{passwordType.visible ? <span>비밀번호 숨기기</span> : <span>비밀번호 보기</span>}
            </CheckPW> 
          </InputWapper> 
          <InputWapper>
            <InputTitle>재확인</InputTitle>
            <PWInput minLength='8' maxLength="16" type={passwordType.type} placeholder="비밀번호를 재입력해주세요."/>
            <CheckPW onClick={handlePasswordType}>
            	{passwordType.visible ? <span>비밀번호 숨기기</span> : <span>비밀번호 보기</span>}
            </CheckPW> 
          </InputWapper> 
          <InputWapper>
            <InputTitle>전화번호</InputTitle>
            <Input type="number" placeholder="전화번호를 입력해주세요."/>
          </InputWapper> 
          <InputWapper>
            <InputTitle>우편번호</InputTitle>
            <ZoneCodeInput value={zoneCode} type="text" placeholder="우편번호를 입력해주세요."/>
            <SearchButton onClick={ () => setPopup(true) }>우편번호 검색</SearchButton>
            {popup && <DaumPostCode
                    onComplete={handleAddress}
                    autoClose
                    style={postCodeStyle}
                  />}
          </InputWapper> 
          <InputWapper>
            <InputTitle>주소</InputTitle>
            <Input value={address} type="text" placeholder="주소를 입력해주세요."/>
          </InputWapper> 
          <InputWapper>
            <InputTitle>상세주소</InputTitle>
            <Input type="text" placeholder="상세주소를 입력해주세요."/>
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

const InputTitle = styled.span`
  position: absolute;
  margin-right:20px;
  width: 130px;
  line-height: 55px;
  font-size: 1.2em;

`;

const EmailInput = styled.input`
  position: relative;
  width: 280px;
  height: 35px;
  left: 110px;
  padding-left: 5px;
  font-size: 1.1em;
`;

const CheckButton = styled.button`
  margin: auto;
  background-color: transparent;
  border: 1px #9980FA solid;
  padding: 10px 10px;
  color: #9980FA;
  border-radius: 5px;
  margin-left:15px;
  left: 110px;
  position: relative;
`;

const Input = styled.input`
  position: relative;
  width: 370px;
  height: 35px;
  &:focus {
    outline: none;
  }
  padding-left: 5px;
  left: 100px;
  font-size: 1.1em;
  margin: 0px 10px;
`;

const PWInput = styled.input`
  position: relative;
  width: 250px;
  height: 35px;
  &:focus {
    outline: none;
  }
  padding-left: 5px;
  margin: 0px 10px;
  left: 100px;
  font-size: 1.1em;
`;

const CheckPW = styled.span`
  color: #9980FA;
  position: relative;
  left: 100px;
`;

const ZoneCodeInput = styled.input`
  position: relative;
  width: 250px;
  height: 35px;
  left: 110px;
  font-size: 1.1em;
  padding-left: 5px;
`;


const SearchButton = styled.button`
  margin: auto;
  background-color: transparent;
  border: 1px #9980FA solid;
  padding: 10px 10px;
  color: #9980FA;
  border-radius: 5px;
  margin-left:15px;
  margin-top:15px;
  left: 110px;
  position: relative;
`;

const Button = styled.button`
  border:0px;
  font-size: 20px;
  background-color: #9980FA;
  border-radius: 5px;
  padding: 5px 35px;
  color: #fff;
  margin: auto;
  margin: 30px 0px;
`;

export default Join;