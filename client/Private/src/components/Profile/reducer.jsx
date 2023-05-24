const initialState = { Profile: [] };

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_Profile':
      return {
        ...state,
        Profile: action.payload,
      };

    default:
      return state;
  }
};
