import React from 'react';
import ListGoods from '../components/list-goods/List-goods';
import Carousel from '../components/Carousel';
import CategoryMap from '../components/CategoryMap';

const HomePage = () => {
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

export default HomePage;
