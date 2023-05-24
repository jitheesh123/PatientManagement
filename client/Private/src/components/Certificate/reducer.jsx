const initialState = { Certificate: [] };

export const CertificateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_Certificate':
      return {
        ...state,
        Certificate: action.payload,
      };

    default:
      return state;
  }
};
