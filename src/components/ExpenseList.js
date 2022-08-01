import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';;

function ExpenseList({ transaction }) {
  const sign = transaction.cost < 0 ? "-" : "+";
  return (
    <div className="relative">
<li
      className={`border border-solid border-violet-300 rounded-md my-3 mx-5 h-7 w-80 px-2 text-sm flex justify-between items-center ${
        transaction.cost < 0
          ? "border-r-4 border-r-red-600"
          : "border-r-4 border-r-green-500"
      }`}
    > 
      {transaction.name}
      <div>
        <span>
          {sign} ${Math.abs(transaction.cost)}
        </span>
      </div>
      <button className="absolute left-0 h-6 "><DeleteForeverIcon sx = {{fontSize :16}}/></button>
    </li>
    </div>
    
  );
}

export default ExpenseList;
