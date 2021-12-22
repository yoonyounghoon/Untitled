import React from 'react';
import { LikeItem } from './index';
import styled from 'styled-components';

function LikeList() {
  return (
    <Block>
      <LikeItem />
      <LikeItem />
      <LikeItem />
      <LikeItem />
    </Block>
  );
}

export default LikeList;

const Block = styled.div`
  height: 50rem;
  overflow: scroll;
`;