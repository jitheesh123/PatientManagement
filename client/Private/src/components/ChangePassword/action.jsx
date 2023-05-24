import { setData } from '../../service';
import { setSuccessMessage, setErrorMessage } from '../../CommonActions/action';
export const PostChangePassword = (values) => async (dispatch) => {
  const { data } = await setData('/ChangePassword', values);
  if (data.success) {
    dispatch(setSuccessMessage(data.message));
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
