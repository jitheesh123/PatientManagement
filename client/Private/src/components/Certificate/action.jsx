import {
  loaderFalse,
  loaderTrue,
  setErrorMessage,
} from '../../CommonActions/action';
import { getData } from '../../service';

export const getCertificate = () => async (dispatch) => {
  dispatch(loaderTrue());
  let { data } = await getData('/Certificate');
  if (data.success) {
    dispatch(loaderFalse());
    dispatch({
      type: 'GET_ALL_Certificate',
      payload: data.data,
    });
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
