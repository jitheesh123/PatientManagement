import { setData, getData } from '../../service';
import {
  loaderFalse,
  loaderTrue,
  setErrorMessage,
  setSuccessMessage,
} from '../../CommonActions/action';

export const getVaccineList = () => async (dispatch) => {
  try {
    let { data } = await getData('/vaccination/vaccine');
    dispatch({
      type: 'LIST_VACCINE',
      payload: data.data,
    });
  } catch (e) {
    dispatch(setErrorMessage(e.message));
  }
};
export const getVaccineTableList = () => async (dispatch) => {
  try {
    let { data } = await getData('/vaccination');
    dispatch({
      type: 'LIST_VACCINE',
      payload: data.data.data,
    });
    dispatch({
      type: 'LIST_EACH_USER',
      payload: data.data.vaccineData,
    });
  } catch (e) {
    dispatch(setErrorMessage(e.message));
  }
};
export const postVaccine =
  (bookingData, transactionData, navigate) => async (dispatch) => {
    try {
      let { data } = await setData('/vaccination', {
        bookingData,
        transactionData,
      });
      if (data.success === true) {
        dispatch(setSuccessMessage(data?.message));
        navigate('/Vaccination');
      } else {
        dispatch(setErrorMessage(data?.message));
      }
    } catch (error) {
      dispatch(setErrorMessage(error));
    }
  };
export const getEachVaccineData = () => async (dispatch) => {
  dispatch(loaderTrue());
  let { data } = await getData('/vaccination');
  if (data.success) {
    dispatch(loaderFalse());
    dispatch({
      type: 'GET_EACH_VACCINE',
      payload: data.data.vaccineData,
    });
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
export const issueVaccinationCertificate =
  (vaccinedata) => async (dispatch) => {
    let { data } = await createData(`/issue-vaccination`, { vaccinedata });
    if (data.success === true) {
      dispatch(setSuccessMessage(data?.data));
    } else {
      dispatch(setErrorMessage(data.message));
    }
  };
