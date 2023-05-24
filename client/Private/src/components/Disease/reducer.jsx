const initialState = { Disease: [] };

export const DiseaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DISEASE':
      return {
        ...state,
        Disease: action.payload,
      };

    default:
      return state;
  }
};
