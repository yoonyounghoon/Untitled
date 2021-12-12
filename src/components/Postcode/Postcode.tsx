import React, { useState } from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import useToggle from '../../hooks/useToggle';
import { CheckBtn } from '../auth/Join/Join';
import ModalTemplate from '../common/ModalTemplate';

type PostcodeProps = {
  handleComplete: any;
};

function Postcode({ handleComplete }: PostcodeProps) {
  const [isPopUp, handlePopUp] = useToggle();

  return (
    <>
      <CheckBtn onClick={handlePopUp}>주소검색</CheckBtn>
      {isPopUp && (
        <ModalTemplate
          width="400px"
          height="400px"
          isModal={isPopUp}
          onToggleModal={() => handlePopUp()}
        >
          <DaumPostcode
            style={{
              position: 'absolute',
              right: 0,
              width: '400px',
            }}
            onClose={handlePopUp}
            onComplete={handleComplete}
          />
        </ModalTemplate>
      )}
    </>
  );
}

export default Postcode;
