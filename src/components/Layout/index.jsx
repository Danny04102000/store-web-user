import Footer from '../Footer';
import Header from '../Header';

import LayoutStyled from './styled';

function LayoutCommon({ children }) {
  return (
    <LayoutStyled>
      <Header />
      <div>{children}</div>
      <Footer />
    </LayoutStyled>
  );
}

export default LayoutCommon;
