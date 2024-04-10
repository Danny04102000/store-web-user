import React from 'react';
import { formatPrice } from '~/utils/helpers';

import ProductItemStyled from './styled/ProductItemStyled';

function ProductItem({ image, title, price, percent, link }) {
  const handleLink = (url) => {
    alert(url);
  };
  return (
    <ProductItemStyled>
      <div className="product--image" onClick={() => handleLink(link)}>
        {percent && <p className="product--sale">-{percent}%</p>}
        <img src={image} alt={title} />
      </div>
      <div className="product__content">
        <h3 className="product__content--title">{title}</h3>
        <div className="product__content--price">{formatPrice(price)} VND</div>
      </div>
    </ProductItemStyled>
  );
}

export default ProductItem;
