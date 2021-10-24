import React from 'react';
import Carousel from '../components/Carousel';
import CategoryMap from '../components/CategoryMap/CategoryMap';
import ListGoods from '../components/list-goods/list-goodsPresenter';

const MainPage = () => {
  return (
    <>
      <Carousel />
      <ListGoods />
      <CategoryMap />
      <ListGoods />
      <ListGoods />
    </>
  );
};

export default MainPage;
