import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

function Divide() {
  return (
    <DivideLine />
  );
}

export default Divide;

const DivideLine = styled.div`
  border-bottom: 2px solid ${palette.black};
  margin-bottom: 1.5rem;
`;