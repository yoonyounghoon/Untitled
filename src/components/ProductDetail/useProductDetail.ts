import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { likeProduct } from '../../api/product';
import { getProductData } from '../../modules/product/reducer';

function useProductDetail(productId?: string) {
  const images: string[] = [
    'https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/44ed/752cd1c6277da7bd5505d00a429887649df11b28cd6cfbfc717e0fb6bdea.jpg',
    'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/869a/74e4875bf40dd95fa4e078abd3474e7a42262a7fd79169af7e32de1f1752.jpg',
    'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/009b/ba5c53dd525a446946606934a26a7cb07f3fc3cfe02d79e714058724cdcd.jpg',
  ];

  const dispatch = useDispatch();
  const [mainImg, setMainImg] = useState(images[0]);

  useEffect(() => {
    if (productId) {
      dispatch(getProductData(productId));
    }
  }, []);

  function changeMainImage(src: string) {
    setMainImg(src);
  }

  return { mainImg, images, productId, changeMainImage };
}

export default useProductDetail;
