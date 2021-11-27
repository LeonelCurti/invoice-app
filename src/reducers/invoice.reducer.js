const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((invoice) => invoice !== action.id);
    default:
      return state;
  }
};

export default reducer;
