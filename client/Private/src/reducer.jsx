import { combineReducers } from 'redux';
import { MessageReducer } from './components/Contacts/reducer';
import { DiseaseReducer } from './components/Disease/reducer';
import { ProfileReducer } from './components/Profile/reducer';
import { hospitalReducer } from './components/Consultation/reducer';
import { TransactionsReducer } from './components/Transaction/reducer';
import { CertificateReducer } from './components/Certificate/reducer';
import { PatientReducer } from './components/Patient/reducer';
import { vaccineReducer } from './components/Vaccination/reducer';
const initialStateCommon = {
  isOpen: false,
  successMessage: null,
  errorMessage: null,
  loader: false,
  ModalOpen: false,
};
const commonReducer = (state = initialStateCommon, action) => {
  switch (action.type) {
    case 'SUCCESS_MESSAGE':
      return {
        ...state,
        successMessage: action.payload,
      };
    case 'ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.payload,
      };
    case 'RESET_SUCCESS_MESSAGE':
      return {
        ...state,
        successMessage: null,
      };
    case 'RESET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: null,
      };
    case 'LOADER_TRUE':
      return {
        ...state,
        loader: true,
      };
    case 'LOADER_FALSE':
      return {
        ...state,
        loader: false,
      };
    case 'MedicalId_True':
      return {
        ...state,
        ModalOpen: true,
      };
    case 'MedicalId_False':
      return {
        ...state,
        ModalOpen: false,
      };
    default:
      return state;
  }
};
export default combineReducers({
  commonReducer,
  MessageReducer,
  DiseaseReducer,
  ProfileReducer,
  hospitalReducer,
  TransactionsReducer,
  PatientReducer,
  CertificateReducer,
  vaccineReducer,
});
