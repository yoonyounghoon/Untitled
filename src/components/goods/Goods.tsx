import React from 'react';
import styled from 'styled-components';

type productItem = {
  title: string;
  price: number;
  rating: number;
};

const Goods = ({ title, price, rating }: productItem) => {
  return (
    <Container>
      <ItemImg src="https://picsum.photos/180" alt="product_image" />
      <ItemTop>
        <Author>작가</Author>
        <div>
          <FavoriteIcon className="fas fa-heart"></FavoriteIcon>
          <FavoriteNum>(28)</FavoriteNum>
        </div>
      </ItemTop>
      <div>
        <Name>{title}</Name>
        <Price>{price}</Price>
      </div>
    </Container>
  );
};

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
  margin-top: 20px;
`;

const Name = styled.div`
  font-size: 14px;
  cursor: pointer;
  width: 40px;
`;

const FavoriteIcon = styled.i`
  color: red;
`;

const FavoriteNum = styled.span`
  font-size: 12px;
  cursor: pointer;
`;

const Price = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

const Author = styled.span`
  font-size: 12px;
  cursor: pointer;
`;

export default Goods;
