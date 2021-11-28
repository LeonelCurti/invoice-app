const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "EDIT":
      return state.map((invoice) =>
        invoice.id === action.id ? { ...invoice, ...action.payload } : invoice
      );
    case "DELETE":
      return state.filter((invoice) => invoice.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
