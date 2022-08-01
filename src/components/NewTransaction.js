import React, { useContext, useState } from "react";
import {GlobalContext} from "../context/Globalcontext";

function NewTransaction() {
  const [name,setName] = useState("");
  const [cost,setCost] = useState();
  const {addTransaction} = useContext(GlobalContext)
  function onSubmit(event){
     event.preventDefault();

     const newTransaction = {
      id: Math.floor(Math.random() *1000000),
      name,
      cost : +cost
     }
     
    addTransaction(newTransaction)
     
    console.log(newTransaction)
  }
  return (
    <div className="mt-4 font-quicksand ">
      <h1 className="pb-2 text-lg">Add new transacton </h1>

      <form onSubmit ={onSubmit} className="border border-solid border-1 border-violet-200 rounded-lg h-48 w-80 pl-3">
        <div>
          <div className="py-1">
            <label className="text-sm">Title</label>
          </div>

          <div>
            <input
              className="h-7 w-72 rounded-md pl-2 text-sm border border-solid border-violet-300 focus:outline-none"
              type="text"
              placeholder="Enter title.."
              value ={name}
              onChange ={(event) => setName(event.target.value)}

            />
          </div>

          <div className="py-1">
            <label className="text-sm">Amount</label>
            <h1 className="text-xs">(- for expense, + for income)</h1>
          </div>

          <div>
            <input
              className="h-7 w-72 rounded-md pl-2 text-sm border border-solid border-violet-300 focus:outline-none"
              type="number"
              placeholder="Enter amount.."
              value ={cost}
              onChange ={(event) => setCost(event.target.value)}

            />
          </div>
        </div>

        <div className="mt-4">
          <button className="h-8 w-72 border border-solid rounded-md bg-violet-500 items-center text-white">
            Add transacton
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTransaction;
