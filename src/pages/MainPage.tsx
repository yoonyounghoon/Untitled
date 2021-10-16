import React from 'react';
import Carousel from '../components/Carousel';
import ListGoods from '../components/list-goods/list-goodsPresenter';

const MainPage = () => {
  return (
    <>
      <Carousel />
      <ListGoods />
      <ListGoods />
      <ListGoods />
    </>
  );
};

export default MainPage;
