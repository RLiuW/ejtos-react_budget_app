
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
  const { budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const { expenses } = useContext(AppContext);
  var totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
  }, 0);
  
  const handleBudgetChange = (event) => {

       console.log (totalExpenses);

    if (event.target.value < totalExpenses) {
        console.log ('entrou no handlebudget IF');
      alert("You cannot reduce the budget value lower than the spending");
      return;
      } else {
    setNewBudget(event.target.value);
      }
  }
  /*const handleBudgetChange = (event) => {
    const updatedBudget = event.target.value;
       console.log ('entrou no handlebudget change');
    console.log (spent);

    if (updatedBudget < spent) {
        console.log ('entrou no handlebudget IF');
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }else {
        setNewBudget(updatedBudget);
    }

    
  };*/

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £</span>
      <input 
        type="number" 
        step="10" 
        value={newBudget} 
        on
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;
