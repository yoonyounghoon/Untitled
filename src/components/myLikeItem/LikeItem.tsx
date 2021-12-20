import React from 'react';
import styled from 'styled-components';

function LikeItem() {
  return (
    <Block>
      <ProductImage src={require('../../assets/mong.jpg').default} />
      <ProductInfo>
        <h3 className={'title'}>상품이름</h3>
      </ProductInfo>
    </Block>
  );
}

export default LikeItem;

const Block = styled.div`
  display: flex;
  width: 100%;
  height: 12.1875rem;
  border: 1px solid #dbdbdb;
  margin-bottom: 1rem;

`;

const ProductImage = styled.img`
  width: 12.5rem
`;

const ProductInfo = styled.div`
  .title {
    font-size: 1rem;
    font-weight: 400;
  }

  padding: 1rem;
`;