import React, { useState } from 'react';
import useAxios from './useAxios';
import { Address } from 'react-daum-postcode';

// 난수 생성
export function randomString() {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  const stringLength = 16;
  let randomstring = '';

  for (let i = 0; i < stringLength; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  };
  return randomstring;
};


function useJoin(){
  const { onAxios } = useAxios();
  const [popup, setPopup] = useState(false);
  const [isOverlap, setIsOverlap] = useState({ // 중복 확인
    id: '',
    email: '',
    username: '',
  }); 
  const [isCheck, setIsCheck] = useState(false); // 인증 확인
  const [certificationCode , setCertificationCode] = useState({ // 인증번호
    user: '',
    server: '',
  });
  const [form, setForm] = useState({
    userid:'',
    email: '',
    username: '',
    password: '',
    phonenum: '',
    address: '',
    postcode: '',
    detail_address: '',
    token: randomString(),
  });
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value });
  };

  //사용자 입력 인증코드
  const onChangeCertificationCode: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setCertificationCode({...certificationCode, user: value});
  };

  // 아이디 중복검사
  const onCheckId: React.ChangeEventHandler<HTMLInputElement> = (e) => { // post 400
    onAxios('overlap/userid', {"userid": form.userid}, 'userid overlap')
    .then((res) => {
      setIsOverlap({...isOverlap, id: '사용가능한 아이디입니다'})
    })
    .catch((error) => setIsOverlap({...isOverlap, username: ''}))
  }

  const onCheckEmail:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    //중복검사
    onAxios('overlap/email', {"email": form.email}, 'Email overlap')
      .then((res) => {
        setIsOverlap({...isOverlap, email: '사용가능한 이메일입니다'})
      })
      .catch((error) => setIsOverlap({...isOverlap, username: ''}))
    
    //이메일 인증메일 발송
    fetch("https://gradu-test.herokuapp.com/verification/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": form.email, 
        "token": randomString()
      }),
    })
    .then((response) => response.json())
    .then((data) => setCertificationCode({...certificationCode, server: data.data.certificationCode})) // 만료기간, 인증코드 반환
  }

  //이메일 인증코드 일치 확인
  const onCertifyCertificationCode = () => { // Post 500

    if( certificationCode.user === certificationCode.server ){ 
      onAxios('verification/code', {"certificationCode": certificationCode.user, "token": randomString()}, 'confirm same_code').then(() => {
        // 인증완료 메세지 전달
        setIsCheck(true);
      })
    }
  };


  //닉네임 중복검사
  const onCheckNickname: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onAxios('overlap/username', {"username": form.username}, 'username overlap')
    .then((res) => 
      setIsOverlap({...isOverlap, username: '사용가능한 닉네임입니다'})
    )
    .catch((error) => setIsOverlap({...isOverlap, username: ''}))
  };


  //우편번호 검색페이지 주소생성함수
  const handleAddress: ((address:Address) => void) = (data) => {
    let AllAddress = data.address;  
    let zonecode = data.zonecode; 
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {     
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {  
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') { 
        extraAddress +=
          extraAddress !== '' ? ', ' + data.buildingName : data.buildingName;
      }
      AllAddress += extraAddress !== '' ? `(${extraAddress})` : ''; 
    }   
    setForm({...form, address: AllAddress, postcode: zonecode});
   };


  const onSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {  // Post 400
    e.preventDefault();

    onAxios('join', form, 'join')
    .then((res) => {
      setSignUpSuccess(true);
    })
    .catch((error) => {
    })
    .finally(() => {});
  };


  return {onChange, onCheckId, onCheckEmail, onCheckNickname,handleAddress,onSubmitForm, 
    popup, setPopup,form, setForm,signUpSuccess, setSignUpSuccess, isOverlap, setIsOverlap, isCheck, 
    certificationCode, onCertifyCertificationCode, onChangeCertificationCode,
  }
}

export default useJoin;
