import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import ProductOverview from '../components/ProductDetail/ProductOverview';
import ProductContent from '../components/ProductDetail/ProductContent';
import useProductDetail from '../components/ProductDetail/useProductDetail';
import { useEffect } from 'react';

const ProductDetailPage = ({
  match,
}: RouteComponentProps<{ productId: string }>) => {
  const productId = match.params?.productId;
  console.log(productId);
  useProductDetail(productId);

  return (
    <Wrapper>
      <ProductOverview />
      <ProductContent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export default ProductDetailPage;
