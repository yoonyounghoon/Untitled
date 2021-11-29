import React from 'react';
import ListGoods from '../components/home/list-goods/List-goods';
import Carousel from '../components/Carousel';
import useProducts from '../hooks/useProducts';
import HashtagMap from '../components/home/HashtagMap';

const HomePage = () => {
  const { products } = useProducts();
  const recentProducts = products.recentProducts.slice(0, 4);
  // 추후 api + 데이터 완성시 업데이트 예정
  return (
    <>
      <Carousel />
      <ListGoods products={recentProducts} title={'베스트'} />
      <HashtagMap />
      <ListGoods products={recentProducts} title={'새로운 상품'} />
      {/* <ListGoods products={products.recentProducts} title={'최근 조회한 상품'} /> */}
    </>
  );
};

export default HomePage;
