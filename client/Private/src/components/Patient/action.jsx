import {
  loaderFalse,
  loaderTrue,
  setErrorMessage,
} from '../../CommonActions/action';
import { getData } from '../../service';

export const getPatient = () => async (dispatch) => {
  dispatch(loaderTrue());
  let { data } = await getData('/Patients');
  if (data.success) {
    dispatch(loaderFalse());
    dispatch({
      type: 'GET_ALL_Patients',
      payload: data.data,
    });
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
