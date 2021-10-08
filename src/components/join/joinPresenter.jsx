import React,{useState} from 'react';
import styled from 'styled-components';
import DaumPostCode from 'react-daum-postcode';

const Join = () => {
  const [popup, setPopup] = useState(false);
  const [address, setAddress] = useState('');
  const [zoneCode, setZoneCode] = useState('');

  const handleAddress = data => {
    let AllAddress = data.address;    //주소 변수
    let zonecode = data.zonecode; 
    let extraAddress = '';     //()안 참고항목 변수
    
    if (data.addressType === 'R') {     
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {  
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {   // 건물명이 있고
        extraAddress +=
          extraAddress !== '' ? ', ' + data.buildingName : data.buildingName;
      }
      AllAddress += extraAddress !== '' ? `(${extraAddress})` : ''; 
    }   
    setAddress(AllAddress);
    setZoneCode(zonecode);
   };

   const postCodeStyle = {
    position: 'absolute',
    top: 100,
    left: 'width/2',
    width: '400px',
    height: '500px',
    display: 'block',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '1px black solid',
  };

  return(
    <Container>
      <JoinWapper>
        <h1>회원가입</h1>
        <InputList>
          <InputField>
            <InputTitle>이메일</InputTitle>
            <Input type="text" placeholder="email을 입력해주세요."/>
            <InnerButton>중복확인</InnerButton>
            <AlertLine>사용할 수 있는 이메일입니다.</AlertLine>
            <AlertLine>사용할 수 없는 이메일입니다.</AlertLine>
          </InputField>
          <InputField>
            <InputTitle>닉네임</InputTitle>
            <Input type="text" max-length="10" placeholder="닉네임을 입력해주세요."/>
          </InputField>
          <InputField>
            <InputTitle>비밀번호</InputTitle>
            <Input type="text" max-length="16" placeholder="비밀번호를 입력해주세요."/>
          </InputField>
          <InputField>
            <InputTitle>비밀번호 확인</InputTitle>
            <Input type="text" max-length="16" placeholder="비밀번호를 재입력해주세요."/>
          </InputField>
          <InputField>
            <InputTitle>전화번호</InputTitle>
            <Input type="number" placeholder="전화번호를 입력해주세요."/>
          </InputField>
          <InputField>
            <InputTitle>우편번호</InputTitle>
            <Input value={zoneCode} type="text" placeholder="우편번호를 입력해주세요."/>
            <InnerButton onClick={ () => setPopup(true) }>우편번호 검색</InnerButton>
            {popup && <DaumPostCode
                    onComplete={handleAddress}
                    autoClose
                    style={postCodeStyle}
                  />}
          </InputField>
          <InputField>
            <InputTitle>주소</InputTitle>
            <Input value={address} type="text" placeholder="주소를 입력해주세요."/>
          </InputField>
          <InputField>
            <InputTitle>상세주소</InputTitle>
            <Input type="text" placeholder="상세주소를 입력해주세요."/>
          </InputField>
        </InputList>
        <Button>등록</Button>
      </JoinWapper>
    </Container>
  );
}

const Container = styled.section`
font-family: 'Noto Sans KR', sans-serif;
  width:500px;
  border: 1px black solid;
  margin: 10px auto;
  padding: 10px 0px;
  text-align: center;
`;

const JoinWapper = styled.div`
  align-items: center;
`;

const AlertLine = styled.p`
 color:#9980FA;
 font-size: 5px;
`;


const InputTitle = styled.span`
  margin-right:20px;
`;


const InputList = styled.ul`
  width: 400px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const InputField = styled.li`
  flex-direction: column;
  margin: 10px 0px;
  padding: 5px;

`;

const Input = styled.input`
  width: 170px;
  height: 25px;
  &:focus {
    outline: none;
  }
  padding-left: 5px;
`;

const InnerButton = styled.button`
  margin: auto;
  background-color: transparent;
  border: 1px #9980FA solid;
  padding: 5px 10px;
  color: #9980FA;
  border-radius: 5px;
  margin-left:15px;
  margin-top:15px;
`;

const Button = styled.button`
  border:0px;
  font-size: 20px;
  background-color: #9980FA;
  border-radius: 5px;
  padding: 5px 15px;
  color: #fff;
  margin: auto;
`;

export default Join;