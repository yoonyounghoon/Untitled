import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLikeProducts,
  getPopularProducts,
  getRecentProducts,
} from '../modules/Products/reducer';
import { RootState } from '../modules/store';

function useProducts() {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecentProducts());
    // dispatch(getPopularProducts());
  }, [dispatch]);

  return { products };
}

export default useProducts;
