import { setErrorMessage, setSuccessMessage } from '../../CommonActions/action';
import { setData } from '../../service';

export const PostSignUp = (values, navigate) => async (dispatch) => {
  const { data } = await setData('/Patient', values);
  if (data.success) {
    dispatch(setSuccessMessage(data.message));
    navigate('/login');
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
