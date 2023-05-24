import { deleteData, getData, setData } from '../../service';
import {
  setSuccessMessage,
  setErrorMessage,
  loaderTrue,
  loaderFalse,
} from '../../CommonActions/action';
import { editData } from '../../service';
export const getMessages = () => async (dispatch) => {
  dispatch(loaderTrue());
  let { data } = await getData('/Contact');
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
export const PutMessages = (id) => async (dispatch) => {
  let { data } = await editData(`/Contact/${id}`);
  if (data.success) {
    dispatch(setSuccessMessage(data.message.message));
    dispatch(getMessages());
  } else {
    dispatch(setErrorMessage(data.message.message));
  }
};
export const DeleteMessages = (id) => async (dispatch) => {
  let { data } = await deleteData(`/Contact/${id}`);
  if (data.success) {
    dispatch(setSuccessMessage(data.message.message));
    dispatch(getMessages());
  } else {
    dispatch(setErrorMessage(data.message.message));
  }
};
