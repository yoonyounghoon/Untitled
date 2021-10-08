import React from 'react';
import CardItem from '../cardItem/cardItemPreseter';
import styled from 'styled-components';


const CardItems = () => {
  return(
    <Section>
      <Top>
        <Title>Best Items</Title>
        <Plus>더보기</Plus>
      </Top>
      <Divide></Divide>
      <Wapper>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </Wapper>
    </Section>
  
  );
}

const Section = styled.section`
  font-family: 'Noto Sans KR', sans-serif;
  width: 49%;
  margin: auto;
`;

const Top = styled.div`
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

const Wapper = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 35px ;
  margin-left: 30px ;
`;

export default CardItems;