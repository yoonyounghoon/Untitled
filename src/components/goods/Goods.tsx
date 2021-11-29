import React from 'react';
import styled from 'styled-components';
import { productItem } from '../../modules/Products/reducer';
import palette from '../../styles/palette';

const Goods = ({ productName, productPrice, productRating }: productItem) => {
  return (
    <Container>
      <ItemImg src="https://picsum.photos/180" alt="product_image" />
      <ItemTop>
        <Author>피의게임</Author>
        <Hearts>
          <FavoriteIcon className="fas fa-heart"></FavoriteIcon>
          <FavoriteNum>({productRating})</FavoriteNum>
        </Hearts>
      </ItemTop>
      <div>
        <Name>{productName}</Name>
        <Price>
          {productPrice.toLocaleString('ko-KR', {
            currency: 'KRW',
          })}
          원
        </Price>
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
  margin-bottom: 8px;
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
  color: ${palette.grey};
  margin-bottom: 10px;
`;

const Hearts = styled.span`
  display: flex;
`;

export default Goods;
