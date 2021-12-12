import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
  checkCodeAPI,
  checkEmailAPI,
  checkIdAPI,
  checkNicknameAPI,
  joinAPI,
  sendEmailAPI,
} from '../../../api/auth';
import { EMAIL_AUTH_SUCCESS_CODE } from '../../../lib/constants';

type responseCodesType = {
  email: null | string;
  id: null | string;
  nickname: null | string;
};

export type JoinForm = {
  email: string;
  id: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  address: string;
  detailAddress: string;
  emailToken: string;
};

function useJoin() {
  const [form, setForm] = useState({
    email: '',
    id: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    address: '',
    detailAddress: '',
    emailToken: randomString(),
    certificationCode: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const history = useHistory();

  const { email, id, nickname, emailToken, certificationCode } = form;

  const [responseCodes, setResponseCodes] = useState<responseCodesType>({
    email: null,
    id: null,
    nickname: null,
  });

  useEffect(() => {
    if (isSuccess) {
      history.push('/login');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (responseCodes.email === EMAIL_AUTH_SUCCESS_CODE) {
      sendEmail();
    }
  }, [responseCodes.email]);

  const sendEmail = async () => {
    try {
      const { certificationCode } = await sendEmailAPI(email, emailToken);
      sessionStorage.setItem('emailToken', certificationCode);
    } catch (e) {
      console.log(e);
    }
  };
  const checkId: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      const { code } = await checkIdAPI(id);
      setResponseCodes({ ...responseCodes, id: code });
    } catch (e) {
      console.log(e);
    }
  };

  const checkNickname: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();
    try {
      const { code } = await checkNicknameAPI(nickname);
      setResponseCodes({ ...responseCodes, nickname: code });
    } catch (e) {
      console.log(e);
    }
  };

  const checkEmail: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      const { code } = await checkEmailAPI(email);
      setResponseCodes({ ...responseCodes, email: code });
    } catch (e) {
      console.log(e);
    }
  };

  const checkCode: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      const { token } = await checkCodeAPI(certificationCode, emailToken);
      sessionStorage.setItem('signupToken', token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setForm({ ...form, address: fullAddress });
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setForm((state) => ({ ...state, [id]: value }));
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const response = await joinAPI(form);
      if (response.status === 200) {
        setIsSuccess(true);
        alert('회원가입이 완료되었습니다');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    form,
    responseCodes,
    onChange,
    onSubmit,
    checkEmail,
    sendEmail,
    checkCode,
    checkId,
    checkNickname,
    handleComplete,
  };
}

export default useJoin;

function randomString() {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  const stringLength = 16;
  let randomstring = '';

  for (let i = 0; i < stringLength; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
}
