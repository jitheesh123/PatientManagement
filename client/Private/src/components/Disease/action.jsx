import {
  loaderFalse,
  loaderTrue,
  setErrorMessage,
  setSuccessMessage,
} from '../../CommonActions/action';
import { deleteData, getData, setData } from '../../service';

export const DiseasePost = (values, navigate) => async (dispatch) => {
  const { data } = await setData('/Disease', values);
  if (data.success) {
    dispatch(setSuccessMessage(data.message));
    navigate('/DiseaseList');
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
export const GetDisease = () => async (dispatch) => {
  dispatch(loaderTrue());
  const { data } = await getData('/Disease');
  if (data.success) {
    dispatch(loaderFalse());
    dispatch({
      type: 'GET_DISEASE',
      payload: data.data,
    });
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
export const DeleteDiseases = (id) => async (dispatch) => {
  let { data } = await deleteData(`/Disease/${id}`);
  if (data.success) {
    dispatch(setSuccessMessage(data.message.message));
    dispatch(GetDisease());
  } else {
    dispatch(setErrorMessage(data.message.message));
  }
};
