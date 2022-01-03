import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { productSelector } from '../../modules/product/reducer';
import palette from '../../styles/palette';
import Button from '../common/Button';

const ProductContent = () => {
  const { product } = useSelector(productSelector);

  return (
    <>
      <Nav>
        <ol className="product-detail__list">
          <li className="product-detail__list_item active">
            <a href="#info">작품정보</a>
          </li>
          <li className="product-detail__list_item">
            <a href="#caution">주의사항</a>
          </li>
          <li className="product-detail__list_item">
            <a href="#truth-safety">신뢰와 안전</a>
          </li>
        </ol>
      </Nav>
      <Content>
        <Info>
          <div id="product-info">{product?.productInformation}</div>
          <div id="caution"></div>
          <div id="truth-safety"></div>
        </Info>
        <ArtistCard>
          <div>
            <img src="" alt="" />
            <span>{product?.seller.sellerName}</span>
          </div>
          <p>{product?.seller.sellerInformation}</p>
          <Button className="follow-button" inverted>
            팔로우
          </Button>
        </ArtistCard>
      </Content>
    </>
  );
};

const Content = styled.div`
  width: 1020px;
  display: flex;
`;

const Info = styled.div`
  width: 720px;
  padding: 50px 20px;
`;

const ArtistCard = styled.div`
  min-width: 300px;
  padding: 20px;
  border: 1px solid ${palette.brightGrey};
  border-radius: 6px;
  margin: 10px;
  .follow-button {
    border: 1px solid ${palette.purple};
  }
`;

const Nav = styled.nav`
  width: 100%;
  border-top: 0.5px solid ${palette.brightGrey};
  border-bottom: 0.5px solid ${palette.brightGrey};
  .product-detail__list {
    width: 1020px;
    display: flex;
    margin: 0 auto;
  }
  .product-detail__list_item {
    display: flex;
    margin-right: 10px;
    padding: 16px 28px;
    color: ${palette.grey};
    cursor: pointer;
  }
  .active {
    color: ${palette.purple};
    border-bottom: 1px solid ${palette.purple};
  }
`;

export default ProductContent;
