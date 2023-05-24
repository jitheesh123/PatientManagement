import { setData } from '../../service';
import {
  setSuccessMessage,
  setErrorMessage,
} from '../../../CommonActions/action';
export const PostContact = (values) => async (dispatch) => {
  const { data } = await setData('/Contact', values);
  if (data.success) {
    dispatch(setSuccessMessage(data.message));
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
