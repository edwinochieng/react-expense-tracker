import React from "react";
import Budget from "./components/Budget";
import Spent from "./components/Spent";
import Remaining from "./components/Remaining";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
import { GlobalProvider } from "./context/Globalcontext";
function App() {
  return (
    <div className='h-screen bg-violet-400 grid place-items-center'>
      <div className='flex flex-col items-center rounded-3xl bg-zinc-100 border border-solid border-3 border-gray-100 w-96 pt-5'>
        <h1 className='font-bold font-quicksand pb-6 text-xl'>
          Expense Tracker
        </h1>
        <GlobalProvider>
          <Remaining />
          <div className='flex flex-row mt-6'>
            <Budget />
            <Spent />
          </div>
          <History />
          <NewTransaction />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
