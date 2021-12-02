import { generateRandomId, calcTotalAmount } from "../utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        {
          ...action.payload,
          id: generateRandomId(),
          totalAmount: calcTotalAmount(action.payload.items),
        },
        ...state,
      ];
    case "EDIT":
      return state.map((invoice) =>
        invoice.id === action.id
          ? {
              ...invoice,
              ...action.payload,
              totalAmount: calcTotalAmount(action.payload.items),
            }
          : invoice
      );
    case "CHANGE_STATUS":
      return state.map((invoice) =>
        invoice.id === action.id
          ? {
              ...invoice,
              status: action.status,
            }
          : invoice
      );
    case "DELETE":
      return state.filter((invoice) => invoice.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
