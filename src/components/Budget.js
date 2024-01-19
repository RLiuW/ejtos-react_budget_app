
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
  const { budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
   const { expenses } = useContext(AppContext);
  const [timer, setTimer] = useState(null);

  const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
  }, 0);
  
    useEffect(() => {
    const timer = setTimeout(() => {
      console.log("entrou tempo");
    }, 500)

    return () => clearTimeout(timer)
  }, [newBudget]);

  const handleBudgetChange = (event) => {  
       console.log (totalExpenses);
      

    if (event.target.value < totalExpenses) {
        //console.log ('entrou no handlebudget IF');
      alert("You cannot reduce the budget value lower than the spending");
      return;
      } else {
    setNewBudget(event.target.value);
      }
  }
  
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
