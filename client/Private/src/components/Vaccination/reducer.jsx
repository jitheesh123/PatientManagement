const initialState = {
  vaccinelist: [],
  eachVaccineData: [],
};
export const vaccineReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_VACCINE':
      return {
        ...state,
        vaccinelist: action.payload,
      };
    case 'GET_EACH_VACCINE':
      return {
        ...state,
        eachVaccineData: action.payload,
      };
    default:
      return state;
  }
};
