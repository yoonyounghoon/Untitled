import React from 'react';
import SellerInfoList from '../components/sellerInfo/SellerInfoList';
import ReviewList from '../components/sellerInfo/ReviewList';
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
