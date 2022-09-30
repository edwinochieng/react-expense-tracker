import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalcontext";

function Spent() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.cost);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
  return (
    <div className="ml-1 border border-solid border-violet-300 rounded-lg h-16 w-36 py-2 px-2 font-quicksand flex flex-col items-center justify-center">
      Expense :<span className="text-red-600"> ${Math.abs(expense).toFixed(2)}</span>
    </div>
  );
}

export default Spent;
