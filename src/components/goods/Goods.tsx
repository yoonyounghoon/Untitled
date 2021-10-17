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
`;

const ItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:20px;
`;

const Name = styled.span`
  font-size: 14px;
`

const FavoriteIcon = styled.i`
  color: red;
`;

const FavoriteNum = styled.span`
  font-size: 12px;
`;

const Price = styled.p`
  font-size: 18px;
`;

const Author = styled.p`
  font-size: 12px;
`;

export default Goods;