const initialState = { Messages: [] };

export const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_Contacts':
      return {
        ...state,
        Messages: action.payload,
      };

    default:
      return state;
  }
};
