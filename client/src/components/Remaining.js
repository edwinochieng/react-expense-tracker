import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalcontext";

function Remaining() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.cost);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return <div className="font-quicksand text-2xl">Balance : ${total}</div>;
}

export default Remaining;
