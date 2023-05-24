import { setData, getData } from '../../service';
import {
  loaderFalse,
  loaderTrue,
  setErrorMessage,
  setSuccessMessage,
} from '../../CommonActions/action';

export const getHospitaldetails = () => async (dispatch) => {
  let { data } = await getData('/hospital');
  dispatch({
    type: 'HOSPITAL_DATA',
    payload: data.data,
  });
};

export const corespondingHospitalData = (hospital) => async (dispatch) => {
  let { data } = await setData('/hospital', { hospital });
  dispatch({
    type: 'EACH_HOSPITAL_DATA',
    payload: data.data,
  });
};

export const corespondingDepartmentData =
  (hospital, department) => async (dispatch) => {
    let { data } = await setData('/hospital', { hospital, department });
    dispatch({
      type: 'EACH_HOSPITAL_DATA',
      payload: data.data,
    });
  };

export const getTimedata = (date) => async (dispatch) => {
  let { data } = await setData('/hospital/time', date);
  dispatch({
    type: 'GET_TIME',
    payload: data.data,
  });
};

export const postConsultation =
  (bookingData, transactionData, navigate) => async (dispatch) => {
    try {
      let { data } = await setData('/consultation', {
        bookingData,
        transactionData,
      });
      if (data.success === true) {
        dispatch(setSuccessMessage(data?.message));
        navigate('/Consultaion');
      } else {
        dispatch(setErrorMessage(data?.message));
      }
    } catch (error) {
      dispatch(setErrorMessage(error));
    }
  };

export const getConsultaion = () => async (dispatch) => {
  try {
    let { data } = await getData('/consultation');
    dispatch({
      type: 'GET_CONSULTATION',
      payload: data.data,
    });
  } catch (e) {
    dispatch(setErrorMessage(e.message));
  }
};
export const getConsultResult = () => async (dispatch) => {
  dispatch(loaderTrue());
  let { data } = await getData('/consultation');
  if (data.success) {
    dispatch(loaderFalse());
    dispatch({
      type: 'LIST_CONSULT',
      payload: data.data.consultationData,
    });
    dispatch({
      type: 'LIST_EACH_USER',
      payload: data.data.data,
    });
  } else {
    dispatch(setErrorMessage(data.message));
  }
};

export const geteachUser = () => async (dispatch) => {
  let { data } = await getData('/userdata');
  dispatch({
    type: 'LIST_EACH_USER',
    payload: data.data,
  });
};

export const CertificateCreation = (certdata) => async (dispatch) => {
  let { data } = await setData(`/consultation/issue-consultation`, {
    certdata,
  });
  if (data.success === true) {
    dispatch(setSuccessMessage(data.message));
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
