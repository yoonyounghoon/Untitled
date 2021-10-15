import React from 'react';
import ListGoods from '../components/list-goods/list-goodsPresenter';
import SellerInfoList from '../components/SellerInfoList';
import ReviewList from '../components/ReviewList';
import styled from 'styled-components';

const SellerPage = () => {
  return (
    <SellerLayout>
      <SellerInfoList />
      <ReviewList />
    </SellerLayout>
  );
};

export default SellerPage;

const SellerLayout = styled.div`
  max-width: 1100px;
  margin: auto;
`;
