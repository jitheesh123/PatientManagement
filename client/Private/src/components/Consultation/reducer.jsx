const initialState = {
  hospitaldata: [],
  eachData: [],
  timedata: [],
  consultationlist: [],
  listConsult: [],
  listVaccinations: [],
  enquries: [],
  counts: [],
  eachUser: [],
  transactions: [],
};
export const hospitalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HOSPITAL_DATA':
      return {
        ...state,
        hospitaldata: action.payload,
      };
    case 'EACH_HOSPITAL_DATA':
      return {
        ...state,
        eachData: action.payload,
      };
    case 'EACH_DEPARTMENT_DATA':
      return {
        ...state,
        eachData: action.payload,
      };
    case 'GET_TIME':
      return {
        ...state,
        timedata: action.payload,
      };
    case 'GET_CONSULTATION':
      return {
        ...state,
        consultationlist: action.payload,
      };
    case 'LIST_CONSULT':
      return {
        ...state,
        listConsult: action.payload,
      };
    case 'LIST_VACCINATIONS':
      return {
        ...state,
        listVaccinations: action.payload,
      };
    case 'GET_ALL_ENQURIES':
      return {
        ...state,
        enquries: action.payload,
      };
    case 'LIST_PATIENTS':
      return {
        ...state,
        counts: action.payload,
      };
    case 'LIST_EACH_USER':
      return {
        ...state,
        eachUser: action.payload,
      };
    case 'GET_ALL_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
      };

    default:
      return state;
  }
};
