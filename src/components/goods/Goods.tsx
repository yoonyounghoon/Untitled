import React from 'react';
import styled from 'styled-components';


const Goods = () => {
  return (
      <Container>
        <ItemImg src="https://picsum.photos/180" alt="product_image"/>
        <ItemTop>
          <div>
            <Name>상품명</Name>
          </div>
          <div>
            <FavoriteIcon className="fas fa-heart"></FavoriteIcon>
            <FavoriteNum>(28)</FavoriteNum>
          </div>
        </ItemTop>
        <div>
          <Price>가격</Price>
          <Author>작가명</Author>
        </div>
      </Container>
  );
}

const Container = styled.div`
  width: 195px;
`;

const ItemImg = styled.img`
  width: 195px;
  height: 195px;
  cursor: pointer;
`;

const ItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:20px;
`;

const Name = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const FavoriteIcon = styled.i`
  color: red;
`;

const FavoriteNum = styled.span`
  font-size: 12px;
  cursor: pointer;
`;

const Price = styled.p`
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
`;

const Author = styled.p`
  width: 40px;
  font-size: 12px;
  cursor: pointer;
`;

export default Goods;