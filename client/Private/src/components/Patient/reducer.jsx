const initialState = { Patient: [] };

export const PatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_Patients':
      return {
        ...state,
        Patient: action.payload,
      };

    default:
      return state;
  }
};
