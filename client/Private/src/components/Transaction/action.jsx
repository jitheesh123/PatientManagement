import {
  loaderFalse,
  loaderTrue,
  setErrorMessage,
} from '../../CommonActions/action';
import { getData } from '../../service';

export const getTransactions = () => async (dispatch) => {
  dispatch(loaderTrue());
  let { data } = await getData('/Transactions');
  if (data.success) {
    dispatch(loaderFalse());
    dispatch({
      type: 'GET_ALL_Contacts',
      payload: data.data,
    });
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
