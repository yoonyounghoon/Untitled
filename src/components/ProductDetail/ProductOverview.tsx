import { useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Button from '../common/Button';

const images: string[] = [
  'https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/44ed/752cd1c6277da7bd5505d00a429887649df11b28cd6cfbfc717e0fb6bdea.jpg',
  'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/869a/74e4875bf40dd95fa4e078abd3474e7a42262a7fd79169af7e32de1f1752.jpg',
  'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/009b/ba5c53dd525a446946606934a26a7cb07f3fc3cfe02d79e714058724cdcd.jpg',
];

const ProductOverview = () => {
  const [mainImg, setMainImg] = useState(images[0]);

  // 클릭시 메인 이미지 변화
  function changeMainImage(src: string) {
    setMainImg(src);
  }
  return (
    <Wrapper>
      <ImgViewer>
        <div className="product-image__items">
          {images.map((imageSrc) => (
            <Thumbnail
              src={imageSrc}
              alt=""
              onMouseEnter={() => changeMainImage(imageSrc)}
            />
          ))}
        </div>
        <MainImage src={mainImg} alt="product image" />
      </ImgViewer>
      <ProductOverviewContent>
        <h1 className="product-content__title">
          [JAJU/자주] 남/여 피치기모 체크 파자마상하세트 6종택1
        </h1>
        <strong className="product-content__price">17,000원</strong>
        <div>
          <span className="product-content__delivery_title">배송비</span>
          <span className="product-content__delivery_content">4,000원</span>
        </div>
        <div>
          <span className="product-content__delivery_period_title">
            배송시작
          </span>
          <span className="product-content__delivery_period_content">
            최대 14일 이내
          </span>
        </div>
        <div className="product-content__buttons">
          <Button inverted className="product-content__like_button">
            찜하기
          </Button>
          <Button className="product-content__chat_button">채팅하기</Button>
        </div>
      </ProductOverviewContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 90px;
`;

const ImgViewer = styled.div`
  display: flex;
  margin-right: 65px;
  .product-image__items {
    display: flex;
    flex-direction: column;
  }
`;

const MainImage = styled.img`
  max-width: 400px;
  max-height: 500px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 20px;
`;

const Thumbnail = styled.img`
  object-fit: cover;
  max-width: 70px;
  max-height: 70px;
  cursor: pointer;
  opacity: 0.5;
  margin: 5px 10px;
  border-radius: 10px;
  :hover {
    opacity: 1;
    border: 1px solid ${palette.purple};
  }
  .active {
    opacity: 1;
  }
`;

const ProductOverviewContent = styled.div`
  position: relative;
  width: 430px;
  display: flex;
  flex-direction: column;
  .product-content__title {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 50px;
  }
  .product-content__price {
    display: inline-block;
    font-size: 28px;
    margin-bottom: 30px;
  }
  .product-content__delivery_title,
  .product-content__delivery_period_title {
    display: inline-block;
    color: ${palette.grey};
    margin: 0 25px 20px 0;
  }
  .product-content__buttons {
    position: absolute;
    bottom: 0;
    .product-content__like_button {
      width: 200px;
      border-radius: 6px;
      border: 1px solid ${palette.purple};
      width: 200px;
      height: 50px;
      margin-right: 10px;
    }
    .product-content__chat_button {
      border-radius: 6px;
      width: 200px;
      height: 50px;
    }
  }
`;

export default ProductOverview;
