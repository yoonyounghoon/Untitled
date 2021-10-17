import React from 'react';
import Goods from '../goods/Goods';
import styled from 'styled-components';

const ListGoods = () => {
  return(
    <Section>
      <ListTop>
        <Title>Best Items</Title>
        <Plus>더보기</Plus>
      </ListTop>
      <Divide></Divide>
      <ListBottom>
        <Goods/>
        <Goods/>
        <Goods/>
        <Goods/>
      </ListBottom>
    </Section>
  
  );
}

const Section = styled.section`
  width: 940px;
  margin: auto;
`;

const ListTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight:600;
`;

const Plus = styled.p`
  line-height: 40px;
`;

const Divide = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const ListBottom = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 35px ;
  /* width: 100%; */
`;

export default ListGoods;