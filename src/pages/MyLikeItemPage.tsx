import React from 'react';
import Template from '../components/common/Template';
import LikeList from '../components/myLikeItem/LikeList';

function MyLikeItemPage() {
  return (
    <Template title={'내가 찜한 상품'}>
      <LikeList />
    </Template>
  );
}

export default MyLikeItemPage;
