import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state

const initialState = {
  transactions: [
    { id: 12, name: "shopping", cost: -40 },
    { id: 13, name: "holiday", cost: -400 },
    { id: 14, name: "salary", cost: +5000000 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
