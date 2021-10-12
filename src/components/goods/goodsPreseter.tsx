import React from 'react';
import styled from 'styled-components';


const Goods = () => {
  return (
      <Card>
        <img src="https://picsum.photos/150" alt="product_image"/>
        <ItemTop>
          <div>
            <Name>상품명</Name>
          </div>
          <div>
            <Icon className="fas fa-heart"></Icon>
            <span>(28)</span>
          </div>
        </ItemTop>
        <div>
          <Price>가격</Price>
          <Author>작가명</Author>
        </div>
      </Card>
  );
}

const Card = styled.div`
  width: 150px;
  margin-right: 30px;
`;

const ItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:20px;
`;

const Name = styled.span`
  font-size: 14px;
`

const Icon = styled.i`
  color: red;
`;

const Price = styled.p`
  font-size: 18px;
`;

const Author = styled.p`
  font-size: 12px;
`;

export default Goods;