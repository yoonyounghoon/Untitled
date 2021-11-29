import React from 'react';
import Goods from '../../goods/Goods';
import styled from 'styled-components';
import { productItem } from '../../../modules/Products/reducer';

type Props = {
  title: string;
  products: productItem[];
};

const ListGoods: React.FC<Props> = ({ products, title }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <MoreBtn>더보기</MoreBtn>
      </Header>
      <List>
        {products.map((product) => {
          return (
            <Goods
              productName={product.productName}
              productPrice={product.productPrice}
              productRating={product.productRating}
            />
          );
        })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 940px;
  margin: 50px auto;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #5a5d5a;
`;

const Title = styled.div`
  margin-bottom: 13px;
  font-size: 28px;
  margin-bottom: 20px;
`;

const MoreBtn = styled.button`
  height: 10px;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;

export default ListGoods;
