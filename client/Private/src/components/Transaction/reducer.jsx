const initialState = { Transactions: [] };

export const TransactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_Contacts':
      return {
        ...state,
        Transactions: action.payload,
      };

    default:
      return state;
  }
};
