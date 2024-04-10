import LayoutCommon from '~/components/Layout';
import { HomeStyled } from './styled';

function index() {
  return (
    <LayoutCommon>
      <HomeStyled>
        <div className="btn">button</div>
      </HomeStyled>
    </LayoutCommon>
  );
}

export default index;
