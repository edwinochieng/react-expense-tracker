import React from 'react'

function ExpenseList(props) {
  return (
        <li className='border border-solid border-violet-300 rounded-md my-3 h-7 w-80 px-3 text-sm flex justify-between items-center' >
            {props.name}
            <div >
            <span>
                ${props.cost}
            </span>
            </div>
           
        </li>
    
  )
}

export default ExpenseList