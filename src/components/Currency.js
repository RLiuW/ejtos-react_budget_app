import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { expenses } = useContext(AppContext);
    var totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
           <div> <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
         <option defaultValue value="CHG_CURRENCY" name="Dollar">Add</option>
         <option value="CHG_CURRENCY" name="Pound">Reduce</option>
         
   </select> </div>
        </div>
        
   
    );
};
export default Currency;


