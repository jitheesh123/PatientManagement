import { setData } from '../../service';
import { setSuccessMessage, setErrorMessage } from '../../CommonActions/action';
export const PostLogin = (values, navigate) => async (dispatch) => {
  const { data } = await setData('/auth/login', values);
  if (data.success) {
    localStorage.setItem('tokenss', data.data?.accessToken);
    localStorage.setItem('role', data.data?.Role);
    dispatch(setSuccessMessage(data.message));
    navigate('/dashboard');

    if (data.data?.Role === 'Patient' && data?.SignUpData?.MedicalId) {
      dispatch({
        type: 'MedicalId_False',
      });
    }
    if (data.data?.Role === 'Admin') {
      dispatch({
        type: 'MedicalId_False',
      });
    } else {
      dispatch({
        type: 'MedicalId_True',
      });
    }
  } else {
    dispatch(setErrorMessage(data.message));
  }
};
