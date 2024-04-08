import { useDispatch, useSelector } from 'react-redux';
import { setUser, setAccessToken, setLastSuccessAt } from '~/store/modules/authSlice';

const USER = {
  user: 'danny',
  error: false,
  access_token: null,
  lastSuccessAt: null,
};

function index() {
  const dispatch = useDispatch();
  // const { setUser, setAccessToken, setLastSuccessAt } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(setUser(USER));
  };

  return (
    <div>
      <div className="btn" onClick={handleLogin}>
        button
      </div>
    </div>
  );
}

export default index;
