import React from 'react';
import styled from 'styled-components';

function ReviewList() {
  return (
    <div>
      <h2>판매자 리뷰</h2>
      <h4>리뷰(21)</h4>
      <p>반딱반딱</p>
      <p>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </p>
      <p>
        상태 좋은 미개봉 상품 원가양도로 받았습니다! 포장 꼼꼼히 해주셔서
        감사합니다☺️🤟
      </p>
      <Divide />
      <p>반딱반딱</p>
      <p>★★★★★ 4.0</p>
      <p>
        상태 좋은 미개봉 상품 원가양도로 받았습니다! 포장 꼼꼼히 해주셔서
        감사합니다☺️🤟
      </p>
    </div>
  );
}

export default ReviewList;

const Divide = styled.div`
  border-bottom: 1px solid #dbdbdb;
`;
