import { setErrorMessage, setSuccessMessage } from '../../CommonActions/action';
import { getData, setData } from '../../service';

export const ProfilePost = (values) => async (dispatch) => {
  const { data } = await setData('/Profile', values);
  if (data.success) {
    dispatch(setSuccessMessage(data.message));
    navigate('/dashboard');
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
export const GetProfile = () => async (dispatch) => {
  const { data } = await getData('/Profile');
  if (data.success) {
    dispatch({
      type: 'GET_Profile',
      payload: data?.data[0],
    });
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
