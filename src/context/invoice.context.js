import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import invoicesData from "../data/invoices.json";
import invoiceReducer from "../reducers/invoice.reducer";

export const InvoicesContext = createContext();
export const DispatchContext = createContext();

export const InvoicesProvider = (props) => {
  const [invoices, dispatch] = useLocalStorageReducer(
    "invoices",
    invoicesData,
    invoiceReducer
  );
  return (
    <InvoicesContext.Provider value={invoices}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </InvoicesContext.Provider>
  );
};
