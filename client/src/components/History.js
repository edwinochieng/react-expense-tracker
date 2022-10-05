import React,{useEffect} from "react";
import ExpenseList from "./ExpenseList";
import { useContext } from "react";

import { GlobalContext } from "../context/Globalcontext";

function History() {
  const { transactions,getTransactions } = useContext(GlobalContext);

  useEffect(()=>{
    getTransactions();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="font-quicksand mt-6">
      <h1 className="text-lg ml-5 font-bold">History</h1>

      <div>
        <ul>
          {transactions.slice(0,4).map((transacton) => (
            <ExpenseList key={transacton.id} transaction={transacton} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default History;
