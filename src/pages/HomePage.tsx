import React from 'react';
import ListGoods from '../components/list-goods/List-goods';
import Carousel from '../components/Carousel';
import CategoryMap from '../components/CategoryMap';
import useProducts from '../hooks/useProducts';

const HomePage = () => {
  const { products } = useProducts();
  const recentProducts = products.recentProducts.slice(0, 4);
  console.log(recentProducts);
  return (
    <>
      <Carousel />
      {/* <ListGoods products={products.recentProducts} title={'Best Items'} /> */}
      <CategoryMap />
      <ListGoods products={recentProducts} title={'New Items'} />
      {/* <ListGoods products={products.recentProducts} title={'Like Items'} /> */}
    </>
  );
};

export default HomePage;
