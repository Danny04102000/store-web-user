import ProductList from '~/components/ProductList';
import config from '~/config';

const { productConfig } = config;

import { HomeStyled } from './styled';

function index() {
  return (
    <HomeStyled>
      <div className="inner">
        {Object.keys(productConfig)?.map((key, index) => (
          <section className="sec-cmn" key={index}>
            <h2 className="headline1">{productConfig[key].title}</h2>
            <ProductList lists={productConfig[key].list} />
          </section>
        ))}
      </div>
    </HomeStyled>
  );
}

export default index;
