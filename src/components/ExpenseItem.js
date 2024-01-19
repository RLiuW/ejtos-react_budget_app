import React, { useContext } from 'react';
import { TiDelete, TiMinus, TiPlus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

        const decreaseAllocation = (name) => {
            const expense = {
                name: name,
                cost: 10,
            };
    
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense
            });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>${props.cost}</td>
        <td><TiPlus style = {styles.greenButton} size= '2em' onClick={event=> increaseAllocation(props.name)}>+</TiPlus></td>
        <td><TiMinus style = {styles.redButton} size='2em' onClick={event => decreaseAllocation(props.name)}>-</TiMinus></td>
        <td><TiDelete size='3em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>


    );
};

export default ExpenseItem;

const styles = {
    greenButton: {
      background: 'green',
      color: 'white',
      width: '30px', 
      height: '30px', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
    },
    redButton: {
      background: 'red',
      color: 'white',
      width: '30px', 
      height: '30px', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%', 
      cursor: 'pointer',
    },
  };