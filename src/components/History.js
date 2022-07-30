import React from 'react';
import ExpenseList from './ExpenseList';

function History() {

    const expenses = [
        { id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
    ]
  return (
    <div className='font-quicksand mt-6'>
        <h1 className='text-lg font-bold'>History</h1>

        <div>
            <ul>
                {expenses.map((expense) =>(

                <ExpenseList 
                    id = {expense.id}
                    name = {expense.name}
                    cost = {expense.cost}
                />)
  
                )}
            </ul>
        </div>
    </div>
  )
}

export default History;