import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalcontext";

function Budget() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.cost);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="mr-1 border border-solid border-violet-300 rounded-lg h-16 w-36 py-2 px-2 font-quicksand flex flex-col items-center justify-center">
     Income: <span className="text-green-500">${income}</span>
    </div>
  );
}

export default Budget;
