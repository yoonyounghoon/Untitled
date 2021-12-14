import React from 'react';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { authSelector } from '../../modules/auth/reducer';

function useMyPage() {
  const { user } = useSelector(authSelector);

  const [username] = useInput(user.username);
  const [email] = useInput(user.email);
  const [phoneNumber, onChangePhoneNumber] = useInput(user.phoneNumber);
  const [address, , setAddress] = useInput(user.address.address);
  const [detailAddress, onChangeDetailAddress] = useInput(
    user.address.detailAddress,
  );

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
    setAddress(fullAddress);
  };

  const editUserInfo: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // TODO: API 완성되면 구현
  };

  return {
    username,
    email,
    phoneNumber,
    address,
    detailAddress,
    onChangePhoneNumber,
    onChangeDetailAddress,
    handleComplete,
    editUserInfo,
  };
}

export default useMyPage;
