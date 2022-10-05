import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import Axios from "axios";

//initial state

const initialState = {
  transactions: [],
  error: null,
  loading: true
};
 //create context
export const GlobalContext = createContext(initialState);
// global provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
 async function getTransactions() {
  try {
      const res = await Axios.get('/api/v1/transactions')

      dispatch({
        type: "GET_TRANSACTION",
        payload : res.data.data
      })
  } catch (err) {
    dispatch({

      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    })
  }
 }

  async function deleteTransaction(id) {
    try {
      await Axios.delete(`/api/v1/transactions/${id}`)
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
    
  }
  async function addTransaction(transaction) {
    const config = {
      headers : {
        'Content-Type' : 'application/json'
      }
    }
    try {
      const res = await Axios.post('/api/v1/transactions',transaction,config)
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
   
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error : state.error,
        loading : state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
