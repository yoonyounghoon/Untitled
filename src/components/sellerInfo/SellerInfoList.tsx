import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Button from '../common/Button';

const CountBox = ({ title }: { title: string }) => {
  return (
    <BoxWrapper>
      <p>{title}</p>
      <strong>10</strong>
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  text-align: center;
  p {
    color: #8492a6;
  }
`;

const SellerInfoList = () => {
  return (
    <SellerInfoBlock>
      <SellerImage
        src={require('../../assets/mong.jpg').default}
        alt="판매자 프로필"
      ></SellerImage>
      <SellerProfile>
        <h3>디디얌</h3>
        <p>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </p>
        <p>디디얌 베이커리 & 디저트</p>
        <CountBoxBlock>
          <CountBox title="판매상품" />
          <CountBox title="팔로워" />
        </CountBoxBlock>
        <FollowBtn size="small">팔로우</FollowBtn>
      </SellerProfile>
    </SellerInfoBlock>
  );
};

export default SellerInfoList;

const SellerInfoBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 62px;
`;

const SellerImage = styled.img`
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-right: 100px;
`;

const SellerProfile = styled.div`
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 13px;
    marginbo
  }
  .fa-star {
    color: ${palette.purple};
  }
`;

const CountBoxBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const FollowBtn = styled(Button)`
  padding: 0.25rem 0.5rem;
`;
